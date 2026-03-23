import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import express from "express"
import "dotenv/config"
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const registerUser = async (req, res) => {
  console.log("registration hit");

  try {
    let {name,email,password } = req.body;

    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Already User Exist" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter Valid Email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Please enter strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    let token = createToken(user._id);

    res.json({ success: true, message: "success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "failed register" });
  }
};
const loginUser = async (req, res) => {
    try {
        let {email,password} = req.body;
        let exist = await userModel.findOne({email});
        if(!exist){
    return res.status(404).json({ message: " User doesn't Exist" });
        }
        //checking password match or not
        const isMatch = await bcrypt.compare(password , exist.password)

        //if matched then creating token for user
        if(isMatch){
            const token = createToken(exist._id)
         res.status(200).json({success: true, message: " User Matched",token });

        }else{
    res.status(404).json({ message: "Invalid Credentials" });
      }


    } catch (error) {
         console.log(error);
         res.json({ message: "failed login" });
    }
};

const adminLogin = async (req, res) => {
    try {
         let {email} = req.body;
        let {password}  = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token =  jwt.sign({ email, role: "admin" },   // ✅ FIXED (object payload)
        process.env.JWT_SECRET,
        { expiresIn: "1d" })
             res.status(200).json({ message: "admin",token});
        
        }
        
    } catch (error) {
                 console.log(error);
                 res.json({ message: "failed register" });
    }
};

export {loginUser , registerUser , adminLogin}