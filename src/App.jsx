import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CardContack from './projeck/CardContack';
import Login from './projeck/dashboard/Login';
import Register from './projeck/dashboard/Register';
import Layout from './projeck/dashboard/Layout';
import TicTacTo from './projeck/TicTacTo'; 

const App = () => {
  const [session, setSession] = useState(false);

  if (!session) {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/cardcontack' element={<CardContack />} />
        <Route path='/tictacto' element={<TicTacTo />} />
      </Route>
    </Routes>
  );
};

export default App;
