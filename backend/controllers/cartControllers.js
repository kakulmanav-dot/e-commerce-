import userModel from "../models/userModel.js";
//get  products to user carts
const addToCart = async (req,res) =>{
    try {
       const {userId , itemId , size} = req.body;
       let userData = await userModel.findById(userId);
       let cartData = await userData.cartItem;

       if(cartData[itemId]){
           if(cartData[itemId][size]){
               cartData[itemId][size] += 1 ;
           }else{
              
               cartData[itemId][size] = 1;
           }
       }else{
         cartData[itemId] = {};
          cartData[itemId][size] = 1;
       }
       await userModel.findByIdAndUpdate(userId,{cartItem: cartData})
       res.json({success:true , message:"Added to Cart"})
    } catch (error) {
       res.json({ success: false, message: "Error in Cart" });
        
    }
}

//get  update the user carts
const updateCart = async (req,res) =>{
    const {userId,itemId,size , quantity} = req.body;
    try {
         const userData = await userModel.findById(userId)
        let cartItem = await userData.cartItem;

        cartItem[itemId][size] = quantity;

         await userModel.findByIdAndUpdate(userId, {cartItem});
         res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
         res.json({ success: false, message: "Error in Updating Cart" });
    }
}

//get   user cart data
const getUserCart = async (req,res) =>{
        try{
           let {userId} = req.body;

           let userData = await userModel.findById(userId);
           let cartData = await userData.cartItem;

           res.json({success:true, cartItem: cartData})
        }catch(error){
            res.json({ success: false, message: "Error in Getting Cart" });
        }
}

export {addToCart,updateCart,getUserCart}