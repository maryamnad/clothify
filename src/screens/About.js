import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

export default function About() {
  return (
    <div>
        <div className="sticky">
            <Link to="/Home" className="previous">&laquo; Go Back</Link>
        </div>
        
        <div className="container">
            <div className="header">
                <h1>About Clothify</h1>
                <p>Your Ultimate Fashion Destination</p>
            </div>

            <div className="about-content">
                <img src={logo} alt="About Us Image"/>
                <p>
                Welcome to Clothify, where fashion meets convenience. 
                We are passionate about providing you with the latest trends in clothing, ensuring that you look and 
                feel your best every day.
                </p>
                <p>
                At Clothify, we believe that everyone deserves access to high-quality, affordable fashion. 
                Whether you're shopping for everyday essentials or a special occasion outfit, 
                we've got you covered with our wide range of clothing options for men, women, and kids.
                </p>
                <p>
                Our team of dedicated fashion experts curates our collections to bring you the best styles from 
                around the world. With easy navigation and secure checkout, shopping at Clothify is a breeze.
                </p>
                <p>Thank you for choosing Clothify as your go-to fashion destination. We're here to help you express 
                yourself through your style and make every outfit unforgettable.
                </p>
            </div>
        </div>
    </div>
  )
}
