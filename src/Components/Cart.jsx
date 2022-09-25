import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AllContext'
const Cart = () => {
const {handlelessqty,handleaddqty,handleDelete,handleCart,cartData}=useContext(AuthContext)
 
  return (
    <>
    <div>Cart-items</div>
    <div >
      {
        cartData.map((el)=>{
          return(
            <div>
                <div key={el.id}>
                  <img width="200px" src={el.image} alt={el.id} />
                  <h3>{el.title}</h3>
                  <h2>Price:₹{Math.floor(el.price*10)}</h2>
                <button  onClick={()=>handlelessqty(el.id)}>-</button>
                <button>{el.qty}</button>
                <button onClick={()=>handleaddqty(el.id)}>+</button>
                <br /><br />
                <button onClick={()=>handleDelete(el.id)}>DELETE</button>
                </div>
             </div>
          )
        })
      }
    </div>

    </>
  )
}

export default Cart