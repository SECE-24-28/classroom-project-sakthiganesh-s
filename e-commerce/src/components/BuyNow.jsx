import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../utils/Api';

export default function BuyNow() {
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
      <h4>Order has been placed!</h4>
    </div>
  )
}
