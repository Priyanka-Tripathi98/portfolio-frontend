import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='py-12 border-t border-zinc-200 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          
      
          <div className='mb-6 md:mb-0 text-center md:text-left'>
            <span className='uppercase text-2xl font-black tracking-tighter text-slate-800'>
              The-Priyanka<span className='text-teal-600'></span>
            </span>
          </div>

          {/* Social Links with hover effects */}
          <div className='flex space-x-8 mb-6 md:mb-0'>
            <a href="https://github.com/Priyanka-Tripathi98" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="w-6 h-6 text-zinc-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1" />
            </a>
            <a href="https://www.linkedin.com/in/priyanka-tripathi-0425a03a7/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-zinc-400 hover:text-[#0077b5] transition-all duration-300 transform hover:-translate-y-1" />
            </a>
            <a href="https://www.instagram.com/priyanka_tripathi__10" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-zinc-400 hover:text-[#E4405F] transition-all duration-300 transform hover:-translate-y-1" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className='flex flex-col items-center md:items-end gap-2'>
             <button 
              onClick={scrollToTop}
              className='mb-2 p-2 bg-zinc-50 rounded-full text-zinc-400 hover:text-teal-600 hover:bg-teal-50 transition-colors'
              title="Back to top"
            >
              <FaArrowUp size={14} />
            </button>
            <div className='text-zinc-400 text-xs font-medium tracking-wide'>
              © 2026 <span className='text-zinc-600'>The-Priyanka</span>. Crafted with passion.
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer