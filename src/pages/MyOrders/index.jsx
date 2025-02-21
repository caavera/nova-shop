import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCard';
import { Link } from 'react-router';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-full max-w-4xl mx-auto mt-8 mb-6'>
        <h1 className="text-3xl font-semibold text-gray-800">My Orders</h1>
      </div>

      {/* Si no hay órdenes, mostrar un mensaje */}
      {order.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No orders placed yet.</p>
      ) : (
        <div className="w-96 mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md">
          {order.map((order, index) => (
            <Link 
              key={index} 
              to={`/my-orders/${order.id}`} 
              className="block"
            >
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.products.length}
                date={order.date}
              />
            </Link>
          ))}
        </div>
      )}
    </Layout> 
  );
}

export default MyOrders;
