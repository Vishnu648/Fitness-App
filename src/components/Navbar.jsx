import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-[#010511] flex flex-row-reverse px-8'>
      <div className='w-[25%] flex flex-row-reverse justify-between items-center '>
        <img className='w-10 h-10' src={Logo} alt="logo" />
          <a href="#exercise">
            EXERCISE
          </a>
          <a href="#">
            HOME
          </a>
      </div>
    </div>
  )
}

export default Navbar
