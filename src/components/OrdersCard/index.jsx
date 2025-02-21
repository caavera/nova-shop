import { motion } from "framer-motion";

const OrdersCard = ({ totalPrice, totalProducts, date }) => {   
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center bg-gray-50 p-4 transition-all duration-300 W-80"
        >
            <div className="flex items-center gap-2 w-full">
                <p>
                    <span> {date} </span>
                    <span> {totalProducts} </span>
                    <span> ${totalPrice} </span>
                </p>
            </div>
        </motion.div>
    );
};

export default OrdersCard;