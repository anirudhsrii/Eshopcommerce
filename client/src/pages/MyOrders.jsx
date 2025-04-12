import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { dummyAddress, dummyOrders } from '../assets/assets';

const MyOrders = () => {
    
    const[MyOrders, setMyOrders] = useState([]);
    const{currency} = useAppContext()
    
    const fetchMyOrders = async () => {
        setMyOrders(dummyOrders)
    }
    useEffect(()=>{
        fetchMyOrders()
    },[])
  return (
    <div className='mt-16 pb-16'>
      <div className='mb-8 flex flex-col items-end w-max'>
      <p className='text-2xl font-medium uppercase'>MY ORDERS</p>
      <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
      {MyOrders.map((order,index)=>(
        <div key={index} className='border border-gray-300 rounded-lg p-4 py-5 mb-10 max-w-4xl'>
           <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'> 
            <span>OrderId : {order._id}</span>
            <span>Payment : {order.paymentType}</span>
            <span>Total Amount : {currency}${order.amount}</span>
            </p>
            {order.items.map((item,index)=>(
                <div key={index} 
                className={`relative bg-white border border-gray-300 rounded-lg p-4 mt-4 flex flex-col 
                md:flex-row items-start md:items-center justify-between gap-4 ${index !== order.items.length - 1 ? 'mb-4' : ''}`}>
                    <div className='flex items-center mb-4 md:mb-0'>
                        <div className='bg-primary/10 p-4 rounded-lg'>
                           <img src={item.product.image[0]} alt='' className='w-16 h-16'/>
                        </div>
                        <div className='ml-4'>
                            <h2 className='text-xl font-medium text-gray-800'> {item.product.name} </h2>
                            <p> Category: {item.product.category}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                        <p> Quantity: {item.quantity || "1"}</p>
                        <p> Status: {order.status}</p>
                        <p> Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <p className='text-primary text-lg font-medium'>
                        Amount: {currency}${item.product.offerPrice * item.quantity}
                    </p>
                </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default MyOrders
