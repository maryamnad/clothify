import { param } from 'express-validator'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import SingleBanner from '../../components/SingleBanner';
import background from '../../images/background.jpg'

import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from '../../components/UserProfile/UserSidebar';
import AccountSetting from '../../components/UserProfile/AccountSetting';
import ChangePassword from '../../components/UserProfile/ChangePassword';
import YourOrders from '../../components/UserProfile/YourOrders';
import './UserProfile.css'
import LegalNotice from '../../components/UserProfile/LegalNotice';

const UserProfile = () => {

    const {activepage}=useParams()
    //alert(activepage)
  return (
    <div className='userprofile'>
        <Navbar/>
        {/* UserProfile showing {activepage} */}

        <SingleBanner
        heading='My Profile'
        bannerimage={background}/>


        <div className='userprofilein'>
            <div className='left'>
                <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
                {activepage==='accountsettings' && <AccountSetting/>}
                {activepage==='changepassword' && <ChangePassword/>}
                {activepage==='yourorders' && <YourOrders/>}
                {activepage==='legalnotice'&&<LegalNotice/>}
                
            </div>
        </div>

         <Footer/>
         </div>
  )
}
export default UserProfile
