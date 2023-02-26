import React from "react";
import { useSelector } from "react-redux";

import { ButtonCheckout } from "../../pages/Cart/CartStyles";
import Link from "../UtilsComponents/Link/Link";
import { CardCheckoutSummary, CheckoutContent, CheckoutSummaryContainer, CheckoutSummaryTitle, ParagraphCheckoutSummary, SubtotalContainer } from "./CheckoutSummaryStyled";

const CheckoutSummary = ({ cartItems, shippingCost, price}) => {
  // const cartItems = useSelector(state => state.cart.cartItems);
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutSummaryContainer>
      <CheckoutSummaryTitle>Resumen de pago</CheckoutSummaryTitle>
      <CheckoutContent>
        {cartItems.lenght === 0 ? (
          <>
            <p>No hay productos en tu carrito.</p>
            <ButtonCheckout>
              <Link to="/#products">Back To Shop</Link>
            </ButtonCheckout>
          </>
        ) : (
          <div>
            <ParagraphCheckoutSummary>
              Cart item(s): <b>{totalCartItems}</b>
            </ParagraphCheckoutSummary>
            <SubtotalContainer>
              <ParagraphCheckoutSummary>
                Subtotal: <b>${totalPrice.toFixed(2)}</b>
                </ParagraphCheckoutSummary>
            </SubtotalContainer>
            {cartItems.map((item, index) => {
              const { id, name, price, quantity } = item;
              return (
                <CardCheckoutSummary key={id}>
                  <h4>Producto: {name}</h4>
                  <p>Cantidad: {quantity}</p>
                  <p>Precio unidad: ${price}</p>
                  <p>Total: ${price * quantity}</p>
                </CardCheckoutSummary>
              );
            })}
          </div>
        )}
      </CheckoutContent>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
