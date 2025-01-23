import React from 'react';
import bkashLogo from '../assets/regular/bkash.png'
import {Link} from 'react-router-dom'

function Deposit() {
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
                        নোটিশ : মিনিমাম ডিপোজিট ৫০০ টাকা।
                     </h1>
                </div>

                <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">
                        
                        <h1 class="text-2xl font-bold">
                           Balance: <span class="text-[rgb(12,12,232)]"> 100 BDT</span>
                        </h1>
                   </div>

                   <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white">
                        <h1 class="text-2xl mb-2">Amount</h1>
                    
                    
                        <div class="px-6">
                            <input id="amountInput" type="text" class="border border-black w-full p-4 text-black rounded-2xl" placeholder="Enter Amount"/>
                        </div>
                    
                        <span class="text-[rgb(239,68,68)] text-lg font-semibold inline-block my-1">
                            Minimum deposit 500 BDT
                        </span>
                    
                 
                        <div class="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-9 gap-1 px-2 sm:px-4">
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">500</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">1000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">2000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">3000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">5000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">9000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">15000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">18000</h1>
                            <h1 class="amount-btn border p-1 text-center text-[rgb(29,78,216)] font-semibold border-[rgb(29,78,216)] rounded-md cursor-pointer">25000</h1>
                        </div>  
                    </div>
                    
        
                    

                  


                   <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white">
                   <h1 class="text-center text-xl font-semibold mt-1">Select Payment method</h1>
                   <div
                     class="mt-2 w-[100px] mx-auto h-auto border-[5px] border-gray p-2 rounded-lg"
                   >
                     <img src={bkashLogo} alt="" />
                   </div>
                 
                </div>

                <div class="max-w-7xl mx-auto   text-center mt-5 rounded-2xl ">
                       <Link to='/send_money'>
                       <a
                          href=""
                          class="flex w-full justify-center rounded-2xl border border-transparent bg-[rgb(33,54,68)] py-4 px-4 text-lg  font-bold text-white shadow-sm hover:bg-opacity-90"
                        >
                          Next
                        </a>
                       </Link>
                      </div>
        </section>
   


   


    </main>
              </>
        );
}

export default Deposit;