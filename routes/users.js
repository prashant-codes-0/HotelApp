import express from "express";
import {
  updatedUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user ,youre logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user ,youre logged in and youre able to delete your account  ");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin ,youre logged in and youre able to delete all accounts  ");
});

router.put("/:id", verifyUser,updatedUser); //update

router.delete("/:id", verifyUser,deleteUser); //delete

router.get("/:id",verifyUser, getUser); //get User

router.get("/",verifyUser,getUsers); //getall

export default router;
