import React from 'react'
import { assets, ProfileData } from '../assets/Assets'

const About = () => {
  return (
    <section id='About' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-slate-800 mb-4'>
            About <span className='text-teal-600'>Me</span>
          </h2>
          <div className='w-16 h-1 bg-teal-600 mx-auto rounded-full'></div>
        </div>

        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          
          {/* Left: Image with Decorative Border */}
          <div className='relative group w-full lg:w-1/3'>
            <div className='absolute -inset-4 bg-teal-100 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500'></div>
            <img 
              src={assets.profileImg} 
              alt="Profile" 
              className='relative z-10 w-full rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-square'
            />
          </div>

          {/* Right: Content */}
          <div className='w-full lg:w-2/3'>
            <h3 className='text-3xl font-bold text-slate-800 mb-6'>
              Backend-Focused <span className='text-teal-600'>Problem Solver</span>
            </h3>
            
            <p className='text-slate-600 text-lg leading-relaxed mb-10'>
              I am a Computer Science graduate with a passion for building the invisible logic that powers modern web applications. 
              While I enjoy crafting clean user interfaces with **React**, my true excitement comes from designing secure APIs, 
              managing databases, and ensuring that systems are robust and scalable.
            </p>

            {/* Feature Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {ProfileData.map((item, index) => (
                <div key={index} className='p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-600 hover:bg-white hover:shadow-lg transition-all group'>
                  <item.icon className='text-3xl text-teal-600 mb-4 group-hover:scale-110 transition-transform' />
                  <h4 className='text-lg font-bold text-slate-800 mb-2'>{item.title}</h4>
                  <p className='text-sm text-slate-500 leading-snug'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About