import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] p-6 gap-10 mt-20 mb-8">
        <div>
          <div>
            <img src={assets.logo} className="w-25 h-12" alt="" />
          </div>
          <p className="text-gray-600 mr-10 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            accusantium accusamus possimus exercitationem ipsam neque eaque
            laboriosam. Ipsum, eos. Accusamus nisi architecto placeat commodi
            quia eveniet perferendis vitae. Dolor, autem.
          </p>
        </div>
        <div>
          <div className="mt-3 text-xl">
            <h1 className="font-semibold">Company</h1>
          </div>
          <ul className="mt-4 text-gray-500  text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="mt-3 text-xl">
          <h1 className="font-semibold">Get In Touch</h1>
          <ul className="mt-4 text-gray-500  text-sm">
            <li>+91 112-133-2222</li>
            <li>contactus@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='font-semibold text-center '>Copyright 2024 Forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer