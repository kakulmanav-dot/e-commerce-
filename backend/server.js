import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectDB from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/ordersRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
 connectDB();
  connectCloudinary();

  app.use('/api/user', userRouter)
  app.use('/api/product', productRouter)
   app.use("/api/cart" , cartRouter)
   app.use('/api/order' , orderRouter)
//api endpoint

app.get("/" , (req,res)=>{
    res.send("api working");
})

app.listen(port , ()=>{
    console.log(`server started at ${port}`);
   
})