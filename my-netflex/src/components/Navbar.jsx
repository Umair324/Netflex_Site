import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 w-full z-[100] absolute'>
      <Link to ='/'>
        <h1 className='text-4xl text-red-600 font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          <Link to='/login'>
            <button className='text-white mr-4 rounded px-6 py-2'>Sign in</button>
            </Link>
            <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 text-white rounded'>Sign up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar