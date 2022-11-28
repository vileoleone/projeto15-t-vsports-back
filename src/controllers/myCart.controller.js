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

export async function deleteObjectsInCart(req, res) {
    const userId = res.locals.userId
    console.log(userId)
    try {
        const productsInCart = await cartCollection
            .deleteOne({ userId })
        res.send("sucesso ao deletar");
        return
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
        return
    } 
}

export async function deleteProductsInCart(req, res) {
    const userId = res.locals.userId
    const { id } = req.params
    try {
        const productsInCart = await cartCollection
            .deleteOne({ userId })
        res.send("sucesso ao deletar");
        return
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
        return
    }
}