import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product'
import Slider from '../../components/Slider/Slider'
import * as ordersActions from '../../redux/orders/orders-actions';
const Home = () => {
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
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);
  return (
    <>
    <Slider></Slider>
    <Product></Product>
    
    </>
  )
}

export default Home