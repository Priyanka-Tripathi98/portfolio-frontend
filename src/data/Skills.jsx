import React from 'react'
import { skillsData } from '../assets/Assets'

const Skills = () => {
  return (
    <section id='Skills' className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-gray-900'>
            <span className='text-teal-600'>Technical</span> Skills
          </h2>
          <div className='w-20 h-1.5 bg-teal-600 mx-auto mb-6 rounded-full'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            A comprehensive overview of my tech stack and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className='group relative p-8 bg-white border border-gray-100 rounded-2xl 
                         transition-all duration-300 ease-in-out
                         hover:border-teal-500 hover:-translate-y-2 hover:shadow-2xl'
            >
              {/* Icon Container */}
              <div className='w-14 h-14 rounded-lg flex items-center justify-center 
                              bg-teal-50 text-teal-600 mb-6 transition-all duration-300
                              group-hover:bg-teal-600 group-hover:text-white group-hover:rotate-3'>
                <skill.icon className='w-7 h-7' />
              </div>

              {/* Text Content */}
              <h3 className='text-xl font-bold text-gray-800 mb-4 capitalize'>
                {skill.title}
              </h3>
              
              {/* Technology Tags */}
              <div className='flex flex-wrap gap-2 justify-start'>
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className='px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 
                               rounded-full transition-colors duration-300
                               group-hover:bg-teal-50 group-hover:text-teal-700'>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Decorative Accent */}
              <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity'>
                <skill.icon className='w-12 h-12 text-teal-900' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills