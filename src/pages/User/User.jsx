import React from 'react'
import Single from '../../components/Single/Single'
import './User.css'
import { userData } from '../../data'

const User = () => {
        //fetch data and send to single component

  return (
    <div className='user'>
        <Single {...userData}/>
    </div>
  )
}

export default User