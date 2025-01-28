import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


import Toast from '../plugin/Toast';


import authLogo from '../assets/auth_image/auth.png'
import bkashLogo from '../assets/regular/bkash.png'

function Register() {

  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    username: '',
    email: '',
    full_name: '',
    phone: '',
    bkash_number: '',
    password: '',
    confirm_password: ''
  });


  const handleOnChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, full_name, phone, bkash_number, password, confirm_password } = formdata;

    if (!username || !email || !full_name || !phone || !bkash_number || !password || !confirm_password) {

      Toast().fire({
        icon: "error",
        title: "All fields are required!",
      });

    } else if (password !== confirm_password) {
      Toast().fire({
        icon: "error",
        title: "Password doesn't match.",
      });

    } else {

      try {
        // console.log("Request Payload: ", formdata); 
        // https://sk-money-save-u6f9.onrender.com/
        // const res = await axios.post("http://127.0.0.1:8000/auth/register/", formdata);
        const res = await axios.post("https://sk-money-save-u6f9.onrender.com/auth/register/", formdata);
        const response = res.data;
        // console.log("Response: ", response);

        if (res.status === 201) {
          Toast().fire({
            icon: "success",
            title: res.data.message,
          });
          navigate("/");

        }
      } catch (error) {
        Toast().fire({
          icon: "error",
          title: error.response?.data?.message || "Registration failed. Username & email must be unique.",
        });
      }

    }
  };

  const { username, full_name, email, phone, bkash_number, password, confirm_password } = formdata;



  return (
    <>

      <section>
        <div
          class="bg-gray-100 flex  items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div class="w-full h-screen mt-24 max-w-md space-y-8">
            <div class="bg-white shadow-md rounded-md p-6">
              <img
                class="-mt-[80px] border-2 border-slate-800 p-3 mx-auto h-[120px] w-[120px] rounded-full"
                src={authLogo}
                alt=""
              />

              <form class="mt-5" method="POST" onSubmit={handleSubmit}>
                <div class="mt-1 pb-4">
                  <input
                    name="username"
                    type="text"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Username" value={username} onChange={handleOnChange}
                  />
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="full_name"
                    type="text"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Full Name" value={full_name} onChange={handleOnChange}

                  />
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="email"
                    type="email"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Email" value={email} onChange={handleOnChange}
                  />
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="phone"
                    type="text"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm text-black sm:text-sm"
                    placeholder="Phone" value={phone} onChange={handleOnChange}
                  />
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="bkash_number"
                    type="text"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm text-black sm:text-sm"
                    placeholder="Bkash Number" value={bkash_number} onChange={handleOnChange}
                  />
                </div>



                <div class="mt-1 pb-4">
                  <input
                    name="password"
                    type="password"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Password" value={password} onChange={handleOnChange}
                  />
                </div>

                <div class="mt-1 pb-4">
                  <input
                    name="confirm_password"
                    type="password"
                    required
                    class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm text-black"
                    placeholder="Confirm Password" value={confirm_password} onChange={handleOnChange}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md border border-transparent bg-[rgb(33,54,68)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90"
                  >
                    Register Account
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
                  <h1 class="text-center my-3">Have an account?</h1>

                </div>
                <Link to="/">
                  <a class="flex justify-center text-center text-[rgb(12,12,232)] font-semibold" href="">Login Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;