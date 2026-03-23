import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets';

function Orders() {
  let {currency ,products} = useContext(ShopContext)
   let items = products.slice(0, 4);
  return (
    <div>
      <div className='flex'>
             <Title text1={"My"} text2={"Orders"}/>
      </div>
      <div className=''>
        {
          items.map((item) =>{
            return (
              <div className="grid grid-cols-[2fr_1fr_1fr] border-t mb-5">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={item.image[0]}
                      className="w-20 h-15 mt-2"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 font-medium">
                    <p>{item.name}</p>
                    <div className="flex gap-10 text-gray-500 font-light m-1">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantity: 1 </p>
                      <p>Size: 1</p>
                    </div>
                    <p className="text-gray-500 font-medium">Date: 25 July,2026</p>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                  <p className="border w-3 h-3 rounded-full bg-green-500"></p>
                  <p>Ready to Ship</p>
                </div>
                <div className='flex items-center justify-end text-gray-500'>
                  <button className='border px-4 py-2'>Track Order</button>
                </div>
              </div>
            );
          })
        }
      </div>
      
    </div>
  )
}

export default Orders