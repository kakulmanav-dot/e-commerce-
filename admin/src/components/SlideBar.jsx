import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
function SlideBar() {
    
  return (
    <div className="w-[18%] min-h-screen border-r-1 border-gray-300">
      <div className="flex items-start  flex-col gap-3 mt-3 h-full ">
        <NavLink
          to={"/add"}
          className="flex items-center justify-center border py-2.5 ml-3 mr-0 px-5 sm:px-12 gap-3 border-gray-400 border-r-0"
        >
          <img src={assets.add_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex items-center justify-center border py-2.5 ml-3 mr-0 px-5 sm:px-12 gap-3 border-gray-400 border-r-0"
        >
          <img src={assets.order_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">List Items</p>
        </NavLink>{" "}
        <NavLink
          to={"/orders"}
           className="flex items-center justify-center border py-2.5 ml-3 mr-0 px-5 sm:px-10 gap-3 border-gray-400 border-r-0"
        >
          <img src={assets.order_icon} alt="" className="w-5 h-5" />
          <p className="hidden md:block">Orders Items</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SlideBar