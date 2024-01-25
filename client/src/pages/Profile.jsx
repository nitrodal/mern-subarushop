import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-screen-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile
      </h1>
      <form className = 'flex flex-col gap-4'>
      <img
                className='rounded-full h-24 w-24 object-cover cursir-pointer self-center mt-2'
                src={currentUser.avatar}
                alt='profile'
              />
              <input type = 'text' placeholder = 'Username' id= 'username' className = 'border p-3 rounded-lg my-2'/>
              <input type = 'email' placeholder = 'Email' id= 'email' className = 'border p-3 rounded-lg my-2'/>
              <input type = 'text' placeholder = 'Password' id= 'password' className = 'border p-3 rounded-lg my-2'/>
              <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-70'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>
          Delete Account
        </span>
        <span className='text-blue-600 cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}
