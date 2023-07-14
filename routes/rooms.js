import express  from "express"; 
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router=express.Router();


router.post("/:hotelid",verifyAdmin,createRoom ) //create


router.put("/:id",verifyAdmin,updateRoom);//update


router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);//delete


router.get("/:id",verifyAdmin,getRoom);//get


router.get("/",verifyAdmin,getRooms);//getall

export default router