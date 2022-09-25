import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AllContext'

const PrivateRoute = ({children}) => {

    const {isAuth}=useContext(AuthContext)

if(!isAuth.auth)
{
    return <Navigate to="/login"/>
}

  return (
    children
  )
}

export default PrivateRoute