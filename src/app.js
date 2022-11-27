import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/Auth.routes.js"
import ProductRoutes from "./routes/Products.routes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(ProductRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));

