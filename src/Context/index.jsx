import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Add products
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Open/Close product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu - Open/Close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
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
    const [items, setItems] = useState(null);

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

    // Products - filtered products
    const [filteredItems, setFilteredItems] = useState(null);

    // Products - filter by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Products - filter by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Filter produts on category or title changes
    useEffect(() => {
        if (items) {
            let filtered = items;

            // Filtrar por categoría si hay una seleccionada
            if (searchByCategory) {
                filtered = filtered.filter(item => item.category.name.toLowerCase() === searchByCategory.toLowerCase());
            }

            // Filtrar por título si hay un término de búsqueda
            if (searchByTitle) {
                filtered = filtered.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
            }

            setFilteredItems(filtered);
        }
    }, [items, searchByCategory, searchByTitle]);

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
            searchByCategory,
            setSearchByCategory,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}