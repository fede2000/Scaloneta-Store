import { MyOrdersContainer ,MyOrdersTable, TitleMyOrders, ParagraphMyOrders} from './OrderHistoryStyled';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import OrderStatus from '../OrderStatus/OrderStatus';
import { formatPrice, formatDate } from '../../Utils/index';


const OrderHistory = () => {
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector(state => state.orders);
  const currentUser = useSelector(state => state.user.currentUser);
  if (loading && !orders) {
    // return <Loader  />;
  }
  

  if (error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <MyOrdersContainer>
       <TitleMyOrders >Tu historial de pedidos</TitleMyOrders>
       <ParagraphMyOrders>
          Abra un pedido para ver el <b> resumen</b>
        </ParagraphMyOrders>
        <br />
      {orders?.length ? (
       <>
        <MyOrdersTable>
        <thead>
          <tr>
            <th>s/n</th>
            <th>Fecha</th>
            <th>Id-orden</th>
            <th>Total</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          
          {orders.map((order, index) =>{
            const { createdAt, status, total, id } = order;
            const createOrderAt = new Timestamp(
              createdAt.seconds,
              createdAt.nanoseconds
            ).toDate();
            //  <CardMyOrders key={order.id} {...order} index={index} />
            return(
              <tr key={id} onClick={() => navigate(`/order-details/${id}`)}>
                <td>{index + 1}</td>
                <td>
                {formatDate(createOrderAt)}hs
                  
                </td>
                <td>#{id.slice(0, 7)}</td>
                <td>
                  {formatPrice(total)}
                </td>
                <td className='td-flex'>
                  {status}
                  {<OrderStatus status={status}></OrderStatus>}
                  
                </td>
            </tr>   
            );
         
         
      })}
        </tbody>
        </MyOrdersTable>
      </>
      ) : (
        <>
        <h2>Que esperas para hacer tu primer pedido!</h2>
        </>
      )}
    </MyOrdersContainer>
  );
};

export default OrderHistory;
