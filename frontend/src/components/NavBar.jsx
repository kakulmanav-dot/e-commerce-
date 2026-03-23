import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink , Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
function NavBar() {
    let [visibility , setVisibility] = useState(false);
    let { setShowSearch, getCartCount , navigate ,settoken,token , setCartItems } = useContext(ShopContext);

    const logout = () =>{
          localStorage.removeItem("token");
          settoken("");
          setCartItems({});
          navigate("/login")
    }
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        {" "}
        <img className="w-40" src={assets.logo} alt="" />
      </Link>
      <ul className="hidden sm:flex gap-7 text-sm text-gray-800 ">
        <NavLink to={"/"} className=" flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700 " />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1 "
        >
          <p>Collection</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700 " />
        </NavLink>{" "}
        <NavLink to={"/about"} className="flex flex-col items-center gap-1 ">
          <p>About</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-gray-700 " />
        </NavLink>{" "}
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1 ">
          <p>Contact</p>
          <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700 " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer object-cover"
          alt=""
          onClick={() => {
            setShowSearch(true);
          }}
        />
        <div className="group relative">
        
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer "
              alt=""
            />
      
          {token ? <div className="group-hover:block hidden absolute dropdowm-menu  text-gray-700 right-0">
            <div className="bg-slate-100 flex flex-col items-center justify-center w-36 rounded  py-4 px-5 mt-3 text-gray-600">
              <p className="hover:text-black cursor-pointer">Profile</p>
              <p onClick={()=>{navigate("/orders")}} className="hover:text-black cursor-pointer">Orders</p>
              <p onClick={()=>{logout()}} className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>: ""}
        </div>

        <Link to={"/cart"} className="relative">
          <img src={assets.cart_icon} className="w-5 " alt="" />
          <p className="absolute right-[-4px] text-8 bottom-[-5px] bg-black rounded-full text-white leading-4 aspect-sqaure w-4 text-[8px] text-center ">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          onClick={() => {
            setVisibility((prev) => !prev);
          }}
          className="sm:hidden w-5 cursor-pointer"
          alt=""
        />
      </div>
      {/* sliderbar menu for small screen  */}
      <div
        className={`absolute right-0 bottom-0 top-0 transition-all overflow-hidden bg-white ${visibility ? "w-full" : "w-0"} `}
      >
        <div className="flex flex-col">
          <div className="flex gap-2 items-center mt-3 mb-3">
            <img
              onClick={() => {
                setVisibility(false);
              }}
              src={assets.dropdown_icon}
              alt=""
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => {
              setVisibility(false);
            }}
            className="py-3 pl-6 border"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setVisibility(false);
            }}
            className="py-3 pl-6 border"
            to={"/collection"}
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => {
              setVisibility(false);
            }}
            className="py-3 pl-6 border"
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              setVisibility(false);
            }}
            className="py-3 pl-6 border"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar