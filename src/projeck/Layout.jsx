import React, { useState } from 'react'
import supabase from '../supabase'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = ( ) => { 

  const navigate = useNavigate()
  const [click, setClick] = useState(false)


  // fungsi untuk menghiangkan sideBar nya
  // function closeSideBar() {
  //   set
  // }


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
      to : '/card',
      action : () => { setClick(true)}
    },
    {
      halaman : `${click ? '💢' : 'TicTacTo'}`,
      to : '/tictacto',
      action: () => {setClick(true)} // Menambahkan properti untuk memanggil handleClick
    },
    {
      halaman : `${click ? '❌ ' : 'LogOut'}`,
      to : '',
      action : handleLogOut
    }
  ]

  return (
    <div className="w-screen h-screen flex">
      <div className={`block h-full w-[100px] text-center  bg-slate-200  ${click ? 'hidden' : 'block'}`}>
        {
          sidebar.map((e, index) => (
            <div key={index} className={`flex flex-col border-b-black shadow-sm border `} >
              <Link onClick={e.action} to={e.to} className={`mb-2 mt-2 `} >{e.halaman}</Link>
            </div>
          ))
        }
      </div>
      <div className="flex-1 h-full w-full">
        <Outlet />
        <button onClick={handleClick} className={`border absolute top-0 right-0 p-1 text-white bg-red-500 ${click ? null : "hidden"} `} >{click ? 'open' : null}</button>
      </div>
    </div>
  )
}

export default Layout
