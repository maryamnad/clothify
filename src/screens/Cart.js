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

  fetchCartItems();
}, [token]);


const handleAdd = (index) => {
  const newProducts = [...products];
  newProducts[index].quantity += 1;
  setProducts(newProducts);
};
const handleRemove = (index) => {
  const newProducts = [...products];
  if (newProducts[index].quantity > 1) {
    newProducts[index].quantity -= 1;
    setProducts(newProducts);
  }
};

const handleDelete = (index) => {
  const newProducts = products.filter((_, i) => i !== index);
  setProducts(newProducts);
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
                    <button onClick={() => handleAdd(index)}>+</button>
                    <span>{product.stock}</span>
                    <button onClick={() => handleRemove(index)}>-</button>
                      </div>
                    <div>
                      <span>{product.price}</span>
            
                    <button onClick={()=>handleDelete(index)}>Remove</button>
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
