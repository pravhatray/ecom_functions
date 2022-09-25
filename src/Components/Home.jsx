import React from 'react'
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Home_producst from './Home_producst';

function getHomePro() {
  return fetch(`https://sale-asos-women.herokuapp.com/home_products`)
    .then((res) => {
      return res.json()
    })
}


const Home = () => {
  const [proData, setProData] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://sale-asos-women.herokuapp.com/home_categories')
      .then((res) => res.json())
      .then((res) => {

        setData(res)
      })
  }, []);


  function handleFetchPro() {
    return getHomePro().then((res) => {

      setProData(res)
    })
  }

  useEffect(() => {
    handleFetchPro()
  }, [])
  return (
    <>
      <div className={styles.top_box}>
        <div className={styles.sale_img}>
          <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png" alt="sale" />
        </div>
        <div className={styles.sale_text}>
          <h1>EXTRA 20% OFF!<br />ALREADY UP TO 80% OFF !</h1>
          <h2>With Code:SALEWOW</h2>
        </div>
        
        <div className={styles.fisrt_data}>
          {
            data.map((item) => {
              return (
                <div className={styles.oi}>
                  <div key={item.id}>
                    <img src={item.url} alt="offer_pic" />
                    <h2>{item.title}</h2>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>

      {/* <Home */}



      <div >
        {
          proData.map((proItem) => {
            return (

              <div>
                <Home_producst id={proItem.id} price={proItem.price} title={proItem.title} image={proItem.image} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home