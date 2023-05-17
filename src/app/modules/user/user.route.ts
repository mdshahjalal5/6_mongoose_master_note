// ! rap => router> pogud> post> get> update> delete 

import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";
// !router 
const router = express.Router();

/*
   /
   /admins
   /:id   dynamic 
*/
// !post get update delete 
router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
