import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const TicTacTo = () => {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [draw, setDraw] = useState(false);

  // Fungsi untuk menangani klik kotak
  function handleClick(e) {
    if (squares[e] || calculateWinner(squares) || waiting) return;

    const nextSquare = squares.slice();
    nextSquare[e] = 'X';
    setSquare(nextSquare);
    setXIsNext(false);
    setWaiting(true);
    setDraw(false); // Reset draw ketika Player X bergerak
  }

  // Fungsi untuk menangani klik tombol reset
  function handleDelete() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
    setWaiting(false);
    setDraw(false); // Reset draw ketika tombol reset diklik
  }

  // Fungsi untuk menghitung pemenang
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    // Set draw jika semua kotak sudah diisi dan tidak ada pemenang
    if (squares.every(square => square !== null)) {
      setDraw(true);
    }

    return null;
  }

  // Fungsi untuk langkah otomatis oleh Player O dengan delay 20 detik
  useEffect(() => {
    if (!xIsNext && !calculateWinner(squares) && waiting) {
      const timer = setTimeout(() => {
        const emptySquares = squares
          .map((square, index) => square === null ? index : null)
          .filter(index => index !== null);

        if (emptySquares.length > 0) {
          const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
          const nextSquare = squares.slice();
          nextSquare[randomIndex] = 'O';
          setSquare(nextSquare);
          setXIsNext(true);
          setWaiting(false);
        }
      }, 500); // 20 detik

      return () => clearTimeout(timer); // Bersihkan timer jika komponen tidak lagi ada
    }
  }, [xIsNext, squares, waiting]);

  const win = calculateWinner(squares);
  let status;

  if (win) {
    status = `Player ${win} is the winner!`;
  } else if (draw) {
    status = `It's a draw!`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className='  flex pt-10 justify-center w-screen h-screen'>
      <div className='flex flex-col gap-5 w-[165px] h-[165px]'>
        <div>
        <h1 className='text-center font-bold mb-5'>
          Welcome to Tic Tac Toe Game
        </h1>
        <h2 className='text-center'>You X players and Computer O players</h2>
        </div>
        <div className='grid grid-cols-3 w-[165px] h-[165px]'>
          {squares.map((value, index) => (
            <Button
              key={index}
              value={value}
              onSquareClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className='flex justify-between'>
          <h1>{status}</h1>
          <button onClick={handleDelete} className='bg-red-500 text-white px-3 rounded-md'>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TicTacTo;
