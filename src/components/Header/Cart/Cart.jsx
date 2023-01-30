import React from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './CartStyles'
import { FaShoppingCart } from "react-icons/fa"

const Cart = () => {
  return (
    <CartContainer>
        <Link to="/cart">
            Cart
            <FaShoppingCart size={24}/>
            <p>0</p>
        </Link>
    </CartContainer>
  )
}

export default Cart