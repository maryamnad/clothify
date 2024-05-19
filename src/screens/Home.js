
import Navbar from '../components/Navbar'
import axios from 'axios'

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
import temp from '../images/temp.jpg'
// import { products } from '../data/products';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

    

export default function Home() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [products, setproducts] = useState([]);

    useEffect(() => {

        axios.get("http://127.0.0.1:5000/api/getprod")
        .then((res) => {
            setproducts(res.data);
        })
        

        
    }, []);

    const changeSlide = (step) => {
        setCurrentSlide(currentSlide + step);
    };
    const[show,setShow]=useState(true);
    const[warning,setWarning]=useState(false);

    const [cart, setCart] = useState(() => {
        // Retrieve initial cart state from localStorage, if available
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Add to cart function
    const addtocart = (item) => {
        // console.log(cart.length);
        // console.log("here");
        // console.log(item);

        // // Check if the item is already in the cart
        // let isPresent = cart.some(product => product.image === item.image);
        
        // if (!isPresent) {
        //     const newCart = [...cart, item];
        //     setCart(newCart);
        //     // Update the cart in localStorage
        //     localStorage.setItem('cart', JSON.stringify(newCart));
        // }
        // else{
        //     setWarning(true);
        //     setTimeout(()=>
        //         setWarning(false),2000
        //     )
        //     return;
        // }
        if (!isLoggedIn)
        {
            alert("Please login first")
            return
        }

    };
    // const [cart,setCart]=useState([])

    // const addtocart=(item)=>{
    //     //  let cart=localStorage.getItem('cart');
    //     // console.log(cart.length);
    //     // console.log("here")
    //     // console.log(item)

    //     // let isPresent=false;
    //     // cart.array.forEach((product) => {
    //     //     if(item.image===product.image)
    //     //         isPresent=true;
            
    //     // })
    //     // if(!isPresent)
    //     //     return;
    //     // setCart([...cart,item]);
    //     let cart = localStorage.getItem('cart');
    
    //     // Initialize cart as an empty array if it's not found in localStorage
    //     if (!cart) {
    //         cart = [];
    //     } else {
    //         cart = JSON.parse(cart);
    //     }
    //     console.log(cart.length);
    //     console.log("here");
    //     console.log(item);
    
    //     // Check if the item is already in the cart
    //     let isPresent = false;
    //     cart.forEach((product) => {
    //         if (item.image === product.image) {
    //             isPresent = true;
    //         }
    //     });
    
    //     if (!isPresent) {
    //         cart.push(item);
    //     }
    
    //     // Update the cart in localStorage
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // };
  
    


  
    
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
                        <img src={ require(`./../images/${product.link}`)} alt=""/>
                        <div className="itemtext">
                            {product.onsale||(<h5>{product.sale}%</h5>)}
                        </div>
                        <div className="hearticon">
                            <i className='bx bx-heart'></i>
                        </div>
                
                        <div className="details">
                            <h4>{product.title}
                                <i id="rating"className='bx bxs-star sty' 
                                ></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                                <i id="rating"className='bx bxs-star'></i>
                            </h4> 
{/* onClick={addtocart(product) */}
                            <div><span className='product-price'>{product.price} </span>
                                <button className="add-to-cart-btn" href="/" onClick={()=>addtocart(product)}>
                                    <span className='bx bx-cart' id="cart" 
                                    >Add to cart</span> 
                                </button> 
                            </div>
                        </div>
                    </div>
                    ))}
                    {
                        warning && <div className='warning'> Item is already added to cart</div>
                    }

   
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


