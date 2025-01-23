import React from 'react';
import {Link} from 'react-router-dom'
import referLogo from '../assets/regular/refer.png'
function Refer() {
        return (
             <>
             
             <nav class="bg-[rgb(33,54,68)] py-3">
      <div
        class="p-2 flex flex-wrap items-center justify-start gap-6 max-w-screen-xl px-4 mx-auto"
      >

     
     <Link to="/dashboard">
     
     <a href="">
        <i class="fa-solid fa-chevron-left text-3xl text-white"></i>
      </a>
     </Link>
  
        <h1 class="text-2xl font-bold text-white">Refer</h1>
  
    
      </div>
    </nav>


    <main >

        <section class=" mx-2">
                <div class="max-w-3xl mx-auto rounded-lg shadow-lg mt-5  flex flex-col gap-2">

                        <div class="flex items-center justify-center ">
                                <img class="w-[200px] h-[120px] rounded-md" src={referLogo} alt=""/>
                        </div>
                     
                      
                                <div class="bg-white  flex flex-col  items-center justify-between gap-2 mt-2 p-4 rounded-lg">
                                       <h1 class="text-2xl font-bold">Your Reference Link</h1>
                                       <div class="border border-black my-3 px-3 py-1 rounded-lg">
                                        <h1>https://npearn.com/register/harunn</h1>
                                      </div>
                                      
                                       <p class="text-[15px] text-gray-800">You will get 10% commission on the amount deposited by the person you refer. If your refer joiner deposits 50,000 BDT then you will get instant 5,000 BDT and you can withdraw that money instantly.</p>
                                    
                                      
                                </div>


                              
                               

                            
                
                        </div>
                      
                   
                     
                    
        </section>

    </main>

             
             </>
        );
}

export default Refer;