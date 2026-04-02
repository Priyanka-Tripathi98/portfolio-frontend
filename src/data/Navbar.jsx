import React from 'react'
import { navMenu } from '../assets/Assets'
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='fixed w-full py-4 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center'>
          
          {/* Logo */}
          <div className='text-2xl font-bold text-zinc-800 tracking-tighter'>
            <span>THE-</span>
            <span className='text-teal-600 font-orbitron'>
              PRIYANKA
            </span>
          </div>

          {/* Menu*/}
          <div className='hidden md:flex space-x-8 border border-zinc-200/60 rounded-full px-10 py-3 bg-white/50 shadow-sm'>
            {
              navMenu.map((item, index) => (
                <a 
                  key={index} 
                  href={`#${item}`} 
                  className='text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors duration-300'
                >
                  {item}
                </a>
              ))
            }
          </div>

          {/* Button*/}
          <div>
            <button className='group px-8 py-3 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-zinc-800 font-semibold hover:bg-zinc-800 hover:text-white transition-all duration-300 active:scale-95'>
                Resume
                <FaArrowRight className='text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all text-xs'/>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar