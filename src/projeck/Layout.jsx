import React, { useState } from 'react'
import supabase from '../supabase'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

const Layout = () => { 

  const navigate = useNavigate()
  const [click, setClick] = useState(false)

  // Fungsi untuk menangani logout
  function handleLogOut() {

    const conf = window.confirm('YAkin Ingin LogOut ??')
          if(!conf) return

    supabase.auth.signOut()
      .then(res => {
        if(res.error) {
          console.info(res)
        } else {
          navigate('/')
        }
      })
  }

  // Fungsi untuk menangani klik sidebar
  function handleClick() {
    setClick(prev => !prev)
  }

  // Daftar item sidebar
  const sidebar = [
    {
      halaman : `Card `,
      to : '/card'
    },
    {
      halaman : `${click ? '💢' : 'TicTacTo'}`,
      to : '/tictacto',
      action: '' // Menambahkan properti untuk memanggil handleClick
    },
    {
      halaman : `${click ? '❌ ' : 'LogOut'}`,
      to : '',
      action : handleLogOut
    }
  ]

  return (
    <div className="w-screen h-screen flex">
      <div className='block h-full w-[400px] text-center border bg-blue-500 text-white'>
        {
          sidebar.map((e, index) => (
            <div key={index} className={`flex flex-col border`} >
              <Link onClick={e.action} to={e.to} className={`mb-2 `} >{e.halaman}</Link>
            </div>
          ))
        }
      </div>
      <div className="flex-1 h-full w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
