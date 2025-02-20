import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Initialize count and setCount
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail  = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    

    return (
        <ShoppingCartContext.Provider value={{ 
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}