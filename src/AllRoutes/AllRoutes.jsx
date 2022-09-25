import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Components/Cart'
import DetailedProducts from '../Components/DetailedProducts'
import Electronics from '../Components/Electronics'
import Home from '../Components/Home'
import Jewelery from '../Components/Jewelery'
import Login from '../Components/Login'
import Men from '../Components/men'
import SignUp from '../Components/SignUp'
import Sneakers from '../Components/Sneakers'
import Women from '../Components/Women'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
    return (

        <>
            <div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/:id" element={<DetailedProducts />}></Route>
                    <Route path="/men" element={<Men />}></Route>
                    <Route path="/women" element={<Women />}></Route>
                    <Route path="/user" element={<h1>i am user</h1>}></Route>
                    <Route path="/fav" element={<h1>i am fav</h1>}></Route>
                    <Route path="/shoppingcart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/electronics" element={<Sneakers/>}></Route>
                    <Route path="/sneakers" element={<Electronics/>}></Route>
                    <Route path="/jew" element={<Jewelery/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                    <Route path="/*" element={<h1>404 errro</h1>}></Route>

                </Routes>

            </div>

        </>
    )
}

export default AllRoutes