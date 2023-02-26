import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './CartIconStyles'
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from "../../../redux/cart/cart-actions"

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
            <FaShoppingCart size={18}/>
            <p>{totalCartItems}</p>
        </Link>
    </CartContainer>
  )
}

export default Cart