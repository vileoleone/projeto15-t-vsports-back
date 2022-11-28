import { sessionsCollection } from "../database/db.js";

export async function myCartPostTokenValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
     if (token === undefined) {
        res.status(401).send("missing token")
        return
    };

    const { userId }  = await sessionsCollection.findOne({ token })
    console.log(userId)
    if (!userId) {
        res.status(401).send("user array in myCart was not found")
        return
    };

    res.locals.userId = userId    
    next() 
}

export async function myCartDeleteTokenValidation(req, res, next) {
    const { token }  = req.params;
    console.log(req.params)
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
    const { product_id } = req.params;
    const userId = res.locals.userId 
    if (!userId) {
        res.status(401).send("missing product id for delete action")
        return
    };

    res.locals.userId = userId

    next()
}