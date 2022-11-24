import { clientsCollection, sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
    const user = res.locals.user;
    const passwordHash = bcrypt.hashSync(user.password, 10);
    delete (user.password_confirmation)
     try {
        await clientsCollection.insertOne({ ...user, password: passwordHash });
         res.sendStatus(201);
    } catch (err) {
        console.log(err);
         res.sendStatus(500);
         return
    } 
}

export async function signIn(req, res) {
    const user = res.locals.user;

    const token = uuid();

    try {
        await sessionsCollection.insertOne({ token, userId: user._id });
        res.send({ token });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
} 