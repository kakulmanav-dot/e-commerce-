import React from 'react'
import { assets } from '../assets/assets.js';

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* left side of hero section */}
      <div className="w-full sm:w-1/2   flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] ">
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-8 md:w-11  bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-5xl mt-4 mb-4  text-gray-900">Latest ARRIVALS</h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="h-[2px] w-8 md:w-11  bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
}

export default Hero