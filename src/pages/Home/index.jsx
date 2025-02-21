import {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

function Home() {
  const [items,setItems] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        
        const data = await response.json();
        console.log(data)
        setItems(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto place-items-center">
        {
          items?.map( item => (
            <Card key={item.id} product={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout> 
  )
}

export default Home
