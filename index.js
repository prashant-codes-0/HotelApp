import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
const app = express();
dotenv.config()
// const  connect =async()=>{
// try{

//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongo db")
// }
// catch(error){
//     throw error
// }
// }

const connect = async () => {
    try {
      // Connect to MongoDB using mongoose
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
      });
  
      console.log('Connected to MongoDB Compass');
    } catch (error) {
      console.error('Failed to connect to MongoDB Compass:', error);
    }
  };
mongoose.connection.on('disconnected',()=>{
console.log("mongo db disconnected")


})
mongoose.connection.on('connected',()=>{
console.log("mongo db connected")


})

app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)




const PORT = process.env.PORT || 8800;

app.listen(PORT, () => 
{
    connect()
  console.log(`"connected to backend on port ${PORT}"`);
});