import React from 'react'
import './Navbar.css'

const Navbar2 = () => {
  return (
    <div className="Homeimage">
    <section className="mainhome">
        <div className="maintext">
            <h5>Summer Collection</h5>
            <h1>New Summer <br/> Collection 2024</h1>
            <p>There's nothing like trend</p>
            <a href="/" className="main-btn">Shop Now 
                <i className='bx bx-right-arrow-alt'></i>
            </a>
        </div>

        <div className="downarrow">
            <a href="/" className="down" >
                <i className='bx bx-down-arrow-alt' ></i>
            </a>
        </div>
    </section>
</div>
  )
}
export default Navbar2 
