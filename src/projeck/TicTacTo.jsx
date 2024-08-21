import React, { useState } from 'react'
import Button from '../components/Button'

const TicTacTo = () => {

    const [squares, setSquare] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(e) {

      if (squares[e] || calculateWinner(squares)) return

      const nextSquare = squares.slice();
      nextSquare[e] = xIsNext ? 'X' : 'O'
      setSquare(nextSquare)
      setXIsNext(prev => !prev)
    }

    function handleDelete() {
      setSquare(Array(9).fill(null))
      xIsNext(true)
    }
    
    function calculateWinner(e) {
      const line = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    
      for(let i = 0; i < line.length;i++) {
        const [a,b,c] = line[i]
    
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]
        }
      }
      return false
    }
    
    
    const win = calculateWinner(squares)
    let status;
    
    if(win) {
      status = `player ${win} winer`
    } else {
      status = `next player ${xIsNext ? 'X' : 'O'}`
    }
    
    
  return (
    <div className='flex pt-10 justify-center w-screen h-screen'>
        <div className='flex flex-col gap-5 w-[165px] h-[165px]'>
            <h1 className='text-center font-bold mb-5'>
              Welcome Games Tic Tac To My Projeck Fortofolio
            </h1>
            <div className='grid grid-cols-3 w-[165px] h-[165px]  '>
            <Button value={squares[0]} onSquareClick={() => handleClick(0) }  />
            <Button value={squares[1]} onSquareClick={() => handleClick(1) }  />
            <Button value={squares[2]} onSquareClick={() => handleClick(2) } />
            <Button value={squares[3]} onSquareClick={() => handleClick(3) } />
            <Button value={squares[4]} onSquareClick={() => handleClick(4) } />
            <Button value={squares[5]} onSquareClick={() => handleClick(5) } />
            <Button value={squares[6]} onSquareClick={() => handleClick(6) } />
            <Button value={squares[7]} onSquareClick={() => handleClick(7) } />
            <Button value={squares[8]} onSquareClick={() => handleClick(8) } />
          </div>
          <div className='flex justify-between'>
            <h1>{status}</h1>
            <button onClick={handleDelete} className=' bg-red-500 text-white px-3 rounded-md' >Reset</button>
          </div>
        </div>
    </div>
  )




}



export default TicTacTo
