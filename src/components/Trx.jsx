import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../utils/axiosInstance';


function Trx() {

        const access_token = localStorage.getItem('access_token')
        // console.log(access_token)
        const decoded = jwtDecode(access_token)
        const userId = decoded.user_id
        console.log(userId)
        // console.log(decoded)

        const [history, setHistory] = useState([]);

        const [withdrawHistory, setWithdrawHistory] = useState([]);

        const fetchDepositHistory = async () => {
                try {
                        // https://sk-money-save-u6f9.onrender.com/
                        // const res = await axiosInstance.get(`http://127.0.0.1:8000/package/deposit_history/`);
                        const res = await axiosInstance.get(`https://sk-money-save-u6f9.onrender.com/package/deposit_history/`);
                        setHistory(res.data);
                        console.log(res.data);

                } catch (error) {
                        console.log(error);
                }
        };


        const fetchWithdrawHistory = async () => {
                try {
                        // https://sk-money-save-u6f9.onrender.com/
                        // const res = await axiosInstance.get(`http://127.0.0.1:8000/package/withdraw_history/`);
                        const res = await axiosInstance.get(`https://sk-money-save-u6f9.onrender.com/package/withdraw_history/`);
                        setHistory(res.data);
                        console.log(res.data);

                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                fetchDepositHistory();
                fetchWithdrawHistory()
        }, []);

        return (
                <>

                        <nav class="bg-[rgb(33,54,68)] py-3">
                                <div
                                        class="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto"
                                >


                                        <Link to="/dashboard">

                                                <a href="index.html">
                                                        <i class="fa-solid fa-chevron-left text-3xl text-white"></i>
                                                </a>
                                        </Link>

                                        <h1 class="text-2xl font-bold text-white">History</h1>


                                </div>
                        </nav>


                        <main >

                                <section class=" mx-2">
                                        <div class="max-w-7xl mx-auto rounded-lg shadow-lg mt-5  flex flex-col gap-2">

                                                <h1 className='text-center font-bold'>Your all deposit request</h1>


                                                {history?.map((h, index) => (

                                                        <div class="bg-white flex font-bold items-center justify-between gap-2 mt-2 p-4">
                                                                <div class="  flex items-center justify-start gap-2   rounded-full ">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                                                <i class="text-white fa-solid fa-arrow-right"></i>
                                                                        </div>


                                                                        <span class="text-[rgb(185,28,28)] text-[14px]">{h?.tran_id}</span>
                                                                </div>
                                                                <div class="flex flex-col items-center">
                                                                        <h1>{h?.amount}$</h1>
                                                                        <span class="border bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                                                {h?.status}
                                                                        </span>
                                                                </div>


                                                        </div>

                                                ))}









                                        </div>

                                      
                                        
                                        
                                          <div class="max-w-7xl mx-auto rounded-lg shadow-lg mt-5  flex flex-col gap-2">

                                                <h1>Your all withdraw request</h1>


                                                {withdrawHistory?.map((wh, index) => (

                                                        <div class="bg-white flex font-bold items-center justify-between gap-2 mt-2 p-4">
                                                                <div class="  flex items-center justify-start gap-2   rounded-full ">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                                                <i class="text-white fa-solid fa-arrow-right"></i>
                                                                        </div>


                                                                        <span class="text-[rgb(185,28,28)] text-[10px]">{wh?.b_number}</span>
                                                                </div>
                                                                <div class="flex flex-col items-center">
                                                                        <h1>{wh?.amount}$</h1>
                                                                        <span class="border bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                                                {wh?.status}
                                                                        </span>
                                                                </div>


                                                        </div>

                                                ))}









                                        </div>


                                        
                                       




                                </section>

                        </main>
                </>
        );
}

export default Trx;