import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './Product.css'

function Product() {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProducts(response.data)
    }
    useEffect(() => {fetchData()}, [])


    const {id} = useParams();
  return (
    <div className='d-flex justify-content-center'>
      <div><img src={products.image} alt="prod" height="500" width="500"></img></div>
      <div className='mt-5'>
        <div>{products.title}</div>
        <div>{products.price}</div>
       <div className='des'>{products.description}</div>  
       </div>
    </div>
  )
}

export default Product
