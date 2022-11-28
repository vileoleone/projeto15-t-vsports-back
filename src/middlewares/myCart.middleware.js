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

    res.locals.userId = userId.userId
    
    next()
}

export async function myCartDeleteTokenValidation(req, res, next) {
    const { token }  = req.params;

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

export async function myCartDeleteProductValidation(req, res, next) {
    const { id } = req.params;
    userId = res.locals.userId 
    if (!id) {
        res.status(401).send("missing tproduct id for delete action")
        return
    };

    res.locals.userId = userId

    next()
}