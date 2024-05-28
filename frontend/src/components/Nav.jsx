import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='hidden md:flex gap-6 text-white px-2 items-center font-sans text-sm tracking-wider'>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/services">SERVICES</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </div>
  )
}

export default Nav