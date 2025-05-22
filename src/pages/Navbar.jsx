import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-black text-white text-center text-2xl p-4 rounded-md'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/product-details'>Product Details</NavLink>
    </div>
  )
}

export default Navbar