import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Context/AllContext'
import styles from './Home.module.css'

const Home_producst = (props) => {
  const {handleCart,cartData}=useContext(AuthContext)
  const {id,title,image,price}=props
  function addToCart(id)
  {
     if(cartData.length===0)
     {
      axios.post(`https://sale-asos-women.herokuapp.com/product`,{...props,qty:1}).then(res=>{
        handleCart()
      })
     }
     else{
      cartData.map((el)=>{
        if(el.id===id){
          axios.get(`https://sale-asos-women.herokuapp.com/product/${id}`).then((res)=>{
            res.data.qty+=1;
            axios.patch(`https://sale-asos-women.herokuapp.com/product/${id}`,{qty:res.data.qty}).then((res)=>{
              handleCart()
            })
          })
        }
        else{
          axios.post("https://sale-asos-women.herokuapp.com/product",{...props,qty:1}).then(res=>{
            handleCart()
          })
        }
      })
     }


    
  }
  // try {
  //   axios.post(`https://sale-asos-women.herokuapp.com/product`, {...props,qty:1}).then(res => {
  //     handleCart()
  //   })
  // } catch (err) {
  //   console.log(err)
  // }
  return (
    <>
    <div className={styles.home}>
         <div className={styles.homeA}>
                <div key={id}>
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <button>


                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : styles.not_active
                      }
                      key={id}
                      to={`/${id}`}
                    >
                      More deatils
                    </NavLink>
                  </button>
                  <button onClick={()=>addToCart(id)}>Add To Cart</button>
                </div>
              </div>
    </div>
    </>
  )
}

export default Home_producst