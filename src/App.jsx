import './App.css';

import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";


// All component import Import

import Login from './components/Login';
import Register from './components/Register';
import Verify from './components/Verify';
import Package from './components/Package';
import DashBoard from './components/DashBoard';
import Cashout from './components/Cashout';
import Deposit from './components/Deposit';
import SendMoney from './components/SendMoney';
import Refer from './components/Refer';
import Trx from './components/Trx';
import Profile from './components/Profile';
import Help from './components/Help';
import Task from './components/Task';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
 
      <Route path="/register/" element={<Register />} />
      <Route path="/verify/" element={<Verify />} />
      <Route path="/package/" element={<Package />} />
      <Route path="/dashboard/" element={<DashBoard />} />
      <Route path="/cashout/" element={<Cashout />} />
      <Route path="/send_money/" element={<SendMoney />} />
      
      <Route path="/deposit/" element={<Deposit />} />
  
      <Route path="/refer/" element={<Refer/>} />
      <Route path="/history/" element={<Trx />} />
      <Route path="/profile/" element={<Profile />} />

      <Route path="/help/" element={<Help />} />
      <Route path="/task/" element={<Task />} />
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
