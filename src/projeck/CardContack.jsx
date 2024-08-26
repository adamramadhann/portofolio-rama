import React, { useEffect, useState } from 'react'
import supabase from '../supabase'

const CardContact = () => {
    const [btn, setBtn] = useState(true)
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

    
    
    // Fungsi untuk mengambil data dari Supabase
    const fetchAPI = async () => {
        const { data: contacts, error } = await supabase.from('contack').select()
        if (error) {
            console.error(error)
        } else {
            setData(contacts)
        }
    }


    // Fungsi untuk toggle form
    function handleBtn() {
        setBtn(prev => !prev)
    }

    // Fungsi untuk menghandle submit form
    async function handleForm(e) {
        e.preventDefault()

        const nama = e.target.nama.value;
        const deskripsi = e.target.deskripsi.value;

        // Validasi input form
        if (!nama || !deskripsi) return alert('Form harus diisi semua !!')

        // Menyimpan data ke Supabase
        const { error } = await supabase.from('contack').insert([{ nama, deskripsi }])
        if (error) {
            console.error(error)
        } else {
            fetchAPI() // Mengambil data yang baru
            handleBtn() // Menutup form setelah submit
        }
        }
    


    // membuat fungsi fungcion delete 
    function handleDelete(e) {

        const fonff = confirm('yakin mau menhapus data ini ?')

        if(!confirm) return


        supabase.from('contack').delete().eq("id", e )
        .then( ress => {
            if(ress.error) {
                console.error(ress.error)
            }  else {
                fetchAPI()
            }
        })
    }


    // Mengambil data saat komponen pertama kali di-render
    useEffect(() => {
        fetchAPI()
    }, [refresh])

    return (
        <section className='w-screen h-screen p-5'>
            <div className={`w-full h-full ${btn ? "" : "blur-[2px]"}`} >
                <div className='flex flex-col items-center select-none relative'>
                    <h1 className='text-xl font-bold mb-5'>Card Contact</h1>
                    <p className='text-justify text-[12px]'>
                        Hai semuanya! Senang sekali bisa bertemu dengan Anda di sini. Perkenalkan, saya Adam Ramadhan,
                        dan saya sangat antusias untuk memperkenalkan portofolio ini bersama Anda. 
                        Saya percaya bahwa kita bisa belajar banyak satu sama lain, berbagi ide, dan menciptakan hal-hal luar biasa bersama.
                        Terima kasih telah bergabung.
                    </p>
                </div>
                <h2 className='mt-10 flex justify-start items-start '>Card Contact:</h2>

                {/* Menampilkan data contacts */}
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col items-center mt-5'>
                        <div className='bg-slate-200 w-[70%] h-32 rounded-md p-2 relative'>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-xs capitalize'>{item.nama}</h1>
                            </div>
                            <p className='text-justify text-[8px]'>
                                {item.deskripsi}
                            </p>
                            <div className='w-full mt-5 gap-2 flex items-end justify-end'>
                                <button className='text-[8px] h-[17px] text-center px-4 rounded bg-blue-500 text-white'>Detail</button>
                                <button onClick={() => handleDelete(item.id)} className='text-[8px] h-[17px] text-center px-4 rounded bg-red-500 text-white'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='flex flex-col items-center mt-5' onClick={handleBtn}>
                    <button className='bg-slate-200 w-[70%] h-32 rounded-md p-2 flex items-center justify-center'>
                        <h1 className='text-[150px] mb-8 text-gray-500'>+</h1>
                    </button>
                </div>
            </div>

            {/* Form untuk menambah data */}
            <div className={`w-full h-[100dvh] absolute top-0 right-1  flex justify-center items-center p-5 ${btn ? "hidden" : "block"}`}>
                <div className='h-[50%] w-[70%] bg-slate-50 flex items-center justify-center shadow-lg rounded-md'>
                    <form className='flex flex-col relativxe w-[200px] h-[300px]' onSubmit={handleForm}>
                        <div className='flex flex-col mb-5 mt-6'>
                            <label htmlFor="userName">User Name:</label>
                            <input type="text" name='nama' placeholder='Masukan nama anda' />
                        </div>
                        <label htmlFor="deskripsi">Deskripsi:</label>
                        <textarea name="deskripsi" id="deskripsi" cols="25" rows="3" className='border'></textarea>
                        <button type='submit' className='p-1 px-3 bg-blue-500 text-white mt-3'>Submit</button>
                    </form>
                </div>
                <button onClick={handleBtn} className='absolute right-0 top-1 p-2 px-4 bg-red-500 text-white z-20'>Close</button>
            </div>
        </section>
    )
}

export default CardContact
