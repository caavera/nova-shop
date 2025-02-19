import { FaPlus } from "react-icons/fa";

const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-102">
            <figure className="relative w-full h-4/5">
                <img className="w-full h-full object-cover rounded-t-2xl"
                    src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="headphones" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    Electronics
                </span>
                <button className="absolute top-2 right-2 bg-white hover:bg-blue-300 shadow-md flex items-center justify-center w-6 h-6 rounded-full p-1">
                    <FaPlus size={12} />
                </button>
            </figure>
            <div className="flex justify-between items-center mt-3 px-2">
                <span className="text-sm font-semibold truncate">Wireless Headphones</span>
                <span className="text-lg font-bold">$300</span>
            </div>
        </div>
    );
};

export default Card;