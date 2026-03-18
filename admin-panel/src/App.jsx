import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'
import Product from './Pages/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>

      <div className="grid-container">

        <Header OpenSidebar={OpenSidebar}/>

        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>

      </div>  

    </BrowserRouter>
  )
}

export default App
