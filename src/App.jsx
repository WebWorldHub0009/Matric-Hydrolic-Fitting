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
import ContactUs from './pages/ContactUs'
import PremiumGallery from './pages/PremiumGallery'
import Certificates from './pages/Certificates'


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
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/showcase' element={<PremiumGallery/>}/>
    <Route path='/certificates' element={<Certificates/>}/>
   </Routes>
   <FloatingButton/>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
