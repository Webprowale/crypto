import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home';
import Login from './Components/Pages/User/Login';
import Register from './Components/Pages/User/Register';

function App() {
  
  return (
    <div className="app">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register />} />
      </Routes>
    
    </div>
  )
}

export default App
