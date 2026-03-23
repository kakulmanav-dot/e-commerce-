import React from 'react'
import {assets} from "../assets/assets.js"
function NavBar({setToken}) {
  return (
    <div className='flex justify-between items-center px-4 py-2 w-full '>
        <img src={assets.logo} alt="" className='sm:w-40 w-20 ' />
        <button onClick={()=>{setToken("")}} className='px-3 sm:px-4 py-1 sm:py-2  bg-gray-500 rounded-full text-white font-light'>Logout</button>
    </div>
  )
}

export default NavBar