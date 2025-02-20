import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
    const { closeProductDetail, isProductDetailOpen, productToShow } = useContext(ShoppingCartContext);

    return (
        <motion.aside 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isProductDetailOpen ? '0%' : '100%', opacity: isProductDetailOpen ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed right-0 top-[68px] h-[calc(100vh-68px)] w-96 bg-white shadow-xl border-l border-gray-200 rounded-l-lg flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className='w-full h-12 flex justify-between items-center p-6 bg-gray-50 border-b border-gray-300'>
                <h2 className='font-semibold text-xl text-gray-700'>Product Detail</h2>
                <button
                    className='cursor-pointer rounded-full hover:bg-red-500 hover:text-white p-1 transition-all duration-300'
                    onClick={() => closeProductDetail()}
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            
            {/* Image */}
            <figure className='px-6 py-4 flex justify-center'>
                <img
                    className='w-full h-64 object-cover rounded-lg shadow-md'
                    src={productToShow?.images?.[0]}
                    alt={productToShow?.title}
                />
            </figure>
            
            {/* Info */}
            <div className='flex flex-col px-6 pb-6'>
                <span className='font-semibold text-2xl text-gray-800 mb-2'>
                    {productToShow?.title}
                </span>
                <span className='font-semibold text-lg mb-1'>
                    ${productToShow?.price}
                </span>
                <p className='font-light text-sm text-gray-600 leading-relaxed'>
                    {productToShow?.description}
                </p>
            </div>
        </motion.aside>
    );
};

export default ProductDetail;
