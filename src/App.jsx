import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardContack from './projeck/CardContack'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CardContack/>}/>
    </Routes>
  )
}

export default App
