import React from 'react'
import './AccountSetting.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const AccountSetting = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name<span>*</span></label>
          <input type='text' name='name' id='name' value={user.Name}/>
        </div>
   

      <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='tel' name='phone' id='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={user.Phone}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email' value={user.Email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='postal'>Postal Code: <span>*</span></label>
          <input type='tel' name='postal' id='postal' value={user.PostalCode}

          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address: <span>*</span></label>
          <input type='text' name='addr' id='addr' value={user.Address}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City: <span>*</span></label>
          <input type='text' name='city' id='city'  value={user.City}

          />
        </div>
        </div>
        
      <button className='mainbutton1'
        
        >Save Changes</button>
    </div>


    
  )
}
export default AccountSetting