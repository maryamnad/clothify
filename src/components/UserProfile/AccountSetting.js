import React from 'react'
import './AccountSetting.css'
import axios from 'axios'
import { useEffect, useState } from "react";

const AccountSetting = () => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    // setLoading(true);
    axios.get("http://127.0.0.1:5000/api/getcustomer")
      .then((res) => {
        setDataSource(res.data);
        // setLoading(false);
      })
    
  }, []);
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name<span>*</span></label>
          <input type='text' name='name' id='name'/>
        </div>
   

      <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='tel' name='phone' id='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='postal'>Postal Code: <span>*</span></label>
          <input type='tel' name='postal' id='postal' 

          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address: <span>*</span></label>
          <input type='text' name='addr' id='addr' 

          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City: <span>*</span></label>
          <input type='text' name='city' id='city' 

          />
        </div>
        </div>
        
      <button className='mainbutton1'
        
        >Save Changes</button>
    </div>


    
  )
}
export default AccountSetting