import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [formData,setForm]=useState({name:"",email:"",password:""})
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target

        setForm({...formData,[name]:value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`https://sale-asos-women.herokuapp.com/signup`,formData).then((res)=>{
            console.log(res.data)
            alert("SignUp Successfull")
            setForm({name:"",email:"",password:""})               
            navigate("/login")
        })
    }
  return (
    <>
    <div>SignUp</div>
    <div style={{display:"flex",margin:"auto", marginTop:"50px"}}>
        
        <form onSubmit={handleSubmit}>
            <div>
                <input type="name"
                 required="required"
                  placeholder='name' 
                  name='name' 
                  value={formData.name}
                  onChange={handleChange} />
            </div>
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