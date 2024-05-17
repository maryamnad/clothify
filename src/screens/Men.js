import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import './Men.css'
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

                    <div className="row">
                        <img src={b1} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Mastana
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
                        <img src={b2} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                        <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Deewana
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
                        <img src={b3} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Rajkumara
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
                        <img src={b4} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>Madhura
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
                        <img src={b5} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Pankhara
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
                        <img src={b6} alt=""/>
                        <div className="itemtext">
                        
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Indhurmata
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
                        <img src={b7} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Phankraja
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
                        <img src={b8} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                    
                        <div className="details">
                            <h4>Neelumpara
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
                        <img src={b9} alt=""/>
                        <div className="itemtext">
                            
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Sohanpara
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
                        <img src={b3} alt=""/>
                        <div className="itemtext">
                            <h5>Sale</h5>
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Rajkumara
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
                        <img src={b4} alt=""/>
                        <div className="itemtext">
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                        
                        <div className="details">
                            <h4>Madhura
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
