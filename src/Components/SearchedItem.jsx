import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Searched.module.css"

const SearchedItem = ({title,id,image}) => {
  return (
    <>
    <div className={styles.head}>

        <Link to={`/${id}`}>
            <div className={styles.box}>
            <img className={styles.pic} src={image} alt="title" />
            <p className={styles.text}>{title}</p>
            </div>
        </Link>
    </div>
    </>
    
  )
}

export default SearchedItem