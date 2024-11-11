// !n! !imp! toggle escape in vs code

// ! cojur => cors> json>urlEconded>route

import express, { Application } from "express";
const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";
// ! cors
import cors from "cors";
// using cors
app.use(cors());

// !json
// parse data
app.use(express.json());

// ! urlEncoded
app.use(express.urlencoded({ extended: true }));

// ! route
app.use("/api/v1/user", userRoutes);

export default app;
