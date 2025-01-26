import React, { useState, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Toast from '../plugin/Toast'

import sklogo from '../assets/auth_image/SK LOGO.png'
import depositIcon from '../assets/icons/deposit.png'
import withdrawIcon from '../assets/icons/withdraw.png'

function Header() {

        const access_token = localStorage.getItem('access_token')
        // console.log(access_token)


        const decode = jwtDecode(access_token)
        const userId = decode.user_id
        console.log(userId)

        // console.log(decode)

        const [user, setUser] = useState([])



        const fetchUserDetails = async () => {
                try {
                        // https://sk-money-save-u6f9.onrender.com/
                        // const res = await axiosInstance.get(`http://127.0.0.1:8000/auth/user_details/${userId}/`);

                        const res = await axiosInstance.get(`https://sk-money-save-u6f9.onrender.com/auth/user_details/${userId}/`);


                        setUser(res.data);
                        console.log(res.data);

                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                fetchUserDetails();
        }, []);


        const navigate = useNavigate()
        const handleLogout = async () => {
                try {

                        const access_token = localStorage.getItem('access_token')
                        const refresh_token = localStorage.getItem('refresh_token')
                        if (access_token) {
                                localStorage.removeItem('access_token');
                                localStorage.removeItem('refresh_token');
                                // localStorage.removeItem('email'),
                                // localStorage.removeItem('full_name'),
                                // localStorage.removeItem('username')
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
                        {user.is_superadmin &&
                                <nav class="bg-[rgb(33,54,68)] py-3">
                                        <div
                                                class="flex flex-wrap items-center justify-between max-w-screen-xl px-1 mx-auto"
                                        >
                                                <div class="flex items-center gap-2">
                                                       

                                                                <div class="flex items-center w-[50px] h-[50px]">

                                                                        <img
                                                                                src={sklogo} class="rounded-full border  border-black "
                                                                                alt="Landwind Logo"
                                                                        />
                                                                </div>

                                                       
                                                </div>

                                                <div class="flex justify-center items-center  text-white p-2 bg-red-700 rounded-md">
                                                 <Link to="/admin_dashboard">

                                                 <span>Admin Dashboard</span>
                                                 
                                                 </Link>
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


                        }


                        {!user.is_superadmin &&


                                <nav class="bg-[rgb(33,54,68)] py-3">
                                        <div
                                                class="flex flex-wrap items-center justify-between max-w-screen-xl px-1 mx-auto"
                                        >
                                                <div class="flex items-center gap-2">
                                                        <Link>

                                                                <div class="flex items-center w-[50px] h-[50px]">

                                                                        <img
                                                                                src={sklogo} class="rounded-full border  border-black "
                                                                                alt="Landwind Logo"
                                                                        />
                                                                </div>

                                                        </Link>
                                                        <div className=" flex flex-col items-center">
                                                                <h1 className='text-white font-semibold'>{user?.username}</h1>
                                                                <span
                                                                        onClick={handleClick}
                                                                        className="border rounded-full bg-white text-black text-[13px] px-2 cursor-pointer min-w-[70px] text-center"
                                                                >
                                                                        {showBalance ? <span>{user.balance}$</span> : "Balance"}
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

                        }
                </>
        );
}

export default Header;