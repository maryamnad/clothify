
import Navbar from '../components/Navbar'
import axios from 'axios'

import Navbar2 from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
export default function Home () {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [products, setproducts] = useState([]);
    const [user,setuser]=useState([])
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        axios.get("http://127.0.0.1:5000/api/getprod")
        .then((res) => {
            setproducts(res.data);
        })

        const fetchUserData = async () => {
            try {
              if (!token) {
                throw new Error('No token found');
              }
              
              const response = await axios.get('http://127.0.0.1:5000/api/user', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              setuser(response.data.user);

            } catch (error) {
              console.error('Error fetching user data:', error);
            }
        }
        console.log('Search :', searchQuery);
        fetchUserData();
        
        
        const search = async () => {
            
            try {
              
              const response = await axios.get(`http://127.0.0.1:5000/api/search/${searchQuery}`)
              setproducts(response.data.product);
              console.log(response.data.product);
              console.log(products)

            } catch (error) {
              alert("No Result")
            }
        }
        if(searchQuery!='')
        {
            search()
        }
        

        

        
    }, [searchQuery]);

    const changeSlide = (step) => {
        setCurrentSlide(currentSlide + step);
    };
    const[show,setShow]=useState(true);
    const[warning,setWarning]=useState(false);

    const [cart, setCart] = useState({})
    const addtocart =async (item) => {
        if (!isLoggedIn)
        {
            alert("Please login first")
            return
        }
        console.log("Item: ",item)
        const cartItem = {
            _id: item._id,
            title: item.title,
            price: item.price,
            stock: item.stock,
            category: item.category,
            sale: item.sale,
            onsale: item.onsale,
            link: item.link,
            userid: user._id
        };
        console.log("Cart: ", cartItem)
        try {
            await axios.post("http://127.0.0.1:5000/api/newcart", cartItem, {
              
            });
            
            alert("Product added successfully");
          } catch (error) {
            console.error("Error adding product:", error);
          }

          axios.get("http://127.0.0.1:5000/api/getprod")
        .then((res) => {
            setproducts(res.data);
        })
        
        


    };
  return (
    <>
        <Navbar handleStateChange={(value) => setSearchQuery(value)}/>
       
        
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

                    {products&&products.map(product=>(
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
                            <div><span className='product-price'>{product.price} </span>
                                <button className="add-to-cart-btn" href="/" onClick={()=>addtocart(product)}>
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


