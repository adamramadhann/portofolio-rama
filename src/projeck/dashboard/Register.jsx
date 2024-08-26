import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import supabase from '../../supabase'


const Register = () => {

  const [loading, setLoading] = useState(false)
  const [bdr, setBdr] = useState(false)

  function handleSubmit(e) {

    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    const rePassword = e.target.rePassword.value

    if(password !== rePassword) {
      alert('password dan repassword harus sama ')
      return
    } else if ( password <= 8 ) {
      alert('password harus memiliki 8 charackter')
    }

    setLoading(true)


    supabase.auth.signUp({

      email : email ,
      password : password
    })
    .then(ress => {
      if(ress.error) {
        alert('Error Register !!' + ress.error.message)
        console.error(ress)
        setLoading(false)
      } else {
        console.log(ress)
        alert('Register Berhasil')
        setLoading(false)
      }
    })
    .catch(err => {
      console.error(err)
    })


  }


  return (
    <div className={`w-screen h-[100dvh] flex flex-col items-center justify-center`}>
      {
        loading && (
          <h1>Sedang Loading</h1>
        )
      }
        <div className={`w-[300px] h-[400px] shadow-xl rounded-2xl items-center flex flex-col `}>
          <h1 className={`text-xl font-bold mt-2`}>Form Register</h1>
          <form onSubmit={handleSubmit} className='flex flex-col w-[80%] gap-2 mt-3 '>

            <label htmlFor="email">Email :</label>
            <input type="email" id='email' placeholder='Masukan email anda' className={`border w-full h-10 p-2 mb-3 ${bdr ? 'border-blue-500' : 'border-red-500'}`} />

            <label htmlFor="password">password :</label>
            <input type="password" id='password' placeholder='Masukan password anda' className='border w-full h-10 p-2 mb-3' />

            <label htmlFor="rePassword">RePassword :</label>
            <input type="password" id='rePassword' placeholder='Masukan RePassword anda' className='border w-full h-10 p-2 mb-3' />

            <button type='submit' className={`border  py-1 bg-blue-500 text-white`}  >Submit</button>

          <h1 to={'/'} className={`text-sm`} >
            do you have an account? <NavLink to={'/'} className='text-blue-500' >Login Now </NavLink>
          </h1>
          </form>
        </div>
    </div>
  )
}

export default Register