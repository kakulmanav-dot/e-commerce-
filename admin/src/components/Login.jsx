import React, { useState } from 'react'
import { backendURL } from '../App';
import axios from 'axios';
import { toast }from "react-toastify"
function Login({setToken}) {
    let[email,setemail] = useState("");
    let[password,setpassword] = useState("");

    async function submitHandler (e){
        try {
            e.preventDefault();
            const response  = await axios.post(backendURL + "/api/user/admin",{email,password});
            console.log(response);
             if(response.status){
                setToken(response.data.token)
             }else{
                toast.error(response.data.message)
                console.log(response.data)
                console.log("error")
             }
        } catch (error) {
            console.error(error);
                          toast.error(error.message);
        }
    }
  return (
    <div className="flex  justify-center items-center min-h-screen ">
      <div className="bg-white p-7 sm:p-0 w-100 h-100 shadow-xl  ">
        <div className=" mt-10 ml-20 sm:ml-30 ">
          <h1 className="text-3xl">Admin Panel</h1>
        </div>
        <div className="flex flex-col mt-10 justify-center items-center ">
          <form onSubmit={submitHandler} action="" className="font-medium text-lg flex flex-col gap-2">
            <div>
              <p className="">Email Address</p>
              <input type="text" placeholder="Email" className="border  p-1 outline-none" required onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div>
              <p>Password</p>
              <input
                type="text"
                placeholder="Password"
                className="border  p-1 outline-none" required onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <button className='bg-black px-4 py-2 rounded text-white mt-7'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login