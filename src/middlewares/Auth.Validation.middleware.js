import { clientSchemaValidation } from "../models/user.validation.js";
import { clientsCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export function SignUpBodyValidation(req, res, next) {
    const user = req.body;

    const { error } = clientSchemaValidation.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
}

export async function checkuserNameAndEmail(req, res, next) {
    const user = req.body
    
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