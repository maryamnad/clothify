import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './YourOrders.css'

const YourOrders = () => {
   const [data,setdata]=useState([])
   const token = useSelector((state) => state.auth.token);
   const fetchOrderItems = async () => {
    try {
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.get(`http://127.0.0.1:5000/api/user/userorder`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
  
        setdata(response.data);
        console.log(data)
      
    } catch (error) {
        console.error('Error fetching cart items:', error);
    }
  };
  useEffect(()=>
    {
        fetchOrderItems();
    },[]);



  return (
    <div className='yourorders'>
        <h1 className='mainhead1'> Your Orders </h1>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status </th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.date}</td>
                        <td>
                            <p>
                                {item.status==="paid" && <span className='bluedot'></span>}
                                {item.status==="Delivered" && <span className='greendot'></span>}
                                {item.status==="On the way" && <span className='yellowdot'></span>}
                                {item.status==="Cancelled" && <span className='reddot'></span>}

                                {item.status}</p>
                        </td>
                        <td>Rs.{item.price*item.stock}</td>
                    </tr>

                )

                })}

            </tbody>
        </table>
    </div>
    
  )
}
export default YourOrders
