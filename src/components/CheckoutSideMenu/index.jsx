import { useContext } from 'react';
import { Link } from 'react-router';
import { ShoppingCartContext } from '../../Context';
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../components/OrderCard";

const CheckoutSideMenu = () => {
    const { 
        closeCheckoutSideMenu, 
        isCheckoutSideMenuOpen,
        cartProducts,
        setCartProducts,
        getShoppingCartTotalPrice,
        order,
        setOrder,
        setSearchByTitle
    } = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(filteredProducts);
    };

    const handleCheckout = () => {
        const orderToAdd = {
            id: crypto.randomUUID(), // 🔥 ID único
            title: 'My Order ' + Date().toLocaleString(),
            products: cartProducts,
            totalPrice: getShoppingCartTotalPrice(),
            date: new Date().toLocaleString()
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
        closeCheckoutSideMenu()
    };

    return (
        <motion.aside 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isCheckoutSideMenuOpen ? '0%' : '100%', opacity: isCheckoutSideMenuOpen ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed right-0 top-[68px] h-[calc(100vh-68px)] w-96 bg-white shadow-xl border-l border-gray-200 rounded-l-lg flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className='w-full h-14 flex justify-between items-center px-6 bg-gray-50 border-b border-gray-300 shadow-sm'>
                <h2 className='font-semibold text-xl text-gray-700'>My Order</h2>
                <button
                    className='cursor-pointer rounded-full hover:bg-red-500 hover:text-white p-2 transition-all duration-300'
                    onClick={() => closeCheckoutSideMenu()}
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            
            {/* Order List */}
            <div className='px-6 overflow-y-auto flex-1 space-y-4 py-4'>
                {cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <OrderCard 
                            key={product.id} 
                            id={product.id} 
                            title={product.title} 
                            price={product.price} 
                            imageUrl={product.images[0]}
                            handleDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                )}
            </div>
            
            {/* Footer */}
            <div className='px-6 py-4 bg-gray-50 border-t border-gray-300 shadow-sm'>
                <p className='flex justify-between items-center text-lg font-semibold'>
                    <span className='text-gray-700'>Total:</span>
                    <span className='font-medium text-2xl'>${getShoppingCartTotalPrice()}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        className="w-full mt-4 py-2 text-white bg-black hover:bg-blue-700 transition-all duration-300 font-medium rounded-lg shadow-md"
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </motion.aside>
    );
};

export default CheckoutSideMenu;
