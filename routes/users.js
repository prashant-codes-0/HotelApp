import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifytoken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user ,youre logged in");
});

router.put("/:id", updateUser); //update

router.delete("/:id", deleteUser); //delete

router.get("/:id", getUser); //get User

router.get("/", getUsers); //getall

export default router;
