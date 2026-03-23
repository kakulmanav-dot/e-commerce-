import express from "express"
import {placeOrder , placeOrderRazorPay , placeOrderStripe ,allOrders,userOrders,updateStatus} from "../controllers/orderControllers.js"
import adminAuth from "../middleware/AdminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express();
//admin controllers
orderRouter.post("/list",adminAuth , allOrders);
orderRouter.post("/status",adminAuth , updateStatus);

//payment features
orderRouter.post("/place",authUser , placeOrder);
orderRouter.post("/stripe",authUser , placeOrderStripe);
orderRouter.post("/razorpay",authUser , placeOrderRazorPay);

//user router
orderRouter.post("/userorders", authUser, userOrders );

export default orderRouter;