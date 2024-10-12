import React from 'react'
import logo from '../assets/images/K.png'

const Navbar = () => {
  return (
    <nav className="bg-primary w-full flex flex-row items-center justify-between py-2 px-8 border-b border-[#C4CFDE]">

        <img className="w-auto h-[5em]" src={logo} alt="" />

        <ul className="flex flex-row gap-10 items-center text-secondary">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
        </ul>

    </nav>
  )
}

export default Navbar
