import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
function ProductItems({id,image,name,price}) {
    let { currency } = useContext(ShopContext);
  return (
    <div>
      <Link to={`/products/${id}`} className="">
        <div className="flex gap-4 justify-center items-center ">
          
            <div className="flex flex-col gap-1">
                <div>
              <img
                className="object-cover hover:scale-110 transition ease-in-out rounded"
                src={image[0]}
                alt=""
              />  </div>
              <p className='text-gray-600 mt-4'>{name}</p>
              <p>
                {currency}
                {price}
              </p>
           
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItems