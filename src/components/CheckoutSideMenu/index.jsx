import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
    const { 
        closeCheckoutSideMenu, 
        isCheckoutSideMenuOpen,
    } = useContext(ShoppingCartContext);

    return (
        <motion.aside 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isCheckoutSideMenuOpen ? '0%' : '100%', opacity: isCheckoutSideMenuOpen ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed right-0 top-[68px] h-[calc(100vh-68px)] w-96 bg-white shadow-xl border-l border-gray-200 rounded-l-lg flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className='w-full h-12 flex justify-between items-center p-6 bg-gray-50 border-b border-gray-300'>
                <h2 className='font-semibold text-xl text-gray-700'>My Order</h2>
                <button
                    className='cursor-pointer rounded-full hover:bg-red-500 hover:text-white p-1 transition-all duration-300'
                    onClick={() => closeCheckoutSideMenu()}
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            
            
        </motion.aside>
    );
};

export default CheckoutSideMenu;
