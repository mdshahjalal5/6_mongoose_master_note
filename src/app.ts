// !n! !imp! toggle escape in vs code 

import express, { Application } from "express";
const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

import cors from "cors";
// using cors
app.use(cors());

// parse data
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
