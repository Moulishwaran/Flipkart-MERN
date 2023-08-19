import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./databse/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/", Router);

const PORT = 8000;
Connection();
app.listen(PORT, () =>
  console.log(`Server Running Successfully on PORT:${PORT}`)
);

DefaultData();
