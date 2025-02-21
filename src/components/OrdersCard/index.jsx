import { motion } from "framer-motion";

const OrdersCard = ({ totalPrice, totalProducts, date }) => {   
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex flex-col w-full">
                <p className="text-gray-600 text-sm">{date}</p>
                <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-700 text-sm">{totalProducts} items</p>
                    <p className="text-lg font-semibold text-gray-800">${totalPrice}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default OrdersCard;
