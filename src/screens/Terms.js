import React from 'react'
import './Terms.css'
import {Link} from 'react-router-dom'

export default function Terms() {
  return (
    <div>
        <div className="sticky">
            <Link to="/Home" className="previous">&laquo; Go Back</Link>
        </div>
        <div className="container">
            <h1>About Clothify</h1>
            <div className="about-content">
                <p>Welcome to Clothify, your ultimate destination for all things fashion! At Clothify, we believe that fashion is more than just clothing; it's a form of self-expression and confidence. Our mission is to provide you with a curated selection of high-quality clothing and accessories that not only look good but also make you feel amazing.</p>
                <p>With a focus on the latest trends and timeless classics, Clothify offers a diverse range of products for men, women, and kids. Whether you're searching for the perfect outfit for a special occasion or simply updating your everyday wardrobe, we've got you covered.</p>
                <p>At Clothify, we value style, quality, and affordability. We work closely with trusted suppliers and designers to ensure that every item meets our standards of excellence. With fast shipping and hassle-free returns, shopping at Clothify is convenient and enjoyable.</p>
                <p>Thank you for choosing Clothify as your go-to fashion destination. We're dedicated to providing you with exceptional service and helping you look and feel your best every day.</p>
            </div>
        </div>
    </div>
  )
}
