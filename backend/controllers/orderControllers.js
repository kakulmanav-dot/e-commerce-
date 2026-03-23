import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//place order using Cod
const placeOrder = async(req,res) =>{
     try {
         let {userId , address , items , amount } = req.body;

         let orderData = {
            userId,
            address,
            items,
            amount,
            paymentMethod: "COD",
            payment:false,
            date: Date.now()
         }

         const newOrder = new orderModel(orderData);
         await newOrder.save();

         //empty the cart data
         await userModel.findByIdAndUpdate(userId , {cartItem : {}});

         res.json({success: true , message:"Order Placed"})
     } catch (error) {
        
     }
}
//place order using stripe
const placeOrderStripe = async(req,res) =>{
    
}//place order using razor
const placeOrderRazorPay = async(req,res) =>{
    
}

//all orders for admin panel
const allOrders = async(req,res) =>{

}
 //user orders data for frontend
const userOrders = async(req,res) =>{

}
 //update orders status from admin panel
const updateStatus = async(req,res) =>{
 
}
 
export {placeOrder , placeOrderRazorPay , placeOrderStripe ,allOrders,userOrders,updateStatus}