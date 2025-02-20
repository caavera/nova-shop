import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from "@heroicons/react/24/solid"; 
import './styles.css'

const ProductDetail = () => {
    const { closeProductDetail, isProductDetailOpen } = useContext(ShoppingCartContext);

    return (
        <aside className={`${ isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2> 
                <button onClick={() => closeProductDetail()}>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </button>
            </div>
        </aside>
    )
}

export default ProductDetail