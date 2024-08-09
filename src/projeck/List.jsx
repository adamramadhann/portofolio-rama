import React, { useEffect, useState } from 'react'
import supabase from '../supabase'
import { MdAutoDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

const List = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
        supabase.from('list-barang').select()
        .then(ress => {
            console.info(ress)
            setData(ress.data)
        })
    }


    function handleForm(e) {
        e.preventDefault()

        const namaBarang = e.target.namaBarang.value;

        if(!namaBarang) return alert('list harus diisi ❗❗ ')

        supabase.from('list-barang').insert([{namaBarang : namaBarang}])
        .then(ress => {
            console.info(ress)

            if (ress.error) {
                console.error("error di", ress.error)
            } else {
                fetchData()
            }

            e.target.namaBarang.value = ''
        })
    }


    function hanldeDelete(id) {

        const conf = window.confirm('yakin ingin menhapus data ??')
        if(!conf) return

        supabase.from('list-barang').delete().eq('id', id)
        .then (ress => {
            fetchData()
        })
    }


    function handleEdit(id, teksBefore) {
        const newTeks = prompt(`Silahkan Edit Dan Ganti Data List Anda !!`, teksBefore)

        if(newTeks !== null && newTeks !== '') {
            supabase.from('list-barang').update({namaBarang : newTeks}).eq('id', id)
            .then(ress => {
                
                if(ress.error) { 
                    console.error(ress.error)
                } else {
                    fetchData(ress)
                }
            })
        }

    }



    useEffect(() => {
        fetchData()
    }, [])


  return (
    <section className='w-screen h-screen select-none  '> 
        <div className='flex flex-col items-center mt-10 w-full h-full' >
            <h1 className='text-[25px] font-bold '>List Sederhana Supabase</h1>

            <form onSubmit={handleForm} className='mt-10 w-full flex items-center flex-col gap-3 mb-5' >
                <h2 className='font-semibold text-[20px]'> Silahkan Isi list </h2>
                <div className='flex gap-1'>

                    <input type="text" placeholder='Silahkan List Barang Anda' name='namaBarang' className='border p-1 w-[300px] outline-none rounded ' />
                    <button type='submit' className='border p-1 px-2 rounded ' >List</button>
                </div>
            </form>

           <table>
                <thead>
                    <tr className='border'>
                        <th className='border p-1 px-5'>ID</th>
                        <th className='border p-1 px-5'>Nama Barang</th>
                        <th className='border p-1 px-5'>Action</th>
                    </tr>
                </thead>

                <tbody>
                        {
                           data.map((e, index) => (
                            <tr key={index}>
                                <td className='border p-1 px-5'> {e.id} </td>
                                <td className='border p-1 px-5'> {e.namaBarang} </td>
                                <td className='border p-1 px-5'>
                                    <button onClick={() => handleEdit(e.id)} className='border p-1 px-1 mr-2 text-white bg-blue-500 rounded'><BiSolidEditAlt /></button>
                                    <button onClick={() => hanldeDelete(e.id)} className='border p-1 px-1 text-white bg-red-500 rounded'><MdAutoDelete /></button>
                                </td>
                            </tr>
                           ))
                        }
                </tbody>
           </table>
           <h1 className='font-semibold mt-2 text-center'>Terimakasih Sudah Menggunakan <br /> List Ini </h1>
        </div>
    </section>
  )
}

export default List
