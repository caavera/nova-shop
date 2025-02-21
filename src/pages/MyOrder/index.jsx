import { useContext } from 'react';
import { Link } from 'react-router';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from '../../components/Layout'
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const {
    order,
  } = useContext(ShoppingCartContext);
  console.log(order?.slice(-1)[0])

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80' >
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      {/* Order List */}
      <div className='flex flex-col space-y-4 py-4'>
        {
          order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images[0]}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder