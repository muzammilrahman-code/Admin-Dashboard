import React from 'react'
import './Navbar.css'
import search from '../../assets/search.svg'
import logo from '../../assets/logo.svg'; 
import app from '../../assets/app.svg'; 
import expands from '../../assets/expand.svg'; 
import notification from '../../assets/notifications.svg'; 
import setting from '../../assets/setting.svg'; 

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" />
            <span>Dashboard</span>
        </div>

        <div className='icons'>
            <img src={search} alt="" className='icon'/>
            <img src={app} alt="" className='icon'/>
            <img src={expands} alt="" className='icon'/>
            <div className='notification'>
                <img src={notification} alt="" />
                <span>1</span>
            </div>
            <div className='user'>
                <img className='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ_kRGqRlZAmkDksrsWKHn87jtwROvL5FUayOyffo0-Os80cf9uE96C15V7CfamGxxx0&usqp=CAU' alt="" />
                <span>Muz</span>
            </div>
            <img src={setting} alt="" className='icon' />
        </div>
    </div>
  )
}

export default Navbar
