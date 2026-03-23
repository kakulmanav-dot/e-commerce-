import {v2 as cloudinary} from "cloudinary"
import productModels from "../models/productModels.js"
import express from "express"

const app  = express();
app.use(express.json())

//function to add product
const addProduct = async(req,res) =>{
     try {
        let {name,description,price,image,category,subcategory,sizes,bestseller,date} = req.body;

        let image1 = req.files.image1 && req.files.image1[0];
        let image2 = req.files.image2 && req.files.image2[0];
        let image3 = req.files.image3 && req.files.image3[0];
        let image4 = req.files.image4 && req.files.image4[0];

        let images = [image1,image2,image3,image4].filter((item) => item !== undefined)
        let imagesUrl = await Promise.all(
          images.map(async (item) =>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
            return result.secure_url;
          })
        )
        const productData = {name,description,price : Number(price),image,category,subcategory,sizes: JSON.parse(sizes),bestseller: bestseller === "true"? true:false,date: Date.now(),image:imagesUrl }
        console.log(productData);

        const product = new productModels(productData)
        await product.save()
       res.json({ success: true, message: "Product Added Successfully" });
       console.log('added');
     } catch (error) {
        console.log(error.message);
        res.json({message: "failed"})
     }
}
//function to list all product
const listProducts = async(req,res) =>{
     try {
       const product = await productModels.find({});
       res.json({ success: true, product: product });
      
     } catch (error) {
       console.log(error.message);
     }
}
//function to remove product
const removeProduct = async(req,res) =>{
     try {
      
        await productModels.findByIdAndDelete(req.body.id)
       res.json({success:true , message: "success , product removed" });

     } catch (error) {
       res.json({ message: "failed , product not removed" });

      console.log(error);
     }
}
//function to single product info
const singleProduct = async(req,res) =>{
     try {
       const { id } = req.params; // <- get ID from URL
       console.log("Received ID:", id);

       const product = await productModels.findById(id);
       if (!product)
         return res.status(404).json({ message: "Product not found" });

       res.json({ message: "success", product });
     } catch (error) {
       res.json({ message: "failed" });

       console.log(error);
     }
}
export {listProducts,addProduct,removeProduct,singleProduct}