import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { AuthContext } from '../Context/AllContext'

function getDetails(id){
  return fetch("https://fakestoreapi.com/products/"+id)
  .then((res)=>{
    return res.json()
  })
}

const DetailedProducts = () => {
  const {handleCart}=useContext(AuthContext)
  const [data,setData]=useState({})
  const params=useParams()
  useEffect(()=>{
    getDetails(params.id).then((res)=>{
      setData(res)
    })
  },[params.id])
console.log("data",data)

function addToCart1()
{
    try {
      axios.post(`https://sale-asos-women.herokuapp.com/product`, {...data,qty:1}).then(res => {
        handleCart()
      })
    } catch (err) {
      console.log(err)
    }
}
console.log(data)
  return (
    <>
    {
      data &&(
        <>
        <img  src={data.image} width="200px" alt={data.id} />
        <h3>{`for $ ${data.price}`}</h3>
        <p>{data.description}</p>
        <button onClick={addToCart1}>Add to cart</button>
      </>
      )
    }
    <Link to="/">Go back to users</Link>
    </>
  )
}

export default DetailedProducts