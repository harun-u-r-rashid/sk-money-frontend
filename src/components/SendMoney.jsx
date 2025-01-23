import React from 'react';
import {Link} from 'react-router-dom'
function SendMoney() {
        return (
              <>
                <nav class="bg-[rgb(33,54,68)] py-3">
      <div
        class="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto"
      >
       <Link to='/dashboard'>
       
       <a href="index.html">
          <i class="fa-solid fa-chevron-left text-3xl text-white"></i>
        </a>

       </Link>
      
          <h1 class="text-2xl font-bold text-white">Bkash Send Money</h1>

      </div>
    </nav>

    <main class="">
      <section class="mx-2">
        <div
          class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-md bg-white"
        >
          <h1 class="px-2 lg:px-4">
            <span class="text-2xl text-[rgb(12,12,232)] font-bold"
              >Notice:</span
            >
            <span class="text-black text-xl">
              সফলভাবে ডিপোজিট সম্পন্ন করতে আপনার একাউন্ট থেকে সঠিকভাবে এবং সঠিক
              অ্যামাউন্ট টির নাম্বারিটি অবশ্যই সেট মানি করে ট্রানজেকশন আইডিটি
              নিচের বক্সে দিয়ে ADD DEPOSIT এ ক্লিক করুন।
            </span>
          </h1>

          <div class="mt-5">
            <img src="images/send_money.png" alt="" />
          </div>
        </div>

        <div
          class="max-w-7xl mx-auto p-4 border text-center mt-5 rounded-md bg-white"
        >
          <div class="flex flex-col gap-8 text-2xl font-semibold">
            <div class="flex items-center justify-start gap-1">
              <img
                src="images/icons/bkash.png"
                alt=""
                class="w[30px] h-[30px]"
              />
              <h1>Bkash:</h1>
              <p class="ml-2">01979999999</p>
           
            </div>
            <div class="flex items-center justify-start gap-1">
              <img
                src="images/icons/taka.png"
                alt=""
                class="w[30px] h-[30px]"
              />
              <h1>Amount:</h1>
              <p class="ml-2">1000 BDT</p>
            </div>
          </div>
        </div>

        <div
          class="max-w-7xl mx-auto py-6 border mt-5 rounded-md bg-white"
        >
          <h1 class=" px-6 text-2xl mb-6 font-semibold">Trnx Number</h1>

       
          <div class="px-6">
            <input
              id="trnxInput"
              type="text"
              class="border border-black w-full p-4 text-black rounded-md"
              placeholder="Trnx number"
            />
          </div>

          <span
            class="text-lg px-6 font-semibold inline-block my-1"
          >
          You must correctly enter the Transaction ID, Amount and Method. Of course within 1 minute automatically the Deposit will be successful and the balance will be added.
          </span>

   
         
        </div>


        <div class="max-w-7xl mx-auto text-center mt-5 rounded-md">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-[rgb(33,54,68)] py-4 px-4 text-lg font-bold text-white shadow-sm hover:bg-opacity-90"
          >
            ADD DEPOSIT
          </button>
        </div>
      </section>
    </main>

              </>
        );
}

export default SendMoney;