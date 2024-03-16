import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import mysql, { Connection } from "mysql2/promise";
import { userRouter } from "./routes/user";
import { connection } from "./config/db";
import { reserveQueRouter } from "./routes/que";
import { foodRouter } from "./routes/food";
import { orderRouter } from "./routes/order";

//set up express

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
app.use("/", reserveQueRouter);
app.use("/", foodRouter);
app.use("/", orderRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connection.then(() => {
  console.log(`Database start...`);
});
