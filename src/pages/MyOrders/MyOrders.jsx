import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersActions from '../../redux/orders/orders-actions';

import CardsMyOrders from '../../components/OrderHistory/OrderHistory';
import Button from "../../components/UtilsComponents/Button/Button"
import {
  MyOrdersBtnContainer,
  MyOrdersContainer,
  MyOrdersTitle,
} from './MyOrdersStyled';
import { useDispatch, useSelector } from 'react-redux';
import OrderHistory from '../../components/OrderHistory/OrderHistory';


const MyOrders = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(ordersActions.getOrdersFail());
    } else {
      error && dispatch(ordersActions.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);

  return (
    <>
      <MyOrdersContainer>
        <MyOrdersTitle>Mis órdenes</MyOrdersTitle>
        <OrderHistory />
        <MyOrdersBtnContainer>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MyOrdersBtnContainer>
      </MyOrdersContainer>
    </>
  );
};

export default MyOrders;
