import { productSchemaValidation } from "../models/product.validation.js";
import { portfolioCollection } from "../database/db.js";

export async function ProductBodyValidation (req, res, next){
    const product = req.body;

    const {error} = productSchemaValidation.validate(product, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.product = product

    next();
}

export async function checkObjProduct (req, res, next){
    const product = res.locals.product
    console.log(product)
    try {
        const findExistingProduct = await portfolioCollection.findOne({
            $or: [
                {productName: product.productName},
                {image: product.image}]
        })
        console.log(findExistingProduct);
        if (findExistingProduct){
            console.log("produto já existe!");
            return
        }
    } catch (err) {
        console.log(err)
        return
    }
    res.locals.product = product
    next();
}