import express  from "express"; 
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel,deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router=express.Router();





router.post("/",verifyAdmin,createHotel ) //create


router.put("/:id",verifyAdmin,updateHotel);//update


router.delete("/:id",verifyAdmin,deleteHotel);//delete


router.get("/:id",verifyAdmin,getHotel);//get


router.get("/",verifyAdmin,getHotels);//getall

export default router