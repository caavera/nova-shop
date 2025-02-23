import { useContext, useState } from "react";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { NavLink, useNavigate } from "react-router";

const activeLinkStyle = "text-white border-b-2 border-white pb-1";
const inactiveLinkStyle = "text-gray-300 hover:text-white transition-colors duration-200";

const Navbar = () => {
    const { 
        openCheckoutSideMenu, 
        cartProducts, 
        setSearchByCategory,
        setSignOut,
        signOut,
        account,
    } = useContext(ShoppingCartContext);

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSearchByCategory(category);
        navigate(category === "All" ? "/" : `/category/${category.toLowerCase()}`);
        setMenuOpen(false); // Cierra el menú en móvil al seleccionar una categoría
    };
    
    // Sign out
    const sigOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(sigOut);
    const isUserSignOut = signOut || parsedSignOut;

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", stringifiedSignOut);
        setSignOut(true);
    };

    const renderViewDesktop = () => (
        <div className="flex gap-6">
            {!isUserSignOut && <p className="text-gray-400">{account?.email || "example@gmail.com"}</p>}
            <NavLink to="/my-orders" end className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                My Orders
            </NavLink>
            {!isUserSignOut && (
                <NavLink to="/my-account" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                    My Account
                </NavLink>
            )}
            <NavLink 
                to="/sign-in" 
                className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                onClick={handleSignOut}
            >
                {isUserSignOut ? "Sign In" : "Sign Out"}
            </NavLink>
        </div>
    );

    const renderViewMobile = () => (
        <ul className="w-full text-center space-y-3">
            {/* Categorías en el menú móvil */}
            <li className="border-b border-gray-700 pb-3">
                <ul className="flex flex-col gap-3">
                    {["All", "Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous"].map(category => (
                        <li key={category}>
                            <NavLink 
                                to={category === "All" ? "/" : `/category/${category.toLowerCase()}`} 
                                className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                                onClick={() => {
                                    handleCategoryClick(category);
                                    setMenuOpen(false); // Cierra el menú al hacer clic
                                }}
                            >
                                {category}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </li>
            
            {/* Opciones de cuenta */}
            {!isUserSignOut && (
                <li className="text-gray-400">{account?.email || "example@gmail.com"}</li>
            )}
            <li>
                <NavLink 
                    to="/my-orders" 
                    className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                    onClick={() => setMenuOpen(false)}
                >
                    My Orders
                </NavLink>
            </li>
            {!isUserSignOut && (
                <li>
                    <NavLink 
                        to="/my-account" 
                        className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                        onClick={() => setMenuOpen(false)}
                    >
                        My Account
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink 
                    to="/sign-in" 
                    className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                    onClick={() => {
                        handleSignOut();
                        setMenuOpen(false);
                    }}
                >
                    {isUserSignOut ? "Sign In" : "Sign Out"}
                </NavLink>
            </li>
        </ul>
    );
    
    

    return (
        <nav className="flex justify-between items-center fixed top-0 z-20 w-full py-4 px-6 bg-black text-white shadow-md">
            {/* Logo + Categorías */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
                    <ShoppingBagIcon className="w-7 h-7 text-white" />
                    <NavLink to="/" end onClick={() => handleCategoryClick("All")} className="hover:text-gray-300">
                        NovaShop
                    </NavLink>
                </div>

                {/* Categorías Desktop */}
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

            {/* Account + Cart Desktop */}
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-4">
                    {renderViewDesktop()}
                </div>

                {/* Shopping Cart */}
                <div 
                    className="flex gap-1 items-center cursor-pointer hover:scale-105 transition-transform"
                    onClick={openCheckoutSideMenu}
                >
                    <ShoppingCartIcon className="w-6 h-6 text-white" />
                    <p className="text-xs text-gray-300">{cartProducts.length}</p>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <XMarkIcon className="w-7 h-7 text-white" /> : <Bars3Icon className="w-7 h-7 text-white" />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-14 left-0 w-full bg-black shadow-md flex flex-col items-center py-4">
                    {renderViewMobile()}
                </div>
            )}
        </nav>
    );
};

export default Navbar;