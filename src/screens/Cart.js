import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';

import "./Cart.css"

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="cart-card">
            <div className="cart-main">
                <h1>Cart</h1>
            </div>
    </div>

    <Footer/>
    </>
  )
}
export default Cart 
