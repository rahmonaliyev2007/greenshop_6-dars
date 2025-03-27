"use client"
import useAuthStore from '@/store/authStore';
import React from 'react'

export default function Account() {

  const { user } = useAuthStore();


  return (
    <div>
        <form>
            <label>
                <span>Fist Name</span>
                <input type="text" value={user.name}/>
            </label>
            <label>
                <span>Last Name</span>
                <input type="text" value={user.surname}/>
            </label>
            <label>
                <span>Email Address</span>
                <input type="email" value={user.email}/>
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" value={user.phone_number}/>
            </label>
            <label>
                <span>Username</span>
                <input type="text" value={user.username}/>
            </label>
        </form>
    </div>
  )
}

