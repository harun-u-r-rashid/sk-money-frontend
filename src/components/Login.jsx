import React from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Header from '../base/Header';

// Image Import

import authLogo from '../assets/auth_image/auth.png'
import bkashLogo from '../assets/regular/bkash.png'


// Import

import Toast from '../plugin/Toast'

function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const [logindata, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value })
  }
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = logindata
    if (!email || !password) {
            setError("Email and password are required!")


    }
    else {
         
            // https://    https://sk-money-save-u6f9.onrender.com/
            // const res = await axios.post('http://127.0.0.1:8000/auth/login/', logindata)

            const res = await axios.post('https://sk-money-save-u6f9.onrender.com/auth/login/', logindata)

            const response = res.data
            console.log("response", response)


     


            if (res.status === 200) {
                    // localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem('access_token', JSON.stringify(response.access_token))
                    localStorage.setItem('refresh_token', JSON.stringify(response.refresh_token))

                    Toast().fire({
                      icon: "success",
                      title: "Welcome to SK Saving Money.",
                    });
                    navigate("/dashboard");

                    
                    // toast.success("login successfull")
                    

            }
    }

}

  return (
    <>


      <section>
        <div
          class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div class="w-full max-w-md space-y-8">
            <div class="bg-white shadow-md rounded-md p-6">
              <img
                class="-mt-[80px] border-2 border-slate-800 p-3 mx-auto h-[120px] w-[120px] rounded-full"
                src={authLogo}
                alt=""
              />

{/* onSubmit={handleSubmit} */}

              <form class="mt-5" method="POST" onSubmit={handleSubmit} >


                <div class="mt-1 pb-4">
                  <input
                    type="email"
                    name="email"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Email"  value={logindata.email} onChange={handleLogin}
                  />
                  {/* onChange={(e) => setEmail(e.target.value)} */}
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="password"
                    type="password"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Password"  value={logindata.password} onChange={handleLogin}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>


                <div>
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md border border-transparent bg-[rgb(33,54,68)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div>
                <h1 class="text-center font-semibold mt-1">We Accept</h1>
                <div
                  class="mt-2 w-[100px] mx-auto h-auto border-2 border-[rgb(240,4,127)] p-2 rounded-lg"
                >
                  <img src={bkashLogo} alt="" />
                </div>
                <div class="mt-2">
                  <h1 class="text-center my-3">Not registered yet?</h1>
                  <Link to="/register">
                    <a class="flex justify-center text-center text-[rgb(12,12,232)] font-semibold" >Register now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Login;