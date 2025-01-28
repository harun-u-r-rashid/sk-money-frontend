import React, { useState } from 'react';
import bkashLogo from '../assets/regular/bkash.png'
import send_money from '../assets/regular/send_money.png'
import { Link, } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';

import Toast from '../plugin/Toast';
import axiosInstance from '../utils/axiosInstance';
function Deposit() {

  const access_token = localStorage.getItem("access_token")
  const decoded = jwtDecode(access_token)
  console.log(decoded)

  const userId = decoded.user_id

  const [amount, setAmount] = useState("")
  const [tranId, setTranId] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")


  const handleDeposit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("package/deposit_create/", {
      
        user: userId,
        amount: parseInt(amount),
        transaction_id: tranId,
        package_name: name,
        send_number: number

      });

      if (res.status === 201) {
        setAmount("");
        setTranId("");
        setName("");
        setNumber("");
        Toast().fire({
          icon: "success",
          title: res.data.message,
        });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Deposit failed."
      Toast().fire({
        icon: "error",
        title: errorMsg,
      });
    }
  };



  return (
    <>

      <nav class="bg-[rgb(33,54,68)] py-3">
        <div
          class="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto"
        >


          <Link to="/dashboard">
            <a href="">
              <i class="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>

          </Link>
          <h1 class="text-2xl font-bold text-white">Deposit</h1>


        </div>
      </nav>



      <main >

        <section class=" mx-2 pb-3">
          <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">

            <h1 class="text-xl">
              <span className='text-blue-600 font-bold'>
              নোটিশ :
              </span> মিনিমাম ডিপোজিট ১৩০০০ টাকা। নির্ধারিত প্যাকেজের জন্য সেন্ড মানি করার পর, বিকাশ নম্বর এবং ট্রানজেকশন আইডি দিয়ে ডিপোজিট ফর্ম পূরণ করুন।
            </h1>
          </div>

          <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">


            <div class="flex items-center justify-center gap-1 mx-auto">
              <img
                src={send_money}
                alt=""

              />

            </div>
          </div>

 

          <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">

            <h1 class="text-2xl font-bold">
              <span class="text-[rgb(12,12,232)]">Bkash:  </span>01648176381
            </h1>
          </div>

          <div class="max-w-7xl mx-auto py-6 border  mt-5 rounded-2xl bg-white">



            <form action="" onSubmit={handleDeposit}>

            <div class="px-6 mb-3">
                <label className='font-semibold' htmlFor="">Package Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Enter package name" />
              </div>

              <div class="px-6 mb-3">
                <label className='font-semibold' htmlFor="">Amount</label>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Amount" />
              </div>

              <div class="px-6 mb-3">
                <label className='font-semibold' htmlFor="">Bkash Number</label>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Enter bkash number" />
              </div>

              <div class="px-6 mb-3">
                <label className='font-semibold' htmlFor="">Transaction ID</label>
                <input  type="text" value={tranId} onChange={(e) => setTranId(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Transaction ID" />
              </div>


              <div class="max-w-7xl mx-auto   text-center   ">
                {/* <Link to='/history'>
           
            </Link> */}
                <div className='px-6 mt-10'>
                  <button

                    class="flex w-full justify-center rounded-xl  border border-transparent bg-[rgb(33,54,68)] py-3 text-MD  font-bold text-white shadow-sm hover:bg-opacity-90"
                  >
                    ADD DEPOSIT
                  </button>
                </div>
              </div>

            </form>

            <p class=" text-[rgb(239,68,68)] text-lg text-center font-semibold  my-1">
              Minimum deposit 100$
            </p>


        
          </div>







          <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white">
            <h1 class="text-center text-xl font-semibold mt-1">Send Money by</h1>
            <div
              class="mt-2 w-[100px] mx-auto h-auto border-[5px] border-gray p-2 rounded-lg"
            >
              <img src={bkashLogo} alt="" />
            </div>

          </div>


        </section>






      </main>
    </>
  );
}

export default Deposit;