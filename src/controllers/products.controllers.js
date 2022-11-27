import { portfolioCollection } from "../database/db.js";

export async function getProducts (req, res) {
    
    try {
        const products = await portfolioCollection.find().toArray();
        if(!products){
            res.sendStatus(404);
            console.log("nenhum produto no banco ainda!")
            return
        }
        res.send(products);
        return
    } catch (err) {
        res.sendStatus(500)
        return
    }
}

export async function postProducts (req, res) {
    const product = res.locals.product;
    try{
        await portfolioCollection.insertOne(product);
        return res.status(200).send("Produto adicionado!")
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }

}