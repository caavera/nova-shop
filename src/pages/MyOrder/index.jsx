import { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from '../../components/Layout';
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const { id } = useParams(); // 📌 Obtiene el ID de la URL

  // 📌 Si la URL es 'last', tomamos la última orden
  const selectedOrder = id === "last" ? order[order.length - 1] : order.find(order => order.id === id);

  // Obtener el `basename` dinámicamente
  const base = import.meta.env.BASE_URL;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <Link to={`${base}my-orders`} className='absolute left-0'>
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
        </Link>
        <h1 className="text-3xl font-semibold text-gray-800">My Order</h1>
      </div>

      {/* Si no hay orden encontrada, mostrar un mensaje */}
      {selectedOrder ? (
        <div className='flex flex-col space-y-4 py-4'>
          {selectedOrder.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images[0]}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No order found.</p>
      )}
    </Layout>
  );
}

export default MyOrder;