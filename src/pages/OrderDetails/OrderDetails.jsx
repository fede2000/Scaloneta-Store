import React, { useState } from 'react';
import { formatPrice } from '../../Utils';
import Link from '../../components/UtilsComponents/Link/Link';

import {
  
  ShippingCost,
  ProductCost,
  TotalCost,
  OrderDetailsContainerInfo,
  OrderDetailsSection,
  OrdersDetailsTable,
  OrderDetailsContainer,
  DivHead,
  TitleOrderDetails,
  ParagraphOrderDetails,
} from './OrderDetailsStyled';
import * as ordersActions from '../../redux/orders/orders-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';

const OrderDetails= () => {
  const navigate = useNavigate();
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser);
  const orders = useSelector(state => state.orders.orders);

  const dispatch = useDispatch();

  const { orderId } = useParams();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }

    setVisitedOrder(orders?.find(order => order.id === orderId));
  }, [orderId, currentUser?.id, orders, dispatch]);
  console.log("visitedorder")
  console.log(visitedOrder)

  return (
    <OrderDetailsSection>
      <OrderDetailsContainer>
        
        <DivHead>
          <TitleOrderDetails>Detalles del pedido</TitleOrderDetails>
          <Link to="/my-orders"></Link>
        </DivHead>
        <br />
        {orders === null ? (
          <Loader></Loader>
        ) : (
          <>
            <ParagraphOrderDetails>
              <b>Orden-ID: </b> #{visitedOrder?.id.slice(0, 7)}
            </ParagraphOrderDetails>
            <ParagraphOrderDetails>
              <b>Orden-Total: </b> ${visitedOrder?.total}
            </ParagraphOrderDetails>
            <ParagraphOrderDetails>
              <b>Orden-Status: </b> {visitedOrder?.status}
            </ParagraphOrderDetails>
            <br />
            <OrdersDetailsTable>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>

                </tr>
              </thead>
              <tbody>
                {visitedOrder?.items.map((cart, index) => {
                  const { id, name, price, imageURL, quantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>
                        <p>
                          <b>{name}</b>
                        </p>
                        <img
                          src={imageURL}
                          alt={name}
                        />
                      </td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                      <td>{(price * quantity).toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </OrdersDetailsTable>
          </>
        )}
        <OrderDetailsContainerInfo>
          <h3>Costos:</h3>
          <ProductCost>
            <p>Costo de productos</p>
            <span>{formatPrice(visitedOrder?.price)}</span>
          </ProductCost>
          <ShippingCost>
            <p>Costo de envío</p>
            <span>{formatPrice(visitedOrder?.shippingCost)}</span>
          </ShippingCost>
          <TotalCost>
            <p>Total</p>
            <span>{formatPrice(visitedOrder?.total)}</span>
          </TotalCost>
      </OrderDetailsContainerInfo>
      </OrderDetailsContainer>

    </OrderDetailsSection>
    // <SummaryContainer>
    //   <SummaryTitle>
    //     <h1>Resumen Orden: #{visitedOrder?.id.slice(0, 7)}</h1>
    //     <Link borderRadius='20' to='/my-orders'></Link>
    //   </SummaryTitle>
    //   <h2>Productos:</h2>
    //   <ProductsContainer>
    //     {visitedOrder?.items.map(item => (
    //       <CardSummary key={item.id} {...item} />
    //     ))}
    //   </ProductsContainer>
    //   <HrStyled />

    // </SummaryContainer>
  // );
)};

export default OrderDetails;
