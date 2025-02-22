import { BrowserRouter, Routes, Route } from 'react-router';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../components/navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-orders/:id" element={<MyOrder />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename="/nova-shop"> {/* Usamos basename para GitHub Pages */}
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>  
  );
};

export default App;