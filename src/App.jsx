import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Menu from './components/Menu/Menu.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Users from './pages/Users/Users.jsx';
import './App.css'
import Product from './pages/Product/Product.jsx'
import User from './pages/User/User.jsx'
import Profile from './pages/Profile/Profile.jsx'

const App = () => {
  return (
    
        <div className='dashboard-container'>
         <Navbar/>
         <div className='menu-cont'>
          <div className='menu'>
         <Menu/>
          </div>
          <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/products/:id' element={<Product/>} />
            <Route path='/users/:id' element={<User/>} />
          </Routes>
          </div>
      </div>

      <Footer/>

    </div>
  )
}

export default App