import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Header from '../base/Header';
import { Link } from 'react-router-dom';
function AdminDash() {

  

      const [histories, setHistories] = useState([]);

      const [withdrawHistories, setWithdrawHistories] = useState([])


      const fetchHistories = async () => {
            try {


                  const res = await axiosInstance.get(`package/deposit_history/all/`);

                  setHistories(res.data);


            } catch (error) {
                  console.log(error);
            }
      };

      const fetchWithdrawHistories = async () => {
            try {


                  const res = await axiosInstance.get(`package/withdraw_history/all/`);

                  setWithdrawHistories(res.data);

            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            fetchHistories();


      }, []);

      useEffect(() => {

            fetchWithdrawHistories();

      }, []);

      return (
            <>
                  <Header></Header>


                  <section class=" mx-2">
                        <div class="max-w-7xl bg-gray-400 mx-auto rounded-md shadow-lg mt-5  flex flex-col gap-2">


                              {histories?.length > 0 ? (
                                    <>
                                          <h1 className="text-center border-b p-2 border-red-800 font-bold text-[20px]">Deposits for approval</h1>
                                          {histories.map((h, index) => (
                                                <div key={index} className=" flex font-bold items-center justify-between  border-b border-black gap-2 mt-2 p-4">
                                                      <div className="flex items-center justify-start gap-2 rounded-full">
                                                            <div className=" bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2">
                                                                  <Link to={`/update_status/${h?.id}`}>
                                                                        <i className="text-white fa-regular fa-pen-to-square"></i>
                                                                  </Link>
                                                            </div>

                                                      
                                                            <div className='flex flex-col gap-2'>

                                                                  <span class="text-[rgb(185,28,28)] text-[14px]">{h?.user?.email}</span>
                                                                  <span class="text-white  flex items-center justify-center  bg-[rgb(33,54,68)] text-[14px] rounded-md">{h?.transaction_id}</span>

                                                            </div>
                                                      </div>
                                                      <div className="flex flex-col items-center gap-2">
                                                            <h1>+{h?.amount}$</h1>
                                                            <span className=" bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                                  {h?.status}
                                                            </span>
                                                      </div>
                                                </div>
                                          ))}
                                    </>
                              ) : (
                                    <div className='text-center p-3 border font-bold'>

                                          <h1>No deposit for approval</h1>
                                    </div>
                              )}

                        </div>


                        {/* Withdraw for approval */}
                        <div class="max-w-7xl bg-gray-400 mx-auto rounded-lg shadow-md mt-10  flex flex-col gap-2">

                              {withdrawHistories?.length > 0 ? (
                                    <>
                                          <h1 className="text-center border-b p-2 border-red-800 font-bold text-[20px]">Withdrawals for approval</h1>
                                          {withdrawHistories.map((wh, index) => (
                                                <div key={index} className=" flex font-bold items-center justify-between border-b border-black gap-2 mt-2 p-4">
                                                      <div className="flex items-center justify-start gap-2 rounded-full">
                                                            <div className="bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2">
                                                                  <Link to={`/update_withdraw_status/${wh?.id}`}>
                                                                        <i className="text-white fa-regular fa-pen-to-square"></i>
                                                                  </Link>

                                                            </div>
                                                            <div class="flex flex-col gap-2">
                                                                  <h1 className='text-[12px]'> {wh?.user?.email} </h1>
                                                                  <span class="flex items-center justify-center bg-[rgb(33,54,68)] px-1 text-[14px]  text-white rounded-md">

                                                                        {wh?.bkash_number}

                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="flex flex-col items-center">
                                                            <h1>-{wh?.amount} Tk</h1>
                                                            <span className=" bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                                  {wh?.status}
                                                            </span>
                                                      </div>
                                                </div>
                                          ))}
                                    </>
                              ) : (

                                    <div className='text-center p-3 border font-bold'>

                                          <h1>No withdraw for approval</h1>
                                    </div>

                              )}



                        </div>




                  </section>
            </>
      );
}

export default AdminDash;