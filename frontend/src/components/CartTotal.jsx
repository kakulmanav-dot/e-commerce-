import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

function CartTotal() {
    let {getCartAmount , currency , delivery_fee} = useContext(ShopContext);

  return (
    <div className=''>
      <div>
        <Title text1={"Cart"} text2="Total" />
      </div>
      <div className="mt-5">
        <div className="flex justify-between py-3 text-gray-700">
          <p>SubTotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-gray-700 py-3">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between py-3 font-semibold">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount()+delivery_fee}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal