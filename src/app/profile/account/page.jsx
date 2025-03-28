"use client"
import useAuthStore from '@/store/authStore';
import React, { useState } from 'react'

export default function Account() {

    const { user } = useAuthStore();
    const [phone_number, setPhoneNumber] = useState(user?.phone_number || "")
    console.log(phone_number);
    
    return (
        <div>
            <form>
                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '>*</span> Fist Name</div>
                        <input className='w-full my-2 active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none py-2 px-3 rounded-lg border bg-white' type="text" value={user.name} />
                    </label>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '>*</span> Last Name</div>
                        <input className='w-full my-2 active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none py-2 px-3 rounded-lg border bg-white' type="text" value={user.surname} />
                    </label>
                </div>
                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '>*</span> Email Address</div>
                        <input className='w-full my-2 active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none py-2 px-3 rounded-lg border bg-white' type="email" value={user.email} />
                    </label>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '>*</span> Phone Number</div>
                        <div className='w-full my-2 flex items-center active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none rounded-lg border bg-white'>
                            <div className='bg-[#FBFBFB] py-2 rounded-l-lg px-3 border-r-2 font-semibold'>
                                +998
                            </div>
                            <input className='w-full outline-none rounded-r-lg py-2 px-3 bg-white' placeholder='phone number' type="text" value={phone_number} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
                        </div>
                    </label>
                </div>
                <div className='flex gap-3 justify-between items-center'>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '>*</span> Username</div>
                        <input className='w-full my-2 active:border-green-500 hover:border-green-500 transi focus:border-green-500 outline-none py-2 px-3 rounded-lg border bg-white' placeholder='username' type="text" value={user.username} />
                    </label>
                    <label className='w-full my-3' >
                        <div className='font-semibold text-sm'> <span className='text-red-500 '></span> Photo</div>
                        <input className='w-1/2  my-2block py-2 px-3 rounded-lg border bg-white' type="file" value={user.username} />
                    </label>
                </div>
                <button className='bg-[#46A358] mt-5 hover:bg-[#46A358]/80 text-white py-2 px-3 cursor-pointer rounded font-semibold'>Save Changes</button>
            </form>
        </div>
    )
}
