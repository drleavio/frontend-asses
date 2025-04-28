import Link from 'next/link'
import React from 'react'

const Card = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}>
    <div className='card'>
        <div className='image-container'>
        <img style={{height:"200px",aspectRatio:"3/4"}} src={product.image} alt="" />
        </div>
        <h3>{product.title.length<=40?product.title:product.title.slice(0,41)+"..."}</h3>
        <h3>₹{product.price}</h3>
    </div>
    </Link>
  )
}

export default Card