import React from 'react'

const Button = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className='border w-[55px] h-[60px] text-[35px]'>
        {value}
    </button>
  )
}

export default Button
