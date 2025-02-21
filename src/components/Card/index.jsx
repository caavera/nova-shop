import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"; 

const Card = ({ product }) => {
    const {  
        openProductDetail,
        closeProductDetail, 
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    } = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        setProductToShow(productDetail); // Se muestran los detalles del producto
        closeCheckoutSideMenu();
        openProductDetail();
    }

    const addProductToCart = (productData) => {
        setCartProducts([...cartProducts, productData]); // Agregar el producto al carrito
        closeProductDetail(); // Se oculta el detalle del producto
        openCheckoutSideMenu(); // se muestra el checkout side menu
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;
        if(isInCart) {
            return (
                <button
                    className="absolute top-2 right-2 bg-black shadow-md flex items-center justify-center w-6 h-6 rounded-full p-1"
                >
                    <CheckIcon className="w-6 h-6 text-white"/>
                </button>
            )
        }
        else {
            return (
                <button
                    className="absolute top-2 right-2 bg-white hover:bg-blue-300 shadow-md flex items-center justify-center w-6 h-6 rounded-full p-1"
                    onClick={(e) => {
                        e.stopPropagation(); // Evita que el evento se propague hacia el div principal
                        addProductToCart(product); // Incrementa el contador
                    }}
                >
                    <PlusIcon className="w-6 h-6 text-black"/>
                </button>
            )
        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-102"
            onClick = {() => showProduct(product)}
        >
            <figure className="relative w-full h-4/5">
                <img className="w-full h-full object-cover rounded-t-2xl"
                    src={product.images[0]}
                    alt={product.title} />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {product.category.name}
                </span>
               {renderIcon(product.id)}
            </figure>
            <div className="flex justify-between items-center mt-3 px-2 space-x-2">
                <span className="text-sm truncate">{product.title}</span>
                <span className="text-lg font-bold">${product.price}</span>
            </div>
        </div>
    );
};

export default Card;