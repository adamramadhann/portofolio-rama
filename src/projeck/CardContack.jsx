import React, { useState } from 'react'

const CardContack = () => {

    const [btn, setBtn] = useState(false)

    function handleBtn() {
        setBtn(prev => prev = !prev)
    }




    return (
    <section className='w-screen h-screen p-5'>
        <div className={`w-full h-full ${btn ? "" : "blur-[2px]"}`} >
            <div className={`flex flex-col items-center select-none relative`}>
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
            <div className={`flex flex-col items-center mt-5  `} onClick={handleBtn}>
                <button className='bg-slate-200 w-[70%] h-32 rounded-md p-2 flex items-center justify-center  ' >
                    <h1 className='text-[150px] mb-8 text-gray-500 '>+</h1>
                </button>
            </div>
        </div>
        <div className={`w-full  h-full absolute top-0 right-1 left-1 flex justify-center items-center   blur-0 p-5 ${btn ? "hidden duration-200" : "block duration-200"}`}>
                
                <div className='w-full h-[50%] bg-blue-500 flex items-center justify-center'>

                <form className='felx flex-col relative w-[200px] h-[300px] ' >
                    
                    <div className='flex flex-col mb-5' >
                        <label htmlFor="userName">userName :</label>
                        <input type="text" placeholder='masukan nama anda' />
                    </div>

                    <label htmlFor="deskripsi">Deskripsi :</label>
                    <textarea name="deskripsi" id="deskripsi" cols="50" rows="5" className='border'></textarea>

                    <button type='submit' className='p-1 px-3 bg-blue-500 text-white' >Submit</button>
                </form>

                </div>

                <button onClick={handleBtn} className='absolute right-3 top-3 p-1 px-3 bg-red-500 text-white' >Close</button>
        </div>
    </section>
    )
}

export default CardContack
