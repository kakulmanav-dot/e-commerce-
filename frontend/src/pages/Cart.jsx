import React, { useContext , useState , useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
  let {products , cartItem , currency , updateQuantity , navigate} = useContext(ShopContext);
  let [cartData , setCartData] = useState([]);

  useEffect(() =>
     {
         if(products.length >0){
           let tempData = [];
           for (const items in cartItem) {
             for (const item in cartItem[items]) {
               if (cartItem[items][item] > 0) {
                 tempData.push({
                   _id: items,
                   size: item,
                   quantity: cartItem[items][item],
                 });
               }
             }
           }
           setCartData(tempData);
         }
     },[cartItem,products]);
  return (
    <div>
      <div className="mb-5">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        {cartData.map((item, idx) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );
          return (
            <div
              className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]  border-b py-4 border-t items-center justify-between gap-4"
              key={idx}
            >
              <div className="flex justify-center  gap-4 ">
                <div className="">
                  <img
                    src={productData.image[0]}
                    className="w-20 aspect-sqaure sm:w-20 "
                    alt=""
                  />
                </div>
                <div>
                  <div className="">
                    <p>{productData.name}</p>
                    <div className="flex  gap-10 items-center mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="border py-2 w-10 text-center">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="number"
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? "null"
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                className="border w-5 h-5 sm:w-10 sm:h-10 text-center"
              />
              <img
                src={assets.bin_icon}
                alt=""
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                }}
                className="w-5 h-5  sm:mr-0 "
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <div className="w-full sm:w-[450px] ">
          <CartTotal />
        </div>
      </div>
      <div className='flex justify-end mt-2'>
        <button onClick={()=>{navigate('/place-order')}} className='bg-black text-white px-4 py-2 rounded'>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart