import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Products() {
  let {products , currency , addToCart} = useContext(ShopContext);
  let { productId } = useParams();
  let [Image , setimage] = useState([]);
  let [productData , setProductData] = useState([]);
  let [size , setsize] = useState("");

  const fetchData = async() =>{
     const found = products.find((item) => item._id === productId);
     if (found) {
       setProductData(found);
       //console.log(found);
       setimage(found.image[0]);
     }
  }
  useEffect(()=>{
      fetchData();
  },[productId , products])
  return productData ? (
    <div className="border-t p-6 w-100vh">
      <div className=" flex sm:flex-row flex-col justify-center gap-8 ">
        <div className="  flex flex-col-reverse sm:flex-row  justify-center items-center w-full sm:w-[50%] flex-shrink-0 gap-3">
          <div className="flex flex-col overflow-y-scroll overflow-x-auto  gap-2 w-[20%] justify-between  items-center">
            {productData.image?.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt=""
                  onClick={() => {
                    setimage(img);
                  }}
                  className="w-[90%] h-50"
                />
              </div>
            ))}
          </div>
          <div className=" w-[100%]sm:w-[80%] ">
            <img src={Image} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <h1 className="font-medium text-lg text-zinc-900">
              {productData.name}
            </h1>
            <div className="flex mt-2 gap-1 items-center">
              <img src={assets.star_icon} className="w-5 h-5" alt="" />
              <img src={assets.star_icon} className="w-5 h-5" alt="" />
              <img src={assets.star_icon} className="w-5 h-5" alt="" />
              <img src={assets.star_icon} className="w-5 h-5" alt="" />
              <img src={assets.star_dull_icon} className="w-5 h-5" alt="" />
              <p>(122)</p>
            </div>
            <p className="font-medium text-2xl mt-1.5 text-zinc-800">
              {currency} {productData.price}
            </p>
            <p className="text-gray-600 mt-3">{productData.description}</p>
            <div className="mt-7">
              <h2>Select Size</h2>
              <div className="flex gap-2 mt-2">
                {productData.sizes?.map((s , key) => (
                  <button key={key}
                    onClick={() => {
                      setsize(s);
                    }}
                    className={`px-4 py-2 border  bg-gray-100 ${size === s ? "border border-orange-500" : ""}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>{addToCart(productData._id ,size)}} className="bg-black text-white px-3 py-2 active:bg-gray-900 mt-10">
              ADD TO CART
            </button>
            <hr className="w-4/5 mt-5 mb-2" />
            <div className="text-light text-gray-600">
              <p>100% Cruelity Free Products</p>
              <p>2 DayS Delivery </p>
              <p>7 Days Easy Return </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description------------- */}
      <div className="mt-[120px] mb-[120px]">
        <div className="flex">
          <b className="border px-3 py-2">Description</b>
          <p className="border px-3 py-2">Reviews(122)</p>
        </div>
        <div className='text-gray-500 text-light text-left gap-2 flex flex-col mt-3'>
          <p>
            E‑commerce, or electronic commerce, means buying and selling
            products and services over the internet instead of in a physical
            store, allowing customers to browse, order, and pay online using
            digital platforms.([Wikipedia][1]) It makes shopping more convenient
            because people can shop from anywhere at any time without visiting a
            shop, and businesses can reach customers globally beyond local
            borders.
          </p>
          <p>
            E‑commerce also reduces operating costs for sellers by eliminating
            expenses like store rent and staff, while customers benefit from a
            wider choice and often competitive
            prices.([ecommerceprogram.com][3]) Technologies like secure online
            payments, mobile apps, and logistics systems support these online
            transactions and ensure products are delivered to buyers
            efficiently.
          </p>
        </div>
      </div>
      {/* -----------related items------------ */}
      <div>
        <RelatedProduct category={productData.category} subcategory={productData.subCategory}/>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products