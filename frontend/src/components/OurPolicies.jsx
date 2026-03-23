import React from 'react'
import { assets } from '../assets/assets'
function OurPolicies() {
  return (
    <div className="flex flex-col justify-center sm:justify-around  items-center gap-5  sm:mb-[100px] sm:flex-row mt-20">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <img src={assets.exchange_icon} className="w-12 h-12" alt="" />
        </div>
        <h2 className="font-semibold">Easy Exchange Policy</h2>
        <p className="text-gray-500">We offer hassle free exchange policy</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <img src={assets.quality_icon} alt="" className="w-12 h-12" />
        </div>
        <h2 className="font-semibold">7 Days Return Policy</h2>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>{" "}
      <div className="text-center">
        <div className="flex items-center justify-center">
          {" "}
          <img src={assets.support_img} alt="" className="w-12 h-12"  />
        </div>

        <h2 className="font-semibold ">Best Customer Support</h2>
        <p className="text-gray-500">We provide 24x7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicies