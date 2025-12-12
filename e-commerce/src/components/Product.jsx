import React from 'react'
import { products } from '../utils/Api'
import { Link, useParams } from 'react-router-dom'
export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} width="150" />
      </div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <Link to = {`/buynow/${product.id}`}><button>Buy Now</button></Link>
    </div>
  )
}
