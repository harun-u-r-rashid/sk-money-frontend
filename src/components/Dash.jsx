import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
// Image Import
import banner1 from '../assets/banner/banner1.png'
import banner2 from '../assets/banner/banner2.png'
import banner3 from '../assets/banner/banner3.png'
import deposit from '../assets/hero/deposit.png'
import cashout from '../assets/hero/cashout.png'
import plan from '../assets/hero/plan.png'
import profile from '../assets/hero/profile.png'
import transaction from '../assets/hero/transaction.png'
import help from '../assets/hero/help.png'
import task from '../assets/hero/task.png'
import refer from '../assets/hero/refer.png'
import Header from '../base/Header';
import UserData from '../utils/UserData';
function Dash() {

        // const user_data = UserData()
        // console.log(user_data)
        // console.log(user_data.user_id)
      

        // const [user, setUser] = useState([])

        // const fetchUserDetails = () => {
        //         UserData()
        //                 .get(`auth/user_details/${userId}`)
        //                 .then((res) => {
        //                         console.log(res.data)
        //                         setUser(res.data);

        //                 });
        // };;

        // useEffect(() => {
        //         fetchUserDetails();
        // }, []);

        const [partners, setPartners] = useState([]);

        const fetchPartners = async () => {
                try {

                        // https://sk-money-save-u6f9.onrender.com/
                        // const res = await axios.get(`http://127.0.0.1:8000/package/partner_list/`);
                        const res = await axios.get(`https://sk-money-save-u6f9.onrender.com/package/partner_list/`);
                        setPartners(res.data);
                        console.log(res.data);

                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                fetchPartners();
        }, []);



    




        return (
                <>
                        <Header />
                        <main>
                                <section class="mx-2">
                                        <div class="max-w-7xl mx-auto py-6 ">

                                                {/* <!-- Carousel Wrapper --> */}
                                                <div class="overflow-hidden  ">
                                                        {/* <!-- Carousel --> */}
                                                        <div class="carousel">
                                                                {/* <!-- Slide 1 --> */}
                                                                <div class="carousel-item ">
                                                                        <img src={banner1} alt="Slide 1" class="w-full h-40" />

                                                                </div>

                                                                {/* <!-- Slide 2 --> */}
                                                                <div class="carousel-item ">
                                                                        <img src={banner2} alt="Slide 2" class="w-full h-40" />

                                                                </div>

                                                                {/* <!-- Slide 3 --> */}
                                                                <div class="carousel-item ">
                                                                        <img src={banner3} alt="Slide 3" class="w-full h-40" />

                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                                <section class="mx-2">
                                        <div class="max-w-7xl mx-auto">
                                                <div class="bg-[rgb(33,54,68)] py-2 text-white   flex items-center justify-start gap-10  rounded-md">
                                                        <div class="bg-[rgb(33,54,68)] z-10">
                                                                <i class="px-3  text-2xl  fa-solid fa-bell bell-animation"></i>
                                                        </div>

                                                        <div class="w-full overflow-hidden">
                                                                <h1 class="marquee text-2xl font-semibold text-white">Welcome to skmoneysaves.com</h1>
                                                        </div>
                                                </div>
                                                <div class=" border border-black mt-5 rounded-md">
                                                        <h1 class="p-3 text-[rgb(33,54,68)] text-xl font-bold">sk money saves</h1>
                                                        <hr class="border-b-1 border-black" />
                                                        <div class="container mx-auto mt-2 max-w-7xl">
                                                                <div class="py-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">

                                                                        {/* <!-- Card 1 --> */}
                                                                        <Link to="/task">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center rounded-full mx-auto border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={task} alt="" />
                                                                                                </div>
                                                                                                <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                        Task
                                                                                                </p>
                                                                                        </div>
                                                                                </a>

                                                                        </Link>

                                                                        {/* <!-- Card 2 --> */}
                                                                        <Link to="/deposit">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={deposit} alt="" />
                                                                                                </div>
                                                                                                <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                        Deposit
                                                                                                </p>
                                                                                        </div>
                                                                                </a>
                                                                        </Link>


                                                                        {/* <!-- Card 3 --> */}
                                                                        <Link to="/cashout">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={cashout} alt="" />
                                                                                                </div>
                                                                                                <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                        Cashout
                                                                                                </p>
                                                                                        </div>
                                                                                </a>
                                                                        </Link>

                                                                        {/* <!-- Card 4 --> */}
                                                                        <Link to="/package">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={plan} alt="" />
                                                                                                </div>
                                                                                                <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                        Plan
                                                                                                </p>
                                                                                        </div>
                                                                                </a>
                                                                        </Link>


                                                                        {/* <!-- Card 5 --> */}
                                                                        <Link to="/profile">
                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={profile} alt="" />
                                                                                                </div>
                                                                                                <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                        Profile
                                                                                                </p>
                                                                                        </div>
                                                                                </a>

                                                                        </Link>

                                                                        {/* <!-- Card 6 --> */}
                                                                        <Link to="/history">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-cente mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={transaction} alt="" />
                                                                                                </div>
                                                                                                <p class="text-md capitalize text-black lg:text-lg md:text-base">
                                                                                                        Trx
                                                                                                </p>
                                                                                        </div>
                                                                                </a>

                                                                        </Link>

                                                                        {/* <!-- Card 7 --> */}
                                                                        <Link to="/refer">

                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={refer} alt="" />
                                                                                                </div>
                                                                                                <p class="text-md capitalize text-black lg:text-lg md:text-base">
                                                                                                        Refer
                                                                                                </p>
                                                                                        </div>
                                                                                </a>

                                                                        </Link>

                                                                        {/* <!-- Card 8 --> */}
                                                                        <Link to="/help">
                                                                                <a href="" class="flex flex-col items-center text-center">
                                                                                        <div>
                                                                                                <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)] p-2">
                                                                                                        <img className='bell-animation' src={help} alt="" />
                                                                                                </div>
                                                                                                <p class="text-md capitalize text-black lg:text-lg md:text-base">
                                                                                                        Help
                                                                                                </p>
                                                                                        </div>
                                                                                </a>
                                                                        </Link>
                                                                </div>
                                                        </div>


                                                </div>
                                        </div>
                                </section>


                                <section class="mx-2">
                                        <div class="max-w-7xl mx-auto">

                                                <div class=" border border-black mt-5 rounded-md">
                                                        <h1 class="p-3 text--[rgb(33,54,68)] text-xl font-bold">Statement</h1>
                                                        <hr class="border-b-1 border-black" />
                                                        <div class="p-3 text-black font-semibold container text-lg mx-auto mt-2 max-w-7xl">
                                                                <h1>My Plan : No Plan</h1>
                                                                <h1 class="my-3"> Remain Ads For Today : 0</h1>
                                                                <h1>Complete Ads For Today : 0</h1>

                                                        </div>


                                                </div>
                                        </div>
                                </section>

                                <section class="mx-2 mb-10">
                                        <div class="max-w-7xl mx-auto">

                                                <div class=" border border-black mt-5 rounded-md">
                                                        <h1 class="p-3 text-[rgb(33,54,68)] text-xl font-bold">Contact</h1>
                                                        <hr class="border-b-1 border-black" />
                                                        <div class="container mx-auto mt-2 max-w-7xl">
                                                                <div class="py-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">

                                                                        {/* <!-- Card 1 --> */}


                                                                        <a href="#" class="flex flex-col items-center text-center">
                                                                                <div>
                                                                                        <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                                                                                                <i class="bell-animation text-white text-2xl fa-solid fa-gear"></i>
                                                                                        </div>
                                                                                        <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                Setting
                                                                                        </p>
                                                                                </div>
                                                                        </a>


                                                                        {/* <!-- Card 2 --> */}
                                                                        <a href="#" class="flex flex-col items-center text-center">
                                                                                <div>
                                                                                        <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                                                                                                <i class="bell-animation text-white text-2xl fa-brands fa-whatsapp"></i>
                                                                                        </div>
                                                                                        <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                Whatsapp
                                                                                        </p>
                                                                                </div>
                                                                        </a>



                                                                        {/* <!-- Card 3 --> */}
                                                                        <a href="#" class="flex flex-col items-center text-center">
                                                                                <div>
                                                                                        <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                                                                                                <i class="bell-animation text-white text-2xl fa-brands fa-youtube"></i>
                                                                                        </div>
                                                                                        <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                Youtube
                                                                                        </p>
                                                                                </div>
                                                                        </a>


                                                                        {/* <!-- Card 4 --> */}
                                                                        <a href="https://t.me/Exnessforex2" class="flex flex-col items-center text-center">
                                                                                <div>
                                                                                        <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                                                                                                <i class="bell-animation text-white text-2xl fa-brands fa-telegram"></i>
                                                                                        </div>
                                                                                        <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                Telegram
                                                                                        </p>
                                                                                </div>
                                                                        </a>

                                                                        {/* <!-- Card 5 --> */}
                                                                        <a href="https://www.tiktok.com/@tradersadnan?_t=ZS-8sJJ2neboKw&_r=1" target="_blank" class="flex flex-col items-center text-center">
                                                                                <div>
                                                                                        <div class="w-[50px] h-[50px] flex items-center justify-center mx-auto rounded-full border-2 border-black bg-[rgb(33,54,68)]">
                                                                                                <i class="bell-animation text-white text-2xl fa-brands fa-tiktok"></i>
                                                                                        </div>
                                                                                        <p class="text-sm font-medium capitalize text-black lg:text-lg md:text-base">
                                                                                                Tiktok
                                                                                        </p>
                                                                                </div>
                                                                        </a>
                                                                </div>
                                                        </div>


                                                </div>
                                        </div>
                                </section>

                                <section class="mx-2 mb-5">

                                        <div class="max-w-7xl mx-auto border border-black mt-5 rounded-md">
                                                <h1 class="p-3 text-[rgb(33,54,68)] text-xl font-bold">Our Partner</h1>
                                                <hr class="border-b-1 border-black" />
                                                <div class="grid grid-cols-4 py-3 gap-2">

                                                        {partners?.map((pa, index) => (
                                                                <a href="https://en.activtrades.online/" class=" mt-2 text-center">
                                                                        <div>
                                                                                <div className='flex items-center justify-center w-[50px] h-[50px] mx-auto'>
                                                                                        <img src={pa?.image} class="mx-auto border " />
                                                                                </div>
                                                                                <p class="text-sm font-semibold my-1">
                                                                                        {pa?.name}
                                                                                </p>
                                                                        </div>
                                                                </a>
                                                        ))}


                                                </div>
                                        </div>

                                </section>


                        </main>
                </>
        );
}

export default Dash;