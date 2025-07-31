import React from 'react'
import './TopBox.css'
import {users} from '../../data'

const TopBox = () => {
  return (
    <div className='topBox'>
        <h1 className='top-deal'>Top Deals</h1>
        <div className="list">
            {users.map(user => (
                <div className="topBoxItem" key={user.id}>
                    <div className='user'>
                        <img src={user.img} className='img'/>
                        <div className='userTexts'>
                            <span className='username'>{user.username}</span>
                            <span className='email'>{user.email}</span>
                        </div>
                    </div>
                    <span className='amount'>${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox