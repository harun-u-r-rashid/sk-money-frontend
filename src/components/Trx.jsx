import React from 'react';
import {Link} from 'react-router-dom'
function Trx() {
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
     
        <h1 class="text-2xl font-bold text-white">Transaction History</h1>
  
     
      </div>
    </nav>


    <main >

        <section class=" mx-2">
                <div class="max-w-7xl mx-auto rounded-lg shadow-lg mt-5  flex flex-col gap-2">
                     
                      
                                <div class="bg-white flex font-bold items-center justify-between gap-2 mt-2 p-4">
                                        <div class="  flex items-center justify-start gap-2   rounded-full ">
                                                <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                        <i class="text-white fa-solid fa-arrow-right"></i>
                                                    </div>
                                                    
                                                
                                                <span class="text-[rgb(185,28,28)] text-[14px]">57SHJQUXFWCM</span>
                                        </div>
                                        <div class="flex flex-col items-center">
                                                <h1>1000 BDT</h1>
                                                <span class="text-[12px] text-gray-500">
                                                        21 Jan, 2025
                                                </span>
                                        </div>
                                    
                                      
                                </div>


                                <div class="bg-white flex font-bold items-center justify-between gap-2 mt-2 p-4">
                                        <div class="  flex items-center justify-start gap-2   rounded-full ">
                                                <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                        <i class="text-white fa-solid fa-arrow-right"></i>
                                                    </div>
                                                    
                                                
                                                <span class="text-[rgb(185,28,28)] text-[14px]">57SHJQUXFWCM</span>
                                        </div>
                                        <div class="flex flex-col items-center">
                                                <h1>1000 BDT</h1>
                                                <span class="text-[12px] text-gray-500">
                                                        21 Jan, 2025
                                                </span>
                                        </div>
                                    
                                      
                                </div>
                               

                            
                
                        </div>
                      
                   
                     
                    
        </section>

    </main>
            </>
        );
}

export default Trx;