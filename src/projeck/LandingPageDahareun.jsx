import React from 'react'
import GroupImage from 'src/assets/Group 48095711.png';
import MaskImage from 'src/assets/Mask group.png';

const LandingPageDahareun = () => {




    return (
    <section className={` w-screen h-[100dvh] p-2 `}>
        <nav className={`flex w-full justify-between`}>
            <div>
                <img src="" alt="" />
                <h1>Dahareun</h1>
            </div>
            <h1>💨</h1>
        </nav>
        <div className={`flex flex-col gap-5 mt-5 items-center`}>
            <h1 className={'text-3xl font-bold font'}>fastes and cheapest food Delivery service then other</h1>
            <img src={GroupImage} alt="" />
            <h1>Get the best quality and most delicious food delivery in the world yiu can get them all at Dahareun</h1>
            <span className='border p-1 flex w-[95%] rounded-lg'>
                <input type="text" placeholder='Find Restaurant Here' />
                <button className={`p-1 py-2  bg-red-500 text-white rounded-lg`}>Get Started</button>
            </span>
        </div>
        <div className={`flex flex-col gap-5 mt-5 `}>
            <h1>fastes and cheapest food Delivery service then other</h1>
            <img src={MaskImage} alt="" />
            <h1>Get the best quality and most delicious food delivery in the world yiu can get them all at Dahareun</h1>
            <button className={`w-[100px] h-[40px] bg-red-500 text-white rounded-lg`}>Get Started</button>
        </div>
        <h1>Ini adalah teks<span style="display:block;">yang turun ke baris berikutnya</span></h1>

    </section>
)
}

export default LandingPageDahareun