import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HospilightNavbar from './components/Navbar'
import MatricNavbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Products from './pages/Products'


const App = () => {
  return (
   <>
   <BrowserRouter>
   <ScrollToTop/>
   <MatricNavbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
   </Routes>
   <FloatingButton/>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
