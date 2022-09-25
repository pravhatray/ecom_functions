import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { NavLink,useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../Context/AllContext'
import styles from './nav.module.css'
import axios from 'axios'
import SearchedItem from "../SearchedItem"
import style from "../Searched.module.css"
// import Nav2 from './Nav2'

const Nav = () => {
    const {isAuth,cartData,handleLogout}=useContext(AuthContext)


    const [searchParam,setSearchParam]=useSearchParams()
    const [query,setQuery]= useState(searchParam.get("q") || "")
    const [data,setData]=useState([])
   
    const searchdata=(query)=>{
        axios.get(`https://sale-asos-women.herokuapp.com/home_products?q=${query}`).then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    }

   

    const handleQuery=(e)=>{

        setTimeout(() => {
            setQuery(e.target.value)
            searchdata(e.target.value)
        }, 1000);
    }
   
    useEffect(()=>{
        setSearchParam({q:query})
    },[query])
   
    return (
        <>
        <div className={styles.navbar}>
            <NavLink  to="/"><img width="120px" src="https://cdn.dribbble.com/users/1402642/screenshots/4282560/all-in-one-shop-islamabad.jpg" /></NavLink>
            <NavLink to="/men"><h2>MEN</h2></NavLink>
            <NavLink to="/women"><h2>WOMEN</h2></NavLink>
            <NavLink to="/electronics"><h2>ELECTRONICS</h2></NavLink>
            <NavLink to="/sneakers"><h2>SNEAKERS</h2></NavLink>
            <NavLink to="/jew"><h2>JEWELERY</h2></NavLink>
            <input onChange={handleQuery} placeholder='search for products' type="text" />
            
            {/* <img className={styles.nav_icon1}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAh1BMVEX///8AESEAAAC5vL////3+/f/8/PwAAA8AABMAAAgAABEAAAwAABgAEiAAAAQAABXHycz19vbj5eextLeDhYoACBzq6+0ABhTX2dtzeHuVmJylqK0AECNBQ0hLTVAnKi5dYmYyNT5oam0yNjqLjpIiJS9LUFgrLzodISdSVVkACCATGSdfYmz2U0PNAAADbElEQVR4nO2a227iMBBAbcdxLiTBuZELBCildLvt/3/fOikVoQtxCs7QhzmqKoSEOPKMPeMJhCAIgiAIgiAIgiAIgpzB+emV/UiPOJGWZclFTMgDPazqacZanCaTjxAQQpBFzZif009yl7E0VmvC9R82iMqL9DmiNKQncm9tEegs4RnL6XcCVkNmiQrKomH/WbSwnSA2VGgEF41/UYOunB1khlSXV6NbkRpOo76uoUQsKI1k83+K9rZNEwN5VLMBDUqjJYSETRZDUVGEjNgCwGQwO7oMgTjibbENNB5OBnGaJY5Gg+bPMcAZInVhodRPptcgqd4DJEG0aao8UgCP/S/x+C3rsRzhAVFiLL1HBLFfEq1H/rIAOD/i9VC1bXErDtEL7T1deqQAGoKU2jrHYbrlgxMOaXgZhIRCFkMa+QZit3QMtMmQjTIXBz9cXbYIWQV2cVCtoX9l74bz15hDNIUt6o4tffdyUF4TmOb0C3WxXNGwt2/a1znbQd0ZjthEVIV7ft+n/p890MnRE+FENsw7pUkQsV2pYgI7//ik3DftMChq/63rxQMMvohLa7nP9ksrAU6MM/pBsMG26+kr1TfKriXv1XfR/bVvw2VIbDVFUZWiP6tUr0RZFUUjIS5RHdYb82k+i7ZpPykW6dab0dWcvU3fnQoViOTAjhfcgDGnqlMpZVpXDju9fUhUDZoyXVRiLjdn91vH8+fzue85/YLjbJZTDzAz9vd0hnbn+iqkbfFd9c7WMGfZdC2q2pjJq/7ScCx4T8lUA0ybJO/BYEfYI5y/J2SiFGk1rrQ/F5i/TNEfqvQvC90g6JygKM0/DBE8Hh+UY2iCd/NFh9tb72caagdFhofc7ZmUjd0pfVj2+WFzHpY7PkN7S+JaJj0Unu5yfZk8Igb7AX5bVFpUZAymSHlTVFpWbmlOg+y0s9urzHbmNOTtGqr4mhqmCvJx5SnYOI8PU3UmvjVJW0LKzJyqfMzEdAhWm9kycfOz+vadoDHTOWvnYdoFMbN1RwzUNR57Ix7r+8KiArM2oTH8lHQMZiZ31vBT0jHMTNysagMeJkaIlW6MrcerDHhsL0/kfoK7NeCRGVgPE5NuGd29byMjJVd2Q7A7aIxocBKX7W/EbkWWsZE6d/8kQzxkmIkgCIIgCIIgCIIgyKP5B1P0K9Dx4Y3ZAAAAAElFTkSuQmCC" alt="user" />
            <img className={styles.nav_icon2}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgFwXI8XbGovCoCOFuEtJxY8eTLspZsZbqg&usqp=CAU" alt="fav" /> */}
            
            {
                isAuth.auth===true?
                <>
                <h3>{isAuth.name}</h3>
                <button onClick={handleLogout}>LOGOUT</button>
                </>:
                <> <NavLink to="/login"><h2>Login</h2></NavLink>
                <NavLink to="/SignUp"><h2>Sign Up</h2></NavLink></>
            }
            
            <NavLink to="/shoppingcart"><img className={styles.nav_icon3}  src="https://endlessicons.com/wp-content/uploads/2012/11/shopping-bag-icon.png" alt="bag" /><span>{cartData.length}</span></NavLink>
        </div>
        <div className={style.main}>
            {
                data.map((item)=>{
                    return(
                        <SearchedItem 
                        image={item.image} 
                        id={item.id} 
                        title={item.title}
                        key={item.id} />
                    )
                })
            }
        
        {/* <Nav2/> */}
        </div>
        </>
    )
}

export default Nav