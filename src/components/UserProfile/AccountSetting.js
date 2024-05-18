import React, { useEffect, useState } from 'react';
import './AccountSetting.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AccountSetting = () => {
  const token = useSelector((state) => state.auth.token);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postal: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          throw new Error('No token found');
        }
        
        const response = await axios.get('http://127.0.0.1:5000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userData = response.data.user;
        setFormData({
          name: userData.Name,
          phone: userData.Phone,
          email: userData.Email,
          postal: userData.PostalCode,
          address: userData.Address,
          city: userData.City
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.put('http://127.0.0.1:5000/api/user/update', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // You might want to update the redux store or provide feedback to the user here
    } catch (error) {
      console.error('There was an error updating the user information:', error);
    }
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Your Name<span>*</span></label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input
            type='tel'
            name='phone'
            id='phone'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='postal'>Postal Code: <span>*</span></label>
          <input
            type='tel'
            name='postal'
            id='postal'
            value={formData.postal}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address: <span>*</span></label>
          <input
            type='text'
            name='address'
            id='address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City: <span>*</span></label>
          <input
            type='text'
            name='city'
            id='city'
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <button className='mainbutton1' type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default AccountSetting;
