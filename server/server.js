import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import stripeRoute from "./Routes/Stripe.js";
import orderRouter from "./Routes/orderRoutes.js";
import cors from "cors";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// API
app.get("/", (req, res) => res.send("hello from shopnest"));
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/stripe", stripeRoute);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
