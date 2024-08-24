import React, { useState } from 'react'
import supabase from '../supabase'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import TicTacTo from './TicTacTo'

const Layout = () => { 

  const navigate = useNavigate()
  const [click, setClick] = useState(false)

  function handleLogOut() {

    supabase.auth.signOut()
    .then(res => {
      if(res.error) {
        console.info(res)
      } else {
        navigate('/')
      }
    })

  }

  function handleClick() {
    setClick(prev => prev = !prev )
  }

  const sidebar = [
    {
      halaman : `${click ? '💢' : 'TicTacTo'}`,
      to : '/tictacto'
      
    }
  ]


  return (
    <div className={`w-screen h-screen flex`}>
      <div className='block px-5 text-center border'>
        {
          sidebar.map((e) => (
            <Link onClick={handleClick} to={e.to}>{e.halaman}</Link>
          ))
        }
      </div>
      <div className={`flex-1`}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout