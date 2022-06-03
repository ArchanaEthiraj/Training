import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'
import { BiCartAlt } from "react-icons/bi";
import {Link} from 'react-router-dom'

function Home() {
    const [Products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }
    useEffect(() => {fetchData()}, [])
  return (
<div className='container'>
<div className='mt-2 mb-2'>
        <BiCartAlt size={20}/>
        </div>
    <div className='fle'>
       {Products.map(prod =>
       <Link to={`/product/${prod.id}`} className="text-decoration-none"> 
           <div className='card'>
             <img src={prod.image} className="card-img-top" alt="prod" height="200" width="100%"/>
           <div className='card-body'>
           <div className='title card-title'>{prod.title}</div>
           <div>{prod.price}</div>
           <div>{prod.category}</div></div></div>
        </Link>
       )}
    </div></div>
  )
}

export default Home