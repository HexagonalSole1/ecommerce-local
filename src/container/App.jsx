import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import '../css/App.css'
import Admin from '../pages/Admin'
import Carrito from "../pages/Carrito"
import Menu from '../pages/Menu'
import { EcommerceProvider } from '../Context/EcommerceProvider'

function App() {

  return (
    <>
    <EcommerceProvider>
            <BrowserRouter>
        <Routes>

          <Route path='/' element={< Menu />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/Admin' element={<Admin />} />

        </Routes>
      </BrowserRouter>
      </EcommerceProvider>


    </>
  )
}

export default App
