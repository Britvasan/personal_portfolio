import React from 'react'
import ResumeImg from '../assets/Resume.jpg'
const Resume = () => {
    const config = {
        link: "https://drive.google.com/file/d/1iaJXEFmDzy44f70gNe5RaCCe9BzLoEHw/view?usp=sharing",
        image: ResumeImg
    }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-5'>
            <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
                <img className='w-[300px] h-[200px]'  src={config.image} alt='resume preview' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white font-text-font'>
                    <h1 className='text-3xl border-b-4 border-primary mb-5 w-[130px] font-semibold'>Resume</h1>
                    <p className='mb-5'>You can view my Resume <a className='btn' target='_blank' rel='noopener noreferrer' href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
  )
}

export default Resume