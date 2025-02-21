import { TrashIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex items-center gap-2 w-full">
                <figure className="w-20 h-20 flex-shrink-0">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm text-gray-700 break-words flex-1 leading-tight">{title}</p>
                <p className="text-lg font-semibold whitespace-nowrap">${price}</p>
                <button
                    className='cursor-pointer p-2 hover:text-red-500 transition-all duration-300 flex-shrink-0'
                    onClick={() => handleDelete(id)}
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
};

export default OrderCard;