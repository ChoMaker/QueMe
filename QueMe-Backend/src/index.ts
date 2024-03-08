import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import mysql, { Connection } from "mysql2/promise";
import { userRouter } from "./routes/user";
import { connection } from "./config/db";
import { reserveQueRouter } from "./routes/que";
import { foodRouter } from "./routes/food";

//set up express

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
app.use("/", reserveQueRouter);
app.use("/", foodRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connection.then(() => {
  console.log(`Database start...`);
});

// app.get("/qm/getUser",async (req,rs) => {
//     const result = await(await connection).query("INSERT INTO users (phone_number,password) VALUES ('0985584457','chovy2812')");
//     console.log(result);
// })

// app.post("/qm/login",async (req,rs) => {
//     const result = await(await connection).query("SELECT phone_number FROM users WHERE phone_number=$1",[]);
// })

// app.post("/editUser",async (req,res) => {
//     const name = req.body.updatedName;
//     const id = req.body.updatedId;
//     const result = await db.query("UPDATE users SET name=$1 WHERE id=$2",[name,id]);
//     console.log(result);
// })

// app.post("/addUser",async (req,res) => {
//     const name = req.body.updatedName;
//     //const id = req.body.updatedId;
//     const result = await db.query("INSERT INTO users(name) VALUES ($1) ",[name]);
//     res.status(200).json({ result });
// })

// app.post("/deleteUser",async (req,res) => {
//     const id = req.body.deleteUser;
//     const result = await db.query("DELETE FROM users WHERE id=$1", [id]);
//     res.status(200).json({ result });
// })
