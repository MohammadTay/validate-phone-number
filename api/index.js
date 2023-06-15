import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

import validRoute from "./routes/phone.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import cors from "cors";


const app = express();
dotenv.config();

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('\x1b[36m', '➡  MONGO-DB ❗');
  } catch (error) {
    console.log(error);
  }
}

app.use(cors())
app.use(express.json());
app.use("/api/valid", validRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen("5000", () => {
  connect()
  console.log('\x1b[32m', '➡  bckend Run ❗');
});
