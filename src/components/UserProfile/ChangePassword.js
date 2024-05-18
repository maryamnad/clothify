import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const ChangePassword = () => {
    const token = useSelector((state) => state.auth.token)
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: ''
      });
      const handlePasswordChange = (e) => {
        setPasswordData({
          ...passwordData,
          [e.target.name]: e.target.value
        });
      };
      const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
          if (!token) {
            throw new Error('No token found');
          }
          const response = await axios.put('http://127.0.0.1:5000/api/user/change-password', passwordData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log('Password change successful:', response.data);
          // Provide feedback to the user here
        } catch (error) {
          console.error('There was an error changing the password:', error);
        }
      };
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Change Password</h1>

            <form className='form' onSubmit={handlePasswordSubmit}>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Old Password <span>*</span></label>
                    <input type="password" name='currentPassword' id='old'onChange={handlePasswordChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>New Password <span>*</span></label>
                    <input type="password" name='newPassword' id='new' onChange={handlePasswordChange}
                    />
                </div>

                <button className='mainbutton2' type='submit'>Change Password</button>
            </form>

            
        </div>
    )
}

export default ChangePassword