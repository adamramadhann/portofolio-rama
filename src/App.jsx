import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardContack from './projeck/CardContack'
import TicTacTo from './projeck/TicTacTo'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TicTacTo/>}/>
    </Routes>
  )
}

export default App
