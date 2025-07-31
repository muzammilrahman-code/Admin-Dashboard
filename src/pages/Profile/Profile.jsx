import React from 'react'
import Single from '../../components/Single/Single'
import { userData } from '../../data'

const Profile = () => {
  return (
    <div>
        <Single {...userData}/>
    </div>
  )
}

export default Profile