import React from 'react';


import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Toast from '../plugin/Toast'

import sklogo from '../assets/auth_image/SK LOGO.png'
import depositIcon from '../assets/icons/deposit.png'
import withdrawIcon from '../assets/icons/withdraw.png'

function Header() {


        const navigate = useNavigate()
        const access_token = localStorage.getItem('access_token')
        console.log(access_token)
        const refresh_token = localStorage.getItem('refresh')

        const handleLogout = async () => {
                const res = await axiosInstance.post('auth/logout/', { refresh_token })
                if (res.status === 200) {
                        localStorage.removeItem('access_token')
                        localStorage.removeItem('refresh_token')

                        Toast().fire({
                                icon: "success",
                                title: "Logout Successful.",
                        });
                        navigate('/')

                }
        }
        return (
                <>
                        <nav class="bg-[rgb(33,54,68)] py-3">
                                <div
                                        class="flex flex-wrap items-center justify-between max-w-screen-xl px-1 mx-auto"
                                >
                                        <div class="flex items-center gap-2">
                                                <a href="index.html" class="flex items-center w-[50px] h-[50px]">
                                                        <img
                                                                src={sklogo} class="rounded-full border  border-black "
                                                                alt="Landwind Logo"
                                                        />
                                                </a>

                                                <div class="">
                                                        <h1 class="text-white">harun</h1>

                                                        {/* <!-- Tap to Balance Button --> */}
                                                        <span
                                                                id="tapToBalance"
                                                                class="border rounded-full bg-white text-black text-[13px] px-2 cursor-pointer"
                                                        >
                                                                Balance
                                                        </span>

                                                        {/* <!-- Hidden Amount Span --> */}
                                                        <span
                                                                id="balanceAmount"
                                                                class="border rounded-full bg-white text-black text-[13px] px-2 hidden"
                                                        >
                                                                100 BDT
                                                        </span>
                                                </div>
                                        </div>
                                        <div class="flex justify-center items-center">
                                                <ul class="flex ">
                                                        <Link to='/deposit'>
                                                        
                                                        <a href="">
                                                                <li class="cursor-pointer">
                                                                        <img
                                                                                src={depositIcon}
                                                                                alt="Image 1"
                                                                                class="w-10 h-10 rounded-full"
                                                                        />
                                                                </li>
                                                        </a>
                                                        
                                                        </Link>
                                                        

                                                        <Link to='/cashout'>
                                                        
                                                        <a href="withdraw.html">
                                                                <li class="cursor-pointer">
                                                                        <img
                                                                                src={withdrawIcon}
                                                                                alt="Image 2"
                                                                                class="w-10 h-10 rounded-full"
                                                                        />
                                                                </li>
                                                        </a>
                                                        
                                                        </Link>
                                                </ul>
                                        </div>
                                        <div class="flex items-center lg:order-2">
                                                <button onClick={handleLogout}>
                                                        <i class="text-white text-3xl fa-solid fa-right-from-bracket"></i
                                                        >
                                                </button>

                                        </div>
                                </div>
                        </nav>
                </>
        );
}

export default Header;