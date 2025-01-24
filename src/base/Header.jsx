import React, { useState } from 'react';


import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Toast from '../plugin/Toast'

import sklogo from '../assets/auth_image/SK LOGO.png'
import depositIcon from '../assets/icons/deposit.png'
import withdrawIcon from '../assets/icons/withdraw.png'

function Header() {


        const navigate = useNavigate()
        const handleLogout = async () => {
                try {

                        const access_token = localStorage.getItem('access_token')
                        const refresh_token = localStorage.getItem('refresh_token')
                        if (access_token) {
                                localStorage.removeItem('access_token');
                                localStorage.removeItem('refresh_token');
                                Toast().fire({
                                        icon: "success",
                                        title: "Logout Successful.",
                                });
                                navigate('/');
                        } else {
                                console.error("Logout failed:", res.data);
                                Toast().fire({
                                        icon: "error",
                                        title: "Logout failed.",
                                });
                        }
                } catch (error) {
                        console.error("Logout error:", error);
                        Toast().fire({
                                icon: "error",
                                title: "Logout failed.",
                        });
                }
        };




        const [showBalance, setShowBalance] = useState(false);

        const handleClick = () => {
                setShowBalance(true); // Show the balance
                setTimeout(() => {
                        setShowBalance(false); // Hide the balance after 3 seconds
                }, 3000);
        };


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
                                                <div className=" flex flex-col items-center">
                                                        <h1 className='text-white font-semibold'>harun</h1>
                                                        <span
                                                                onClick={handleClick}
                                                                className="border rounded-full bg-white text-black text-[13px] px-2 cursor-pointer min-w-[70px] text-center"
                                                        >
                                                                {showBalance ? "100 BDT" : "Balance"}
                                                        </span>
                                                </div>                             </div>
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
                                                {/* onClick={handleLogout} */}
                                                <button onClick={handleLogout} >
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