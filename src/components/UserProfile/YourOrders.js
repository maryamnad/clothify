import React from 'react'
import './YourOrders.css'

const YourOrders = () => {
    const data=[
        {
            id: 12333,
            date:"12/2/2019",
            status:'Delivered',
            total: 1600
        },
        {
            id: 133,
            date:"13/12/2129",
            status:'On the way',
            total: 1900
        },
        {
            id: 133,
            date:"13/12/2129",
            status:'Delivered',
            total: 100
        },        
        {
            id: 153,
            date:"13/2/2009",
            status:'Cancelled',
            total: 160
        },       {
            id: 12333,
            date:"12/2/2019",
            status:'Delivered',
            total: 1600
        },
        {
            id: 133,
            date:"13/12/2129",
            status:'On the way',
            total: 1900
        },
        {
            id: 133,
            date:"13/12/2129",
            status:'Delivered',
            total: 100
        },        
        {
            id: 153,
            date:"13/2/2009",
            status:'Cancelled',
            total: 160
        }
    ]



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
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>
                            <p>
                                {item.status==="Delivered" && <span className='greendot'></span>}
                                {item.status==="On the way" && <span className='yellowdot'></span>}
                                {item.status==="Cancelled" && <span className='reddot'></span>}

                                {item.status}</p>
                        </td>
                        <td>Rs.{item.total}</td>
                    </tr>

                )

                })}

            </tbody>
        </table>
    </div>
    
  )
}
export default YourOrders
