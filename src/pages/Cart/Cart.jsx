import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as cartActions from "../../redux/cart/cart-actions"
import { BackToProducts, ButtonCheckout, ButtonClearCart, ButtonCount, CartContainer, CartTable, Checkout, CheckoutContainer, CheckoutParagraph, CountContainer, SectionCart, SummaryContainer, Text, TitleCart } from "./CartStyles";
import { toast } from 'react-toastify';


const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, shippingCost } = useSelector(state => state.cart);

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const navigate = useNavigate();

  const increaseCart = (cart) => {
    dispatch(cartActions.addToCart(cart));
  };
  const removeFromCart = (cart) => {
    dispatch(cartActions.removeFromCart(cart));
  };
  const decrementFromCart = (cart) => {
    dispatch(cartActions.decrementFromCart(cart));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  
  const totalCartItems = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const checkout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login");
      
    }
  };
  return (
    <SectionCart>
      <CartContainer>
      <TitleCart>Carrito de Compras</TitleCart>
      {cartItems.length === 0 ? (
          <>
            <p>Su carrito está vacío.</p>
            <br />
            <BackToProducts>
              <Link to="/#products">&larr; Continuar comprando</Link>
            </BackToProducts>
          </>
        ) : (
          <>
            <CartTable>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, quantity } = cart;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td className="td-flex">
                        {name}
                        <img
                          src={imageURL}
                          alt={name}
                        />
                      </td>
                      <td>{price}</td>
                      <td>
                        <CountContainer>
                          <ButtonCount
                            className="--btn"
                            onClick={() => decrementFromCart(id)}
                            
                          >
                            -
                          </ButtonCount>
                          <p>
                            <b>{quantity}</b>
                          </p>
                          <ButtonCount
                            className="--btn"
                            onClick={() => increaseCart(cart)}
                          >
                            +
                          </ButtonCount>
                        </CountContainer>
                      </td>
                      <td>{(price * quantity).toFixed(2)}</td>
                      <td >
                        <div className="icon" onClick={() => removeFromCart(id)}>                       
                          <FaTrashAlt/>
                          
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </CartTable>
            <ButtonClearCart onClick={() => clearCart()}>Limpiar Carrito</ButtonClearCart>

            <SummaryContainer>
              <CheckoutContainer>
                <BackToProducts>
                  <Link to="/#products">&larr; Continuar Comprando</Link>
                </BackToProducts>
                <br />
                <Checkout>
                  <CheckoutParagraph>
                  Cart item(s): <b>{totalCartItems}</b>
                  </CheckoutParagraph>
                  <Text>
                  <CheckoutParagraph>
                    Subtotal: <b>${totalPrice}</b>
                  </CheckoutParagraph>
                  </Text>
                  <CheckoutParagraph>
                    Envio: <b>${shippingCost}</b>
                    </CheckoutParagraph>
                  <ButtonCheckout  onClick={checkout}>Comprar</ButtonCheckout>
                </Checkout>
              </CheckoutContainer>
            </SummaryContainer>
          </>
        )}
      </CartContainer>
    </SectionCart>
  )
}

export default Cart