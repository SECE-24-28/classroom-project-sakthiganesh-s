import React from 'react'
import { products } from '../utils/Api'
import { Link } from 'react-router-dom'

export default function Products({setCart, cart}) {
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <h2>All Products</h2>

      {products.map(p => {
        return (
          <div key={p.id}>
            <img src={p.image} alt={p.name} width="250" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>{p.description}</p>
            <Link to = {`/product/${p.id}`}>View</Link>{" "}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
            <hr/>
          </div>
        )
      })}

    </div>
  )
}
