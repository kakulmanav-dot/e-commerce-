import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

function BestSeller() {
    const {products} = useContext(ShopContext);
    let [bestSeller , setBestseller] = useState([]);
    useEffect(()=>{
      let bestP = products.filter((item) => item.bestseller);
      setBestseller(bestP.slice(0,7));
    },[products])
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto beatae excepturi vel, blanditiis numquam.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6">
        {bestSeller.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller