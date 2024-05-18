import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import './Men.css'
import { products } from '../data/mendata';
import b1 from '../images/b1.jpeg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b3.jpg'
import b4 from '../images/b4.jpg'
import b5 from '../images/b5.jpg'
import b6 from '../images/b6.jpg'
import b7 from '../images/b7.jpg'
import b8 from '../images/b8.jpg'
import b9 from '../images/b9.jpg'



export default function Men() {

  return (
    <>
    <Navbar/>
        <div className="sticky">
        <Link to="/Home" className="previous">&laquo; Go Back</Link>
        </div>

    
        <div className="Homeimage">
            <section className="trendingitems" id="trending">
                <div className="centertext">
                    <h2>Our Men <span>Collection</span></h2>
                </div>
                <div className="items">
                {products.map(product=>(
                        <div className="row">
                        <img src={product.img} alt=""/>
                        <div className="itemtext">
                            {product.isOnSale||(<h5>Sale</h5>)}
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
{/* onClick={addtocart(product) */}
                            <div><span className='product-price'>{product.price} </span>
                                <button className="add-to-cart-btn" href="/" >
                                    <span className='bx bx-cart' id="cart" 
                                    >Add to cart</span> 
                                </button> 
                            </div>
                        </div>
                    </div>
                    ))}

        
                </div>
            </section>
        </div>


        <Footer/>
    </>
  )
}
