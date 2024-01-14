import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './Home'
import AboutUs from "./AboutUs";
import Products from './Products'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Contact from './Contact'
import  Error  from "./Error";
import Header from "./component/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './style.css';
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    </>

   )} 
;

export default App;
