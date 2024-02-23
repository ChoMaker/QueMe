import express, { Express, Request, Response , Application } from 'express';
import * as pg from "pg";

//set up express
const app = express();
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//set up pg
// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "QueMe",
//     password: "Chovy2812@",
//     port: 5433
// })
// db.connect();

// app.get("/getUser",async (req,rs) => {
//     const result = await db.query("SELECT * FROM users");
//     console.log(result);
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
