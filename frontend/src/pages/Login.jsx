import React, { useState , useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from "axios"
import { toast } from 'react-toastify';

function Login() {
  let [currenState , setCurrentState] = useState('Login')
  let {token,settoken ,navigate,backendURL} = useContext(ShopContext)

  let [name,setname] = useState("")
  let [email,setemail] = useState("")
  let [password,setpassword] = useState("");
  async function submitHandler(e){
        e.preventDefault();
      try {
        
      
          console.log(backendURL)
          if(currenState === "Sign Up"){
            
                const response = await axios.post(backendURL+"/api/user/register",
                  {name,email,password},
                );
               
              if(response.data.success){
                settoken(response.data.token);
                localStorage.setItem("token", response.data.token);
              }else{
                toast.error(response.data.message)
              }
          }else{
             const response = await axios.post(backendURL + "/api/user/login" ,{email,password});
            
              if (response.data.success) {
                settoken(response.data.token);
                console.log(response)
                localStorage.setItem("token", response.data.token);
              } else {
                
                toast.error(response.data.message);
              }
          }

      } catch (error) {
            console.log("ERROR:", error.message);
      }
  }
  useEffect(()=>{
      if(token){
        navigate("/");
      }
  },[token])
  return (
    <div>
      <div className="flex gap-2 items-center justify-center mt-10">
        <p className="italic text-5xl prata-regular text-light text-gray-600">
          {currenState}
        </p>
        <p className="w-10 bg-gray-500 h-0.5"></p>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2 items-center justify-center mt-10">
          {currenState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              className="w-[90%] sm:w-1/3 py-2 px-4 border border-black outline-none "
              required
            />
          ) : (
            " "
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            className="w-[90%] sm:w-1/3 py-2 px-4 border border-black outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
            className="w-[90%] ml-3 mr-3 sm:mr-0 sm:ml-0 sm:w-1/3 py-2 px-4 border border-black outline-none"
            required
          />
          <div className="flex  items-center w-[90%] sm:w-1/3 justify-between text-sm text-gray-500">
            <p className="text-gray-500">Forgot your password?</p>
            {currenState === "Sign Up" ? (
              <p
                onClick={() => {
                  setCurrentState("Login");
                }}
              >
                Login Here
              </p>
            ) : (
              <p
                onClick={() => {
                  setCurrentState("Sign Up");
                }}
              >
                Create Account
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-8 rounded py-2 text-white bg-black  mt-5"
          >
            {currenState}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login