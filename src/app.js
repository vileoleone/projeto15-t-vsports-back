import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/Auth.routes.js"
import myCartRoutes from "./routes/MyCart.routes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(myCartRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));

