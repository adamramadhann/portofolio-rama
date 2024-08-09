import React from 'react'

const CardContack = () => {
  return (
    <section className='w-screen h-screen p-5'>
        <div className=' flex flex-col items-center select-none'>
            <h1 className='text-xl font-bold mb-5'>Card contack </h1>
            <p className='text-justify text-[12px]'>
                Hai semuanya! Senang sekali bisa bertemu dengan Anda di sini. Perkenalkan, saya Adam Ramadhan,
                dan saya sangat antusias untuk memperkenalkan portofolio ini bersama Anda. 
                Saya percaya bahwa kita bisa belajar banyak satu sama lain, berbagi ide, dan menciptakan hal-hal luar biasa bersama.
                Terima kasih telah bergabung.
            </p>
        </div>
            <h2 className='mt-10 flex justify-start items-start '>Card Contack :</h2>
        {/* <div className='flex flex-col items-center mt-5'>
            <div className='bg-slate-200 w-[70%] h-32 rounded-md p-2 relative'>
                <div className='flex items-center gap-2'>
                    <img src="public/—Pngtree—fast food big ham burger_8648590.png" alt="" width={'50px'} height={'50px'} />
                    <h1 className='text-xs capitalize'>nama</h1>
                </div>
                <p className='text-justify text-[8px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quia?
                </p>
                <div className='w-full mt-5 gap-2 flex items-end justify-end'>
                    <button className='text-[8px] h-[17px]  text-center px-4 rounded  bg-blue-500 text-white'>Detail</button>
                    <button className='text-[8px] h-[17px]  text-center px-4 rounded  bg-red-500 text-white'>Delete</button>
                </div>
            </div>
        </div> */}
        <div className='flex flex-col items-center mt-5'>
            <button className='bg-slate-200 w-[70%] h-32 rounded-md p-2 flex items-center justify-center  ' >
                <h1 className='text-[150px] mb-8 text-gray-500 '>+</h1>
            </button>
        </div>
    </section>
  )
}

export default CardContack
