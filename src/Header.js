import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from './HeaderOptions'
import Homelcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import {auth} from './Firebase'
import { logout } from"./features/userSlice";


function Header() {
  const dispatch = useDispatch();
  const logout0fApp = () => {
    dispatch (logout ( )) ;
    auth.signOut();
  };
  

  return (
    <div className='header'>
     <div className="header__left">

     <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/> 

      <div className="header__search">
         <SearchIcon />
          <input type="text"/>   
      </div>

     </div>
       <div className="header__right">
         <HeaderOption Icon={Homelcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title= "Messaging" />
          <HeaderOption Icon={NotificationsIcon} title ="Notifications" />
          <HeaderOption avatar="https: //compassionate-leakey-e9b16b.
                            netlify.app/images/IG_Sonny. jpeg" title ="Me" 
                            onClick={logout0fApp}
                            />                 
        </div>
   </div>
    
  )
}

export default Header