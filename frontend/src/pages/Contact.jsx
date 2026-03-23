import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import LetterBox from '../components/LetterBox';

function Contact() {
  return (
    <div>
      <div className=''>
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="flex w-full justify-center items-center gap-10 p-20 -mt-10 ">
        <div className="w-1/2">
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="w-1/2" flex flex-col items-center justify-between >
          <p className='text-xl'>Our Store</p>
          <p className='text-gray-500 mt-3 mb-3'>
            54079 Willims Station <br /> Washington,USA
          </p>
          <p className='text-gray-500'>
            Tel:(475) 938 2443 <br /> Forever@gmail.com
          </p>
          <p className='mb-2 mt-2'>Careers at Forever</p>
          <p className='mb-2 mt-5 text-gray-500'>Learn more about jobs and openings</p>
          <button className="hover:bg-black border-2 border-gray-700 mt-5 hover:text-white px-3 py-2">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className='mt-5'> 
        <LetterBox/>
      </div>
    </div>
  );
}

export default Contact