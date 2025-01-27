import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Header from '../base/Header';
import { Link } from 'react-router-dom';
function AdminDash() {

      // 



      const [histories, setHistories] = useState([]);

      const [withdrawHistories, setWithdrawHistories] = useState([])


      const fetchHistories = async () => {
            try {

                  // https://sk-money-save-u6f9.onrender.com/
                  // const res = await axiosInstance.get(`http://127.0.0.1:8000/package/deposit_history/all/`);
                  const res = await axiosInstance.get(`https://sk-money-save-u6f9.onrender.com/package/deposit_history/all/`);
                  setHistories(res.data);
                  // console.log(res.data);

            } catch (error) {
                  console.log(error);
            }
      };

      const fetchWithdrawHistories = async () => {
            try {

                  // https://sk-money-save-u6f9.onrender.com/
                  // const res = await axiosInstance.get(`http://127.0.0.1:8000/package/withdraw_history/all/`);
                  const res = await axiosInstance.get(`https://sk-money-save-u6f9.onrender.com/package/withdraw_history/all/`);
                  setWithdrawHistories(res.data);
                  // console.log(res.data);

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
                        <div class="max-w-7xl mx-auto rounded-lg shadow-lg mt-5  flex flex-col gap-2">
                              <h1 className='text-center font-bold text-[20px]'>Deposits for approval</h1>


                              {histories?.map((h, index) => (

                                    <div class="bg-white flex font-bold items-center justify-between border border-b-black gap-2 mt-2 p-4">
                                          <div class="  flex items-center justify-start gap-2    rounded-full ">
                                                <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                     
                                              
                                                     
                                                      <Link to={`/update_status/${h?.id}`}>
                                                            <i className="text-white fa-regular fa-pen-to-square"></i>
                                                      </Link>

                                                </div>


                                                <span class="text-[rgb(185,28,28)] text-[14px]">{h?.tran_id}</span>
                                          </div>
                                          <div class="flex flex-col items-center">
                                                <h1>+{h?.amount}$</h1>


                                                <span class="border bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                      {h?.status}
                                                </span>
                                          </div>


                                    </div>

                              ))}









                        </div>


                        {/* Withdraw for approval */}
                        <div class="max-w-7xl mx-auto rounded-lg shadow-lg mt-10  flex flex-col gap-2">
                              <h1 className='text-center font-bold text-[20px]'>Withdraws for approval</h1>


                              {withdrawHistories?.map((wh, index) => (

                                    <div class="bg-white flex font-bold items-center justify-between border border-b-black gap-2 mt-2 p-4">
                                          <div class="  flex items-center justify-start gap-2    rounded-full ">
                                                <div class="border bg-[rgb(33,54,68)] w-10 h-10 rounded-full flex items-center justify-center p-2 ">
                                                      <Link to={`/update_withdraw_status/${wh?.id}`}>
                                                            <i className="text-white fa-regular fa-pen-to-square"></i>
                                                      </Link>

                                                </div>


                                               
                                          </div>
                                          <div class="flex flex-col items-center">
                                                <h1>-{wh?.amount}$</h1>


                                                <span class="border bg-[rgb(33,54,68)] px-1 text-[12px] text-white rounded-md">
                                                      {wh?.status}
                                                </span>
                                          </div>


                                    </div>

                              ))}









                        </div>




                  </section>
            </>
      );
}

export default AdminDash;