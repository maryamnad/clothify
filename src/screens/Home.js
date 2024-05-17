
import Navbar from '../components/Navbar'

import Navbar2 from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import { products } from '../data/products';
import React, { useState, useEffect } from "react";

    

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (step) => {
        setCurrentSlide(currentSlide + step);
    };



  
    
  return (
    <>
        <Navbar/>
        
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

            <div className="Homeimage">
            <section className="trendingitems" id="trending">
                <div className="centertext">
                    <h2>Our Trending <span>Outfits</span></h2>
                </div>
                <div className="items">

                    {products.map(product=>(
                        <div className="row">
                        <img src={product.image} alt=""/>
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

                            <div><span className='product-price'>{product.price} </span>
                                <button className="add-to-cart-btn" href="/">
                                    <span className='bx bx-cart' id="cart" 
                                    >Add to cart</span> 
                                </button> 
                            </div>
                        </div>
                    </div>
                    ))}

                    {/* <div className="row">
                        <img src={img1} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Mastani
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                            </h4> 

                            <p>PKR 4,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img2} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                        <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Deewani
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i>  
                            </h4> 

                            <p>PKR 3,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img3} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Rajkumari
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i>  
                            </h4> 

                            <p>PKR 6,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img4} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Madhuri
                                <i id="rating"className='bx bxs-star stys' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i>  
                            </h4> 

                            <p>PKR 5,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a>    
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img5} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Pankhari
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i> 
                            </h4> 

                            <p>PKR 7,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>


                    <div className="row">
                        <img src={img6} alt=""/>
                        <div className="itemtext">
                        
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Indhurmati
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i> 
                            </h4> 

                            <p>PKR 9,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img7} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Phankraji
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i> 
                            </h4> 

                            <p>PKR 10,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img8} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Neelumpari
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i> 
                            </h4> 

                            <p>PKR 9,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img9} alt=""/>
                        <div className="itemtext">
                            
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Sohanpari
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i> 
                            </h4> 

                            <p>PKR 4,999 
                                <a href="#">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img3} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Rajkumari
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i>  
                            </h4> 

                            <p>PKR 6,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <img src={img4} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Madhuri
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating" className='bx bxs-star-half'></i>  
                            </h4> 

                            <p>PKR 5,999 
                                <a href="/">
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                </a> 
                            </p>
                        </div>
                    </div> */}
        
                </div>
            </section>
        </div>

        <div className="ClientReview">
            <div className="centertext">
                <h2>Our Client <span>Reviews</span></h2>
            </div>

            <div className="slideshow-container">
                <div className="slide fade">
                    <div className="review">
                        <h2>"Great selection and quality!"</h2>
                        <p>I love shopping at Clothify! They have a great selection of clothing for every occasion, and the quality is always top-notch.</p>
                        <p className="author">- Emily S.</p>
                    </div>
                </div>
            
                <div className="slide fade">
                    <div className="review">
                        <h2>"Fast shipping and excellent customer service!"</h2>
                        <p>I ordered a dress for an upcoming event, and it arrived sooner than expected. Plus, their customer service team was very helpful when I had a question about sizing.</p>
                        <p className="author">- Michael D.</p>
                    </div>
                </div>
            
                <div className="slide fade">
                    <div className="review">
                        <h2>"Affordable prices and trendy styles!"</h2>
                        <p>I'm a college student on a budget, so I appreciate that Clothify offers affordable prices without compromising on style. I always get compliments on my outfits!</p>
                        <p className="author">- Sarah L.</p>
                    </div>
                </div>
            
                <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
            </div>

        </div>

    <Footer/>
    </>
  )
}


