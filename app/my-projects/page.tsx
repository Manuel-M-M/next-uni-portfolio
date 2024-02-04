import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{backgroundImage: 'url(/mountains.jpg)'}} 
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover max-lg:overflow-y-scroll'
    >
      <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-5 max-w-[90%] max-h-[75%]'>
        {Projects.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.src}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Page