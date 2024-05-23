import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useSelector } from 'react-redux';

function Navbar({ handleStateChange }) {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`You are logged out`);
      dispatch(authActions.logout());
      history('/');
    } catch (err) {
      alert('Incorrect Email or Password');
    }
  };

  const logout = () => {
    if (isLoggedIn) {
      sendRequest();
    } else {
      alert('You are already logged out');
    }
  };

  const login = () => {
    if (isLoggedIn) {
      alert('You are already logged in');
    } else {
      history('/login');
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Update the parent component state
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search functionality here
    handleStateChange(searchQuery);
  };

  return (
    <nav className="navbarr">
      <header>
        <div className="sticky"></div>
        <Link to="/Home" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        <ul className="navbar">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>

        <div className="navicon">
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
          <Link to="/user/accountsettings">
            <i className="bx bxs-user"></i>
          </Link>
          <Link to="/cart">
            <i className="bx bx-cart"></i>
          </Link>

          <div className="bx bx-menu" id="menuicon" onClick={handleMenuClick}></div>
        </div>
      </header>

      <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`} ref={dropdownRef}>
        <ul className="imp">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/user/accountsettings">Profile</Link>{' '}
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <li>
          <button className="buton" onClick={login}>
            Login
          </button>
        </li>
        <li>
          <button className="buton" onClick={logout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
