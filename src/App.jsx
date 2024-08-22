import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CardContack from './projeck/CardContack'
import Login from './projeck/dashboard/Login'
import Register from './projeck/dashboard/Register'
import Layout from './projeck/dashboard/Layout'

const App = () => {

  const [session, setSesion] = useState(false)

    if(!session) {
      return (
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
        </Routes>
      )
    }

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route path='/' />
      </Route>
    </Routes>
  )
}

export default App
