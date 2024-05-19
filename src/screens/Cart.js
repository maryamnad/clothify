import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
// import { products } from '../data/products';
// import { products as initialProducts } from '../data/cartdata';
import "./Cart.css"
import { useSelector } from 'react-redux';
import axios from 'axios'

const Cart = () => {
// const price=0;
const [products, setProducts] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
const token = useSelector((state) => state.auth.token);
const [user,setuser]=useState([])


useEffect(() => {
  fetchCartItems();
}, [token]);

const fetchCartItems = async () => {
  try {
      if (!token) {
          throw new Error('No token found');
      }
      const response = await axios.get(`http://127.0.0.1:5000/api/user/getcart`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      setProducts(response.data);
      console.log(products)
    
  } catch (error) {
      console.error('Error fetching cart items:', error);
  }
};

const deleteCartItem = async (product) => {
  try {
      const response = await axios.delete(`http://127.0.0.1:5000/api/deletecart/${product._id}`, {
      });
      console.log(response.data.message);
  } catch (error) {
      console.error('Error deleting from cart:', error);
  }
};

const increaseCartItemQuantity = async (product) => {
  console.log(product)
  console.log(product._id)
  // console.log(id)
  try {
      const response = await axios.put(`http://127.0.0.1:5000/api/increasecart/${product._id}`, product, {
      });
      console.log(response.data.message);
  } catch (error) {
      console.error('Error increasing cart item quantity:', error);
  }
};

// Decrease cart item quantity
const decreaseCartItemQuantity = async (product) => {
  try {
      const response = await axios.put(`http://127.0.0.1:5000/api/decreasecart/${product._id}`, product, {
      });
      console.log(response.data.message);
  } catch (error) {
      console.error('Error decreasing cart item quantity:', error);
  }
};


const handleAdd = (product) => {
  console.log(product)
  increaseCartItemQuantity(product)
  fetchCartItems();
  
};
const handleRemove = (product) => {
  decreaseCartItemQuantity(product)
  fetchCartItems();
};

const handleDelete = (product) => {
  deleteCartItem(product);
  fetchCartItems();
};
  return (
    <>
    <Navbar/>
    
    <div className="cart-card"><div className='mainheadCart'>Your Cart</div>
            <div className="cart-main">
                {
                products.map((product,index)=>(

                  <div className='cart_box' key={index}>
                    <div className='cart_img'>
                      
                      <img src={require(`./../images/${product.link}`)} alt="/"/>
                      <p>{product.title}</p>
                    </div>
                    <div>
                    <button onClick={() => handleAdd(product)}>+</button>
                    <span>{product.stock}</span>
                    <button onClick={() => handleRemove(product)}>-</button>
                      </div>
                    <div>
                      <span>{product.price}</span>
            
                    <button onClick={()=>handleDelete(product)}>Remove</button>
                    </div>
                  </div>
                  

                ))}
                <div className='total'><span>Total Price of your cart </span><span>Rs-{totalPrice}</span></div>
                
            </div>
    </div>

    <Footer/>
    </>
  )
}
export default Cart 
