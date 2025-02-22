import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Add products
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Open/Close product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail  = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu - Open/Close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu  = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    // Product detail - show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - total price
    const getShoppingCartTotalPrice = () => {
        return cartProducts.reduce((sum, product) => sum + product.price, 0);
    }

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Products - get products
    const [items,setItems] = useState(null);
    const [filteredItems,setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle,setSearchByTitle] = useState(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
            
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    return (
        <ShoppingCartContext.Provider value={{ 
            cartProducts,
            setCartProducts,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            getShoppingCartTotalPrice,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}