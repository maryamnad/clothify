import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
// import { products } from '../data/products';
import { products as initialProducts } from '../data/cartdata';
import "./Cart.css"

const Cart = () => {
// const price=0;
const [products, setProducts] = useState(initialProducts);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  const price = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  setTotalPrice(price);
}, [products]);


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
    <div className='mainheadCart'>Your Cart</div>
    <div className="cart-card">
            <div className="cart-main">
                {
                products.map((product,index)=>(

                  <div className='cart_box' key={index}>
                    <div className='cart_img'>
                      
                      <img src={product.image} alt="/"/>
                      <p>{product.name}</p>
                    </div>
                    <div>
                    <button onClick={() => handleAdd(index)}>+</button>
                    <span>{product.quantity}</span>
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
