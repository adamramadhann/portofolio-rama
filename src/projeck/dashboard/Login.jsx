import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className={`w-screen h-[100dvh] flex flex-col items-center justify-center`}>
        <div className={`w-[300px] h-[350px] shadow-xl rounded-2xl items-center flex flex-col `}>
          <h1 className={`text-xl font-bold mt-2`}>Form Login</h1>
          <form className='flex flex-col w-[80%] gap-2 mt-5 '>

            <label htmlFor="email">Email :</label>
            <input type="email" id='email' placeholder='Masukan email anda' className='border w-full h-10 p-2 mb-3' />

            <label htmlFor="password">password :</label>
            <input type="password" id='password' placeholder='Masukan password anda' className='border w-full h-10 p-2 mb-3' />

            <button type='submit' className={`border  py-1 bg-blue-500 text-white`}  >Submit</button>

          <h1 to={'/register'} className={`text-sm`} >
            want to create an account? <NavLink to={'/register'} className='text-blue-500'  >Register</NavLink>
          </h1>
          </form>
        </div>
    </div>
  )
}

export default Login