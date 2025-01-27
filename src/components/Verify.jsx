import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Toast from '../plugin/Toast';
// Image Import
import authLogo from '../assets/auth_image/auth.png'
import bkashLogo from '../assets/regular/bkash.png'

function Verify() {

  const [otp, setOtp] = useState("")
  const navigate = useNavigate()


  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    if (otp) {
      // https://sk-money-save-u6f9.onrender.com/
            const response = await axios.post('http://127.0.0.1:8000/auth/verify/', { 'otp': otp })
            // const response = await axios.post('https://sk-money-save-u6f9.onrender.com/auth/verify/', { 'otp': otp })
            
            if (response.status === 200) {
                
                    Toast().fire({
                      icon: "success",
                      title: "Your account has been verified.",
                    });

                      navigate('/')
                
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

              <div className='my-3'>
                <h1 className='text-center text-[#FF0000] text-[12px] font-semibold'>Verify your account by using passcode from your email</h1>
              </div>

              <form class="mt-5" method="POST" onSubmit={handleOtpSubmit}>

                <div class="mt-1 pb-4">
                  <input
                    name="code"
                    type="text"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="OTP code" value={otp} onChange={(e) => setOtp(e.target.value)}
                    
                  />
                </div>


                <div>
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md border border-transparent bg-[rgb(33,54,68)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90"
                  >
                    Verify
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Verify;