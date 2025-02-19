import {  BrowserRouter,Routes,Route,} from 'react-router';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../components/navbar';
import './App.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
    </BrowserRouter>
  );
};

export default App;
