import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import './Women.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'


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

                    <div className="row">
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
                               {/* ? <a href=""> */}
                                    <i className='bx bx-cart sty' id="cart" 
                                    >Add to cart</i> 
                                {/* </a>  */}
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
                    </div>
        
                </div>
            </section>
        </div>













        <Footer/>
    </>
  )
}
