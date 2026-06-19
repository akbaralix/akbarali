import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";

dotenv.config();
const app = express();

connectDB();

app.listen(5000, () => {
  console.log("Server ishladi");
});
