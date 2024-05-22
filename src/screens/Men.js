import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import './style.css'
import './Men.css'




export default function Men() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [products, setproducts] = useState([]);
    const [user,setuser]=useState([])
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);
    const category="Men"
    useEffect(() => {

        axios.get(`http://127.0.0.1:5000/api/category/${category}`)
        .then((res) => {
            setproducts(res.data);
            console.log(res.data)
        })
        console.log("PRODUCTS: ",products)

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

        fetchUserData();
        

        
    }, []);

    const changeSlide = (step) => {
        setCurrentSlide(currentSlide + step);
    };
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
            await axios.post(`http://127.0.0.1:5000/api/newcart`, cartItem, {
              
            });
            
            alert("Product added successfully");
          } catch (error) {
            console.error("Error adding product:", error);
          }

          axios.get(`http://127.0.0.1:5000/api/category/${category}`)
        .then((res) => {
            setproducts(res.data);
        })
        


    };

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
                        <img src={ require(`./../images/${product.link}`)} alt=""/>
                        <div className="itemtext">
                            {product.onsale||(<h5>Sale</h5>)}
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


        <Footer/>
    </>
  )
}
