import { clientSchemaValidation, signInSchemaValidation } from "../models/user.validation.js";
import { clientsCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export function SignUpBodyValidation(req, res, next) {
    const user = req.body;

    const { error } = clientSchemaValidation.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.user = user

    next();
}

export async function checkuserNameAndEmail(req, res, next) {
    const user = res.locals.user

    try {
        const findEmailorUsername = await clientsCollection.findOne({
            $or: [
                { email: user.email },
                { userName: user.userName }]
        })
        console.log(findEmailorUsername)
        if (findEmailorUsername) {
            res.status(401).send("Please try another email or username")
            return
        }

    } catch (error) {
        console.log(error)
        return
    }
    res.locals.user = user
    next();
}

export function SignInSchemaValidation(req, res, next) {
     const user = req.body
    const { error } = signInSchemaValidation.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    res.locals.user = user
    next();
}

export async function signInBodyValidation(req, res, next) {
    const user = res.locals.user;
    const { login, password } = user

    try {
        const findEmailorLogin = await clientsCollection.findOne({
            $or: [
                { email: login },
                { userName: login }]
        })
        if (!findEmailorLogin) {
            return res.status(401).send("Email or Password incorrect");
        }
        const passwordOk = bcrypt.compareSync(password, findEmailorLogin.password);
        if (!passwordOk) {
            return res.status(401).send("Email or Password incorrect")
        }

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    delete(user.password)
    res.locals.user = user;

    next();
}


