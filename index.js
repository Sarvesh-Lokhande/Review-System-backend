import express from "express";
import mongoose from "mongoose";
import dtenv from "dotenv";

import dbConnect from "./config/database,js";
import userModel from "./models/user.js";
import router from "./routes/feedbackRoutes.js";

const app = express();

const PORT = 3000;
app.use(express.json());
app.use("/api/v1",router) 

dbConnect();


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})