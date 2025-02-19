import {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

function Home() {
  const [items,setItems] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        
        const data = await response.json();
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
      <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg space-y-3 justify-center'>
        {
          items?.map( item => (
            <Card key={item.id} product={item} />
          ))
        }
      </div>
    </Layout> 
  )
}

export default Home
