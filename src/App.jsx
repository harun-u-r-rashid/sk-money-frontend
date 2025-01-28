import './App.css';

import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";


// All component import

import Login from './components/Login';
import Register from './components/Register';
import Package from './components/Package';
import Dash from './components/Dash';
import Cashout from './components/Cashout';
import Deposit from './components/Deposit';
import Refer from './components/Refer';
import Trx from './components/Trx';
import Profile from './components/Profile';
import Help from './components/Help';
import Task from './components/Task';
import AdminDash from './components/AdminDash';
import UpdateStatus from './components/UpdateStatus';
import UpdateWithdraw from './components/UpdateWithdraw';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register/" element={<Register />} />
        <Route path="/package/" element={<Package />} />
        <Route path="/dashboard/" element={<Dash />} />
        <Route path="/cashout/" element={<Cashout />} />

        <Route path="/deposit/" element={<Deposit />} />

        <Route path="/refer/" element={<Refer />} />
        <Route path="/history/" element={<Trx />} />
        <Route path="/profile/" element={<Profile />} />

        <Route path="/help/" element={<Help />} />
        <Route path="/task/" element={<Task />} />
        <Route path="/admin_dashboard/" element={<AdminDash />} />
        <Route path="/update_status/:pk/" element={<UpdateStatus />} />
        <Route path="/update_withdraw_status/:pk/" element={<UpdateWithdraw />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
