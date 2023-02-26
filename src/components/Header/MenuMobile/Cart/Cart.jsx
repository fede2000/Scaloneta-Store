import React from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './CartStyles'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  const totalCartItems = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  return (
    <CartContainer>
        <Link to="/cart">
            Carrito
            <FaShoppingCart className='icon'/>
            <p>{totalCartItems}</p>
        </Link>
    </CartContainer>
  )
}

export default Cart