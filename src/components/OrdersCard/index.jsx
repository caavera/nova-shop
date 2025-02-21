import { motion } from "framer-motion";
import { CalendarIcon, ShoppingBagIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ totalPrice, totalProducts, date }) => {   
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center bg-white p-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Información de la orden (fecha + cantidad de productos) */}
            <div className="flex flex-col w-full">
                {/* Fecha con icono */}
                <p className="flex items-center text-gray-600 text-sm gap-1">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    {date}
                </p>

                <p className="flex items-center text-gray-700 text-sm gap-1 mt-1">
                    <ShoppingBagIcon className="w-4 h-4 text-gray-500" />
                    {totalProducts} items
                </p>
            </div>

            {/* Precio y flecha centrados */}
            <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-gray-800">${totalPrice}</p>
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </div>
        </motion.div>
    );
};

export default OrdersCard;
