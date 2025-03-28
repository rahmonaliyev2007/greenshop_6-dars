"use client"
import useAuthStore from '@/store/authStore';
import React from 'react'

export default function Account() {

  const { user } = useAuthStore();

  return (
    <div>
        <form>
            <div className='flex gap-3 justify-between items-center'>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'>*</span> Fist Name</div>
                <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user.name}/>
            </label>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'>*</span> Last Name</div>
                <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user.surname}/>
            </label>
            </div>
            <div className='flex gap-3 justify-between items-center'>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'>*</span> Email Address</div>
                <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="email" value={user.email}/>
            </label>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'>*</span> Phone Number</div>
                <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user.phone_number}/>
            </label>
            </div>
            <div className='flex gap-3 justify-between items-center'>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'>*</span> Username</div>
                <input className='w-full my-2 py-2 px-3 rounded-lg border bg-white' type="text" value={user.username}/>
            </label>
            <label className='w-full my-3' >
                <div> <span className='text-red-500'></span> Photo</div>
                <input className='w-1/2  my-2block py-2 px-3 rounded-lg border bg-white' type="file" value={user.username}/>
            </label>
            </div>
            <button className='bg-[#46A358] text-white py-2 px-3 cursor-pointer rounded font-semibold'>Save Changes</button>
        </form>
    </div>
  )
}

