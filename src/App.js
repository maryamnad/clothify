import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './screens/sign.js';
import Home from './screens/Home';
import About from './screens/About';
import Terms from './screens/Terms';
import Privacy from './screens/Policy';
import UserProfile from './screens/User/UserProfile';
import Women from './screens/Women';
import Men from './screens/Men';
import Cart from './screens/Cart.js';
import Admin from './admin'
import Dashboard from './admin/Screens/Dashboard.js';
import Inventory from './admin/Screens/Inventory.js';
import Customers from './admin/Screens/Customers.js';
import Orders from './admin/Screens/Orders.js';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn ? (
            <Route path='/user/:activepage' element={<UserProfile />} />
          ) : (
            <Route path='/user/*' element={<Navigate to="/login" />} />
          )}
          {isLoggedIn ? (
            <Route path='/cart' element={<Cart />} />
          ) : (
            <Route path='/cart' element={<Navigate to="/login" />} />
          )}
          <Route path="/admin/" element={<Dashboard />}></Route>
          <Route path="/admin/inventory" element={<Inventory />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>
          <Route path="/admin/customers" element={<Customers />}></Route>
          
        </Routes>
        {/* </Admin> */}
    </Router>
    // <BrowserRouter><Admin/></BrowserRouter>
  );
}

export default App;
