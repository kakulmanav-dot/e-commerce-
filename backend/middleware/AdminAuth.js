import jwt from "jsonwebtoken"

const adminAuth = async(req,res,next) =>{
    try {
       
        const { token }= req.headers;
        if(!token){
           return res.json({success: "false" ,message:"not authorized login again"});
        }
        let token_decode = jwt.verify(token,process.env.JWT_SECRET)
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
          return res.json({
            success: false,
            message: "Not authorized (wrong email)",
          });
        }

        // ✅ Optional (better)
        if (token_decode.role !== "admin") {
          return res.json({
            success: false,
            message: "Not admin",
          });
    }
          next();
        }
     catch (error) {
        console.log(error);
        res.json({message:"failed authentication"})
    }
}
export default adminAuth;