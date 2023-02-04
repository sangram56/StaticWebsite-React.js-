import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Menu from './component/Menu'
import Home from  './component/Home'
import About from './component/About'
import Contactus from './component/Contactus';
import Faq from './component/Faq'
import Pricing from './component/Pricing'
import Pnf from './component/Pnf'
import Features from './component/Features';
import Footer from './component/Footer';
import Register from './component/Register';
import Protected from './component/Protected';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







 

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <ToastContainer position={"top-right"}  autoClose={4000} />
      <Routes>
       <Route path={`/`} element={<Home />} />
       <Route path={`/home`} element={<Home/>} />
       <Route path={`/about`} element={<Protected Cmp={About} />} />
       <Route path={`/pricing`} element={<Protected Cmp={Pricing} />} />
       <Route path={`/contact`} element={<Protected Cmp={Contactus} />} />
       <Route path={`/faq`} element={<Protected Cmp={Faq} />} />
       <Route path={`/features`} element={<Protected Cmp={Features} />} />
       <Route path={`/*`} element={<Pnf />} />
       <Route path={`/register`} element={<Register />} />


      </Routes>
      <Footer />
      
      
      </BrowserRouter>
      
      
    </div>
  )
}
