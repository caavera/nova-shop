import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css'

const ProductDetail = () => {
    const { closeProductDetail, isProductDetailOpen, productToShow } = useContext(ShoppingCartContext);

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button
                    className='cursor-pointer rounded-full hover:bg-blue-300 p-0.5'
                    onClick={() => closeProductDetail()}
                >
                    <XMarkIcon className="w-6 h-6 text-black" />
                </button>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={productToShow?.images?.[0]}
                    alt={productToShow?.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>
                    {productToShow?.title}
                </span>
                <span className='font-medium text-lg mb-1'>
                    ${productToShow?.price}
                </span>
                <span className='font-light text-sm'>
                    {productToShow?.description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail;