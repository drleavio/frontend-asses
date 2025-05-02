"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductDetails = () => {
    const {productid}=useParams()
    const [details,setDetails]=useState(null);
    const fetchProduct=async()=>{
        try {
            const response=await axios.get(`https://fakestoreapi.com/products/${productid}`)
            console.log(response.data);
            setDetails(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
            fetchProduct();
    },[productid])
    if(!details) return <div>loading....</div>
  return (
    <div className='details-container'>
       <div className='images'>
        <img style={{height:"500px",aspectRatio:"3/4"}} src={details.image} alt="iamge" />
       </div>
       <div className='details'>
       <h2>{details.title}</h2>
       <div className='rating' style={details.rating.rate>=3.5?{backgroundColor:"green"}:(details.rating.rate<3.5 && details.rating.rate>=2)?{backgroundColor:"orange"}:{backgroundColor:"red"}}>
       <div>{details.rating.rate} ⭐️</div>
       </div>
      
       <div>{details.description}</div>
       <div>category: {details.category}</div>
       </div>
    </div>
  )
}

export default ProductDetails