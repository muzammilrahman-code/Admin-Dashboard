import React from 'react'
import Home from '../../assets/home.svg'; 
import Profile from '../../assets/profile.svg'; 
import User from '../../assets/user.svg';
import Product from '../../assets/product.svg';
import Order from '../../assets/order.svg';
import Post2 from '../../assets/post2.svg';
import Element from '../../assets/element.svg';
import Note from '../../assets/note.svg';
import Form from '../../assets/form.svg';
import Calender from '../../assets/calendar.svg';
import Setting from '../../assets/setting.svg';
import Backups from '../../assets/backup.svg';
import Chart from '../../assets/chart.svg';
import Log from '../../assets/log.svg';

import { Link } from 'react-router-dom';
import './Menu.css'
import {menu} from '../../data'

const iconMap = {
  Home,
  Profile,
  User,
  Product,
  Order,
  Post2,
  Element,
  Note,
  Form,
  Calender,
  Setting,
  Backups,
  Chart,
  Log,
};

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='item' key={item.id}>
        <span className='title'>{item.title}</span>
        {item.listItems.map((listItem) =>(
          <Link to={listItem.url} className='listItem' key={listItem.id}>
        <img src={iconMap[listItem.icon]} alt={listItem.title} />
        <span className='listItemTitle'>{listItem.title}</span>
        </Link>
          ))}
       
      </div>
      ))}
      

      
    </div>
  )
}

export default Menu