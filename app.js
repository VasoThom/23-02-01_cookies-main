import express from "express";

import authRouter from "./routes/authRouter.js";

import dotenv from "dotenv";
dotenv.config();

import "./util/mongooseConnect.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(err.message);
});

app.listen(port, () => console.log("App ist am start auf Port: " + port));
