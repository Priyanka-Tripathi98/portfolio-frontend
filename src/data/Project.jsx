import React from 'react'
import { projectData } from '../assets/Assets'
import { FaGithub,  FaRocket } from 'react-icons/fa'

const Project = () => {
  return (
    <section id='Project' className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-16 text-center'>
          <h2 className='text-4xl font-bold text-slate-800 mb-4'>
            Technical <span className='text-teal-600'>Showcase</span>
          </h2>
          <p className='text-slate-500'>Building modern solutions with a focus on Backend efficiency.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto'>
          {projectData.map((project, index) => (
            <div key={index} className='group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'>
              
              {/* Project Status Tag */}
                 <div className='flex justify-between items-start mb-6'> 
                <div className='bg-teal-50 text-teal-700 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-teal-100'> 
                    {index === 0 ? "● Live Now" : "● Completed"}
                </div>
                 <FaRocket className='text-slate-300 group-hover:text-teal-500 transition-colors' />
              </div> 

              <h3 className='text-2xl font-bold text-slate-800 mb-3'>{project.title}</h3>
              <p className='text-slate-600 text-sm leading-relaxed mb-6'>
                {project.Description}
              </p>

              {/* Tech Badges */}
              <div className='flex flex-wrap gap-2 mb-8'>
                {project.tech.map((t, i) => (
                  <span key={i} className='text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded'>
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a 
                href={project.github} 
                className='inline-flex items-center gap-2 font-bold text-sm text-teal-600 hover:text-teal-800 transition-colors'
              >
                <FaGithub size={18} /> 
                {index === 0 ? "View Source Code" : "View on GitHub"}
              </a>
              <a href={project.demo} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 font-bold text-sm text-teal-600 hover:text-teal-800 transition-colors ml-25'>
                <FaRocket size={18} />
                {index === 0 ? "View Demo" : "View Demo"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project