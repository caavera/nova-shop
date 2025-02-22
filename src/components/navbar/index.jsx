import { useContext, useState } from 'react';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"; 
import { ShoppingCartContext } from '../../Context';
import { NavLink, useNavigate } from 'react-router';

const activeLinkStyle = "underline underline-offset-4 text-blue-600 font-semibold transition-colors duration-200"; 
const inactiveLinkStyle = "hover:text-blue-500 transition-colors duration-200"; 

const Navbar = () => {
    const { openCheckoutSideMenu, cartProducts, setSearchByCategory } = useContext(ShoppingCartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSearchByCategory(category);
        navigate(category === "All" ? "/" : `/category/${category.toLowerCase()}`);
    };

    return (
        <nav className="flex justify-between items-center fixed top-0 z-20 w-full py-4 px-6 text-sm font-light bg-white/80 backdrop-blur-md shadow-md">
            {/* Contenedor izquierdo - Logo + Categorías */}
            <div className="flex items-center gap-6 ml-1">
                {/* Logo y Nombre con Icono */}
                <div className="flex items-center gap-2 font-semibold text-lg hover:scale-105 transition-transform cursor-pointer ml-3">
                    <ShoppingCartIcon className="w-7 h-7 text-blue-600" />
                    <NavLink to="/" end onClick={() => handleCategoryClick("All")}>
                        NovaShop
                    </NavLink>
                </div>

                {/* Menú de categorías */}
                <ul className="hidden lg:flex items-center gap-4">
                    {["All", "Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous"].map(category => (
                        <li key={category}>
                            <NavLink 
                                to={category === "All" ? "/" : `/category/${category.toLowerCase()}`} 
                                className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contenedor derecho - Gestión de cuenta + Carrito */}
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-4">
                    <p className="text-black/60">veracar111@gmail.com</p>
                    <NavLink to="/my-orders" end className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        My Orders
                    </NavLink>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        My Account
                    </NavLink>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Sign In
                    </NavLink>
                </div>

                {/* Carrito - Siempre visible */}
                <div 
                    className="flex gap-1 items-center cursor-pointer hover:scale-105 transition-transform"
                    onClick={openCheckoutSideMenu}
                >
                    <ShoppingBagIcon className="w-6 h-6" />
                    <p className="text-xs">{ cartProducts.length }</p>
                </div>
            </div>

            {/* Icono de menú hamburguesa - Mobile */}
            <button 
                className="absolute left-3 lg:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <XMarkIcon className="w-7 h-7"/> : <Bars3Icon className="w-7 h-7"/>}
            </button>

            {/* Menú desplegable en móvil */}
            {menuOpen && (
                <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden">
                    {/* Categorías */}
                    <ul className="w-full text-center border-b pb-3">
                        {["All", "Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous"].map(category => (
                            <li key={category} className="py-2">
                                <NavLink 
                                    to={category === "All" ? "/" : `/category/${category.toLowerCase()}`} 
                                    className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                                    onClick={() => { 
                                        handleCategoryClick(category);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {category}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Gestión de cuenta y órdenes */}
                    <ul className="w-full text-center pt-3 sm:hidden">
                        <li className="py-2">
                            <p className="text-black/60">veracar111@gmail.com</p>
                        </li>
                        <li className="py-2">
                            <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                                My Orders
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to="/my-account" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                                My Account
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
