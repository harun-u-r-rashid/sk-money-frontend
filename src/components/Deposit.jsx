import React, { useState } from 'react';
import bkashLogo from '../assets/regular/bkash.png'
import send_money from '../assets/regular/send_money.png'
import { Link, UNSAFE_ErrorResponseImpl } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'
import Toast from '../plugin/Toast';
function Deposit() {

  const access_token = localStorage.getItem("access_token")
  const decoded = jwtDecode(access_token)
  console.log(decoded)
  // console.log(decoded)
  const userId = decoded.user_id
  console.log(userId)

  const [amount, setAmount] = useState("")
  const [tranId, setTranId] = useState("")


  const handleDeposit = async (e) => {
    e.preventDefault();
    // https://sk-money-save-u6f9.onrender.com/
    try {
      // const res = await axios.post("http://127.0.0.1:8000/package/deposit_create/", {
        const res = await axios.post("https://sk-money-save-u6f9.onrender.com/package/deposit_create/", {
        user: userId,
        amount: parseInt(amount),
        tran_id: tranId
      });

      if (res.status === 201) {
        setAmount("");
        setTranId("");
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

            <h1 class="text-2xl">
              <span className='text-blue-600 font-bold'>
                Notice :
              </span> Minimum Deposit <span cla>100$</span>
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

          {/* <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">

            <h1 class="text-2xl font-bold">
              Balance: <span class="text-[rgb(12,12,232)]"> {decoded.balance}$</span>
            </h1>
          </div> */}


          <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">

            <h1 class="text-2xl font-bold">
              <span class="text-[rgb(12,12,232)]">Bkash:  </span>01648176381
            </h1>
          </div>

          <div class="max-w-7xl mx-auto py-6 border  mt-5 rounded-2xl bg-white">



            <form action="" onSubmit={handleDeposit}>

              <div class="px-6 mb-3">
                <label className='font-semibold' htmlFor="">Amount</label>
                <input id="amountInput" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Amount" />
              </div>

              <div class="px-6">
                <label className='font-semibold' htmlFor="">Transaction ID</label>
                <input id="amountInput" type="text" value={tranId} onChange={(e) => setTranId(e.target.value)} class="border border-black w-full p-2 text-black rounded-xl" placeholder="Transaction ID" />
              </div>


              <div class="max-w-7xl mx-auto   text-center   ">
                {/* <Link to='/history'>
           
            </Link> */}
                <div className='px-6 mt-3'>
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


            {/* <div class="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-9 gap-1 px-2 sm:px-4">
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">500</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">1000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">2000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">3000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">5000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">9000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">15000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">18000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">25000</h1>
                        </div>   */}
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