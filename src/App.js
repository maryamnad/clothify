import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/login" element={<Login />} />
          {/* Only render UserProfile route if logged in */}
          {isLoggedIn ? (
            <Route path='/user/:activepage' element={<UserProfile />} />
          ) : (
            // Redirect to login if accessing UserProfile without login
            <Route path='/user/*' element={<Navigate to="/login" />} />
          )}
          {/* Redirect to login if accessing root UserProfile route without login */}
          {/* {!isLoggedIn && <Navigate to="/login" />} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
