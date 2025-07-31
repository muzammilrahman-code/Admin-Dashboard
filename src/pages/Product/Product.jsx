import React from 'react'
import Single from '../../components/Single/Single'
import './Product.css'
import { productData } from '../../data'

const Product = () => {
        //fetch data and send to single component

  return (
    <div className='product'>
        <Single {...productData}/>
    </div>
  )
}

export default Product