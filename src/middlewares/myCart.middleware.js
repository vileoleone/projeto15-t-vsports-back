import { sessionsCollection } from "../database/db.js";

export async function myCartPostTokenValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        res.status(401).send("missing token")
        return
    };


    const { userId } = await sessionsCollection.findOne({ token })
    
    res.locals.userId = userId
    
    next()
}
