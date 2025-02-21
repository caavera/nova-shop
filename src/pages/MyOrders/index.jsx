import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { Link } from 'react-router';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80' >
        <h1>My Orders</h1>
      </div>
      {
        order.map((order,index) => (
          <Link key={index} to={`/my-orders/${order.id}`} >
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))
      }
    </Layout> 
  )
}

export default MyOrders