import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

//setup for MongoDB server
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    mongoClient.connect(() => {
       console.log("connected with database")
    })
} catch (error) {
    console.log(error)
}

export const db = mongoClient.db("tvsportsDataBase");
export const clientsCollection = db.collection("tvsportsDataBase_Clients");
export const sessionsCollection = db.collection("tvsportsDataBase_sessions");
export const portfolioCollection = db.collection("tvsportsDataBase_portfolio");
export const cartCollection = db.collection("tvsportsDataBase_cart");
