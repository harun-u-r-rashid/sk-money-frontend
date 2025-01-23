import React from 'react';
import {Link} from 'react-router-dom'
import bkashLogo from '../assets/regular/bkash.png'


function Cashout() {
        return (
               <>
               
               <nav class="bg-[rgb(33,54,68)] py-3">
      <div
        class="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto"
      >

     
      <Link to='/dashboard'>
      <a href="">
        <i class="fa-solid fa-chevron-left text-3xl text-white"></i>
      </a>
      </Link>
      
        <h1 class="text-2xl font-bold text-white">Withdraw</h1>
  
    
      </div>
    </nav>


    <main class="">

        <section class="mx-2">
                <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">
                        
                     <h1 class="text-2xl">
                        Notice: মিনিমাম উইথড্র 500 টাকা। উইথড্র দেওয়ার সাথে সাথে অটোম্যাটিকভাবে পেমেন্ট পেয়ে যাবেন।
                     </h1>
                </div>

                <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">
                        
                        <h1 class="text-2xl font-bold">
                           Balance: <span class="text-[rgb(12,12,232)]"> 100 BDT</span>
                        </h1>
                   </div>

                   <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white">
                        <h1 class="text-center text-xl font-semibold mt-1">Select Payment method</h1>
                        <div
                          class="mt-2 w-[100px] mx-auto h-auto border-[5px] border-gray p-2 rounded-lg"
                        >
                          <img src={bkashLogo} alt="" />
                        </div>
                      
                     </div>

                   <div class="max-w-7xl mx-auto py-6 border mt-5 rounded-2xl bg-white">
                        
                    
                        {/* <!-- Input Field --> */}
                        <div class="px-6 font-semibold">
                                <h1 class="text-2xl mb-2">Number</h1>
                            <input id="amountInput" type="text" class="border border-black w-full p-4 text-black rounded-2xl" placeholder="Enter Amount"/>
                        </div>
                        <div class="px-6 mt-3">
                                <h1 class="text-2xl mb-2 font-semibold">Amount</h1>
                    
                                <input id="amountInput" type="text" class="border border-black w-full p-4 text-black rounded-2xl" placeholder="Enter Amount"/>
                            </div>
                            </div>
                        
                        <p class="text-[rgb(239,68,68)] text-lg  font-semibold  text-center my-1">
                            Minimum deposit 500 BDT
                        </p>

                      
                    

                    

                  




                <div class="max-w-7xl mx-auto  px-6  text-center mt-5 rounded-2xl ">
                        <a
                          href="send_money.html"
                          class="flex w-full justify-center rounded-2xl border border-transparent bg-[rgb(33,54,68)] py-4 px-4 text-lg  font-bold text-white shadow-sm hover:bg-opacity-90"
                        >
                          Withdraw
                        </a>
                      </div>
        </section>
   


   


    </main>
               </>
        );
}

export default Cashout;