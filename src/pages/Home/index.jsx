import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

function Home() {
  const { 
    items,
    setSearchByTitle,
    searchByTitle,
    filteredItems
  } = useContext(ShoppingCartContext);

  const renderView = () => 
    searchByTitle?.length > 0 
      ? filteredItems?.length > 0 
        ? filteredItems.map(item => <Card key={item.id} product={item} />) 
        : <p className="text-gray-500 mt-10">No products found.</p>
    : items?.map(item => <Card key={item.id} product={item} />);
  

  return (
    <Layout>
      {/* Título principal */}
      <div className='flex items-center justify-center relative w-full max-w-4xl mx-auto mt-1 mb-3'>
        <h1 className="text-3xl font-semibold text-gray-800"> Exclusive Products </h1>
      </div>
      <input 
        type="text"
        placeholder="Search by product name..."
        className="w-80 px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      {/* Mostrar los productos */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto place-items-center">
        { renderView() }
      </div>
      <ProductDetail />
    </Layout> 
  )
}

export default Home
