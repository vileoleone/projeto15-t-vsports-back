import { sessionsCollection } from "../database/db.js";

export async function myCartPostTokenValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if (token === undefined) {
        res.status(401).send("missing token")
        return
    };

    const  userId  = await sessionsCollection.findOne({ token })

    if (!userId) {
        res.status(401).send("user array in myCart was not found")
        return
    };
    
    res.locals.userId = userId
    
    next()
}

export async function myCarDeleteTokenValidation(req, res, next) {
    const { token } = req.params;

    if (!token) {
        res.status(401).send("missing token")
        return
    };

    const { userId } = await sessionsCollection.findOne({ token })

    if (!userId) {
        res.status(401).send("user array in myCart was not found")
        return
    };

    res.locals.userId = userId

    next()
}