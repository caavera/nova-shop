import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props;
    
    return (
        <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <button
                    className='cursor-pointer p-1 transition-all duration-300'
                    onClick={() => handleDelete(id)}
                >
                    <TrashIcon className="w-6 h-6 text-gray-700 hover:text-red-500" />
                </button>
            </div>
        </div>
    )
}

export default OrderCard;