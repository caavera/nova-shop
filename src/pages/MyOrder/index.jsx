import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout'
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const {
    order,
  } = useContext(ShoppingCartContext);
  console.log(order?.slice(-1)[0])

  return (
    <Layout>
      <h2>My Order</h2>
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