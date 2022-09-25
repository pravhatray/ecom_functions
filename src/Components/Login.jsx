import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AllContext'

const SignUp = () => {

    const [formData,setForm]=useState({email:"",password:""})
    const navigate=useNavigate()
    const [signUpData,setSignUpData]=useState([])
    const {setisAuth,handleLogin}=useContext(AuthContext)


    useEffect(()=>{
        axios.get(`https://sale-asos-women.herokuapp.com/signup`).then((res)=>{
            setSignUpData(res.data)
         })
    },[])

    const handleChange=(e)=>{
        const {name,value}=e.target

        setForm({...formData,[name]:value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        let mark=false
        let name=null
        signUpData.map((el)=>{
            if(el.email===formData.email && el.password===formData.password)
            {
                mark=true
                name=el.name
                return
            }
        })
     
        if(mark===true)
        {
            handleLogin(name)
            alert("Login successfull")
            navigate("/shoppingcart")
        }
        else{
            alert("login failed")
        }
    }



  return (
    <>
    <div>Login</div>
    <div style={{display:"flex",margin:"auto", marginTop:"50px"}}>
        
        <form onSubmit={handleSubmit}>
         
            <div>
                <input type="email"
                 required="required"
                  placeholder='email' 
                  name='email' 
                  value={formData.email}
                  onChange={handleChange} />
            </div>
            <div>
                <input type="password"
                 required="required"
                  placeholder='password' 
                  name='password' 
                  value={formData.password}
                  onChange={handleChange} />
            </div>
            <input type="submit" value='submit'/>
        </form>
    </div>
    

    </>
  )
}

export default SignUp