import React from 'react';
import { Link } from 'react-router-dom'
function Profile() {
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

                                      
                                                        <h1 class="text-2xl font-bold text-white">Profile</h1>

                         

                                </div>
                        </nav>


                        <main >

                                <section class=" mx-2">
                                        <div class="max-w-lg mx-auto rounded-lg shadow-lg mt-5 bg-white dark:shadow-blue-100">
                                                <div class="px-6 py-4">
                                                        <div class="flex flex-col w-[130px]">
                                                                <h2 class="font-bold text-xl text-black">Profile details</h2>
                                                                <div class="border-2 border-gray-500 mb-3 text"></div>
                                                        </div>
                                                        <div class="text-black ">
                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-signature"></i>
                                                                        </div>
                                                                        <h1>Name: </h1>
                                                                        <p>Harunur Rashid</p>
                                                                </div>
                                                                <hr />

                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-phone"></i>
                                                                        </div>
                                                                        <h1>Phone: </h1>
                                                                        <p>01609480869</p>
                                                                </div>
                                                                <hr />

                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-bangladeshi-taka-sign"></i>
                                                                        </div>
                                                                        <h1>Main Balance: </h1>
                                                                        <p>300 BDT</p>
                                                                </div>
                                                                <hr />
                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-bangladeshi-taka-sign"></i>
                                                                        </div>
                                                                        <h1>Deposit Balance: </h1>
                                                                        <p>300 BDT</p>
                                                                </div>
                                                                <hr />
                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-box"></i>
                                                                        </div>
                                                                        <h1>Package: </h1>
                                                                        <p>No Package</p>
                                                                </div>
                                                                <hr />
                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-users-between-lines"></i>
                                                                        </div>
                                                                        <h1>Refer Code: </h1>
                                                                        <p>harun</p>
                                                                </div>
                                                                <hr />
                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-users-between-lines"></i>
                                                                        </div>
                                                                        <h1>Total Refer: </h1>
                                                                        <p>0</p>
                                                                </div>
                                                                <hr />

                                                                <div class="flex font-bold items-center justify-start gap-2 my-2">
                                                                        <div class="border bg-[rgb(33,54,68)] w-10 h-10 flex items-center justify-center  p-2 rounded-full ">
                                                                                <i class="text-white fa-solid fa-solid fa-list-check"></i>
                                                                        </div>
                                                                        <h1>Task: </h1>
                                                                        <p>0</p>
                                                                </div>


                                                        </div>
                                                </div>


                                        </div>

                                </section>

                        </main>

                </>
        );
}

export default Profile;