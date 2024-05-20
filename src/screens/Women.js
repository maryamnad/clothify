import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import './Women.css'
import {products} from '../data/womendata'


export default function Women() {
  return (
    <>
    <Navbar/>
        <div className="sticky">
        <Link to="/Home" className="previous">&laquo; Go Back</Link>
        </div>

    
        <div className="Homeimage">
            <section className="trendingitems" id="trending">
                <div className="centertext">
                    <h2>Our Women <span>Collection</span></h2>
                </div>
                <div className="items">


                {products.map((product)=>

                <div className="row">
                        <img src={product.img} alt=""/>
                        <div className="itemtext">
                            {product.OnSale || (<h5>Sale</h5>)}
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>{product.name}
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                            </h4> 

                            <p>{product.price}
                            <button className="add-to-cart-btn" href="/" >
                                    <span className='bx bx-cart' id="cart" 
                                    >Add to cart</span> 
                                </button> 
                            </p>
                        </div>
                    </div>
                )};







                </div>
            </section>
        </div>













        <Footer/>
    </>
  )
}
