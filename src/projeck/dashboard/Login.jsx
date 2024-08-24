import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import supabase from '../../supabase';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    .then(res => {
      if (res.error) {
        return alert('Sandi atau email yang Anda masukkan salah');
      } else {
        // Jika login berhasil, arahkan ke halaman utama atau dashboard
        navigate('/');
        alert('Login Berhasil ')
      }
    })
    .catch(err => {
      console.info(err);
    });
  }

  return (
    <div className={`w-screen h-[100dvh] flex flex-col items-center justify-center relative`}>
      {
        loading && (
          <div className={`z-20 flex items-center justify-center w-full h-full absolute backdrop-blur-sm`}>
        <h1>Loading...</h1>
      </div>
        )
      }
      <div className={`w-[300px] h-[350px] shadow-xl rounded-2xl items-center flex flex-col`}>
        <h1 className={`text-xl font-bold mt-2`}>Form Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-[80%] gap-2 mt-5'>
          <label htmlFor="email">Email :</label>
          <input type="email" id='email' placeholder='Masukan email anda' className='border w-full h-10 p-2 mb-3' />

          <label htmlFor="password">Password :</label>
          <input type="password" id='password' placeholder='Masukan password anda' className='border w-full h-10 p-2 mb-3' />

          <button type='submit' className={`border py-1 bg-blue-500 text-white`}>Submit</button>

          <h1 className={`text-sm`}>
            Ingin membuat akun? <NavLink to={'/register'} className='text-blue-500'>Register</NavLink>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;
