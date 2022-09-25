import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [cartData, setData] = useState([])

  useEffect(() => {
    handleCart()
  }, [])

  function handleCart() {
    try {
      axios.get(`https://sale-asos-women.herokuapp.com/product`).then((res) => {

        setData(res.data)
      })
    } catch (er) {
      console.log(er)
    }
  }
  // console.log(cartData)
  const handleaddqty = (id) => {
    axios.get(`https://sale-asos-women.herokuapp.com/product/${id}`).then((res) => {
      res.data.qty += 1
      axios.patch(`https://sale-asos-women.herokuapp.com/product/${id}`, { qty: res.data.qty }).then((res) => {
        handleCart()

      })
    })
  }
  const handlelessqty = (id) => {
    axios.get(`https://sale-asos-women.herokuapp.com/product/${id}`).then((res) => {
      res.data.qty -= 1
      axios.patch(`https://sale-asos-women.herokuapp.com/product/${id}`, { qty: res.data.qty }).then((res) => {
        handleCart()
        // console.log(res.data.qty)
      })
    })
  }
  // const handleqty=(id,amt)=>{
  //   let updated = data.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         qty: item.qty + amt
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setData(updated);
  // }

  // function handleDelete(id) {
  //   const deleted = data.filter((item) => item.id !== id);
  //   setData(deleted);
  // }

  const handleDelete = (id) => {
    axios.delete(`https://sale-asos-women.herokuapp.com/product/${id}`).then((res) => {
      handleCart()
    })
  }

  const [isAuth, setisAuth] = useState({ auth: false, name: null })
  const handleLogin = (name) => {
    setisAuth({ auth: true, name: name })
  }

  const handleLogout = () => {
    setisAuth({ auth: false, name: null })
  }

  return (
    <AuthContext.Provider value={{handleLogout, isAuth,setisAuth, handlelessqty, handleDelete, handleaddqty, handleCart, cartData, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}