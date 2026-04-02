import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { assets } from '../assets/Assets'

const Hero = () => {
  const roles = ["Full-Stack Developer", "Frontend Developer", "Backend Developer"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = roles[index]
    // Typing is slower, deleting is faster for a natural feel
    const speed = isDeleting ? 50 : 150 

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1))
      } else {
        setText(currentText.substring(0, text.length - 1))
      }

      // Pause at the end of the full word
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1500)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <section id='Home' className='min-h-screen flex items-center pt-20 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 py-20 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left: Text Content */}
          <div className='text-center lg:text-left order-2 lg:order-1'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 text-slate-900'>
              <span className='block text-xl sm:text-2xl text-teal-600 font-bold mb-4 tracking-wide uppercase'>
                Welcome to my portfolio
              </span>
              Hi,👋🏻 I'm a <br />
              <span className='text-slate-500'>
                {text}
              </span>
              <span className='text-teal-600 animate-pulse font-light'>|</span>
            </h1>

            <p className='text-slate-600 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed'>
              I craft immersive web experiences at the intersection of <span className='text-slate-900 font-semibold'>design</span> and <span className='text-slate-900 font-semibold'>technology</span>.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8'>
              <button className='group flex gap-3 items-center px-8 py-4 bg-slate-900 rounded-full text-white font-bold hover:bg-teal-600 transition-all duration-300 shadow-lg'>
                View My Work
                <FaArrowRight className='group-hover:translate-x-1 transition-transform'/>
              </button>
              
              <button  className='group flex gap-3 items-center px-8 py-4 border-2 border-slate-200 rounded-full text-slate-700 font-bold hover:border-slate-900 transition-all duration-300'>
                Contact Me
                <FaArrowRight className='group-hover:rotate-45 transition-transform'/>
              </button>
            </div>
          </div>

          {/* Right: Image section */}
          <div className='flex justify-center order-1 lg:order-2'>
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96'>
              {/* Decorative Blobs */}
              <div className='absolute -inset-4 bg-teal-50 rounded-full animate-blob opacity-70'></div>
              <div className='absolute -inset-4 bg-cyan-50 rounded-full animate-blob animation-delay-2000 opacity-70'></div>
              
              <div className='relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl'>
                <img 
                  className='w-full h-full object-cover transition-transform duration-700 hover:scale-110' 
                  src={assets.profileImg} 
                  alt="Profile"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero