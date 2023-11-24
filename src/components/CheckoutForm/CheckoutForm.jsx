import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from '../../formik';
import * as ordersActions from '../../redux/orders/orders-actions';
import * as cartActions from '../..//redux/cart/cart-actions';

import Input from '../../components/UtilsComponents/Input/Input';
import Submit from '../../components/UtilsComponents/Submit/Submit';

// import { CheckoutDateForm, Formik, FormCheckout } from './CheckoutFormStyles';
import { CheckoutDateForm, CheckoutFormTitle, FormCheckout, Formik } from './CheckoutFormStyled';
import Loader from '../Loader/Loader';

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Initialize form data here
    name: '',
    tele: '',
  });

  return (
    <CheckoutDateForm>
      <CheckoutFormTitle>Ingresá tus datos</CheckoutFormTitle>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
          const orderData = {
            cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };
          console.log({ orderData });
          try {
            await dispatch(ordersActions.createOrder(orderData));
            navigate('/checkout-success');

            dispatch(cartActions.clearCart());
          } catch (error) {
            alert('Error al crear la orden');
          }
        }}
      >
        {({ isSubmitting }) => (
          <FormCheckout>
            <Input
              name='name'
              htmlFor='nombre'
              type='text'
              id='nombre'
              placeholder='Tu nombre'
            >
              Nombre
            </Input>
            <Input
              name='cellphone'
              htmlFor='celular'
              type='text'
              id='celular'
              placeholder='Tu celular'
            >
              Celular
            </Input>
            <Input
              name='location'
              htmlFor='localidad'
              type='text'
              id='localidad'
              placeholder='Tu localidad'
            >
              Localidad
            </Input>
            <Input
              name='address'
              htmlFor='direccion'
              type='text'
              id='dirección'
              placeholder='Tu dirección'
            >
              Dirección
            </Input>
    
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : 'Finalizar compra'}
              </Submit>
            
          </FormCheckout>
        )}
      </Formik>
    </CheckoutDateForm>
  );
};

export default CheckoutForm;
