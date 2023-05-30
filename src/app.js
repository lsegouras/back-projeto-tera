import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./database/mongoConfig.js";
db.connect();

import usersRoutes from "./routes/userRoutes.js";

app.use("/users", usersRoutes);

export default app;
