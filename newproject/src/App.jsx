import React from 'react'
import 'swiper/css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import User from './page/User'
import Home from './page/Home'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/User' element={<User/>}/>




        
      </Routes>
    </BrowserRouter>


  )
}

export default App