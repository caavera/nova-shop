import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Shopping Cart - Open/Close product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail  = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    // Product detail - show product
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider value={{ 
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}