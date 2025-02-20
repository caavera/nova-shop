import { useContext } from 'react'
import { ShoppingBagIcon } from "@heroicons/react/24/solid"; 
import { ShoppingCartContext } from '../../Context'
import { NavLink } from 'react-router';

const activeLinkStyle = "underline underline-offset text-blue-600 font-semibold"; // Definimos los estilos para el link activo
const inactiveLinkStyle = "hover:text-blue-400"; // Estilos para links inactivos

const Navbar = () => {
    const { count } = useContext(ShoppingCartContext);

    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white shadow-md'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to="/" end >
                        NovaShop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    veracar111@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex gap-0.5 items-center'>
                    <ShoppingBagIcon className="w-6 h-6"/> 
                    <p className='text-xs'>{count}</p>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;