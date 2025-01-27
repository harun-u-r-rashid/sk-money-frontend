import React from 'react';
import { Link } from 'react-router-dom';
function Task() {
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
                                        <h1 class="text-2xl font-bold text-white">Task</h1>


                                </div>
                        </nav>

                        <main>
                                <section class="mx-2">
                                        <div class="max-w-7xl mx-auto py-6 border text-center mt-5 rounded-2xl bg-white ">

                                                <h1 class="text-2xl font-bold">
                                                        Task section coming soon.
                                                </h1>
                                        </div>
                                </section>
                        </main>
                </>



        );
}

export default Task;