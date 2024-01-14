import React from 'react'
import { FaTruck } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <>
    <div className="container py-5 ">
        <div className="row">
            <div className="col FreeDelivery">
            <FaTruck style={{fontSize:"20px", color:"#ffc107"}}/>
            <p>Super Fast and Free Delivery</p>
            </div>
            <div className="col">
                <div className="col FreeDelivery mb-3">< MdOutlineHealthAndSafety style={{fontSize:"20px", color:"#ffc107"}}/> <span>Money Back Gaurantee</span></div>
                <div className="col FreeDelivery"><GiReceiveMoney style={{fontSize:"20px", color:"#ffc107"}}/><span className='mx-2'>Non-Contact Shipping</span></div>
            </div>
            <div className="col FreeDelivery">
            <RiSecurePaymentLine style={{fontSize:"20px", color:"#ffc107"}}/>  
            <p>Supaer Secure Payment Syatem</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Services