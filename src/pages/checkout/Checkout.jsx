import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
// import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
// import { ContainerCheckout } from '../Checkout/CheckoutStyles';
import { CheckoutContainer, CheckoutParagraph, CheckoutSection, CheckoutTitle } from './CheckoutStyled';

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutSection>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutParagraph>Primero completa el formulario con tus datos y direccion de entrega. <b>Segundo Francia.</b> Y tercero finaliza tu compra.</CheckoutParagraph>
      <CheckoutContainer>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
        <CheckoutSummary
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
      </CheckoutContainer>
    </CheckoutSection>
  );
};

export default Checkout;
