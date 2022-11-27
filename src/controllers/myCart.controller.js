import { cartCollection } from "../database/db.js";

export async function postInCart(req, res) {
    const products = req.body;
    const userId = res.locals.userId

    const newArray = { userId, products }
    try {
        await cartCollection.insert(newArray);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    } 
} 

export async function getObjectsInCart(req, res) {
    const userId = res.locals.userId
    console.log(userId)
    ;
     try {
        const productsInCart = await cartCollection
            .find({ userId })
            .toArray();
         res.send(productsInCart);
         return
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
        return
    } 
}