import React from 'react'
import ResumeImg from '../assets/Resume.jpg'
const Resume = () => {
    const config = {
        link: "https://www.dropbox.com/scl/fi/zq8be02ar6juxhwk2vk3s/Brit_resume.pdf?rlkey=rg2641iyfaxqxt8nl3yey2ukl&st=usdnsvx3&dl=0",
        image: ResumeImg
    }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-5'>
            <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
                <img className='w-[300px] h-[200px]'  src={config.image} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white font-text-font'>
                    <h1 className='text-3xl border-b-4 border-primary mb-5 w-[130px] font-semibold'>Resume</h1>
                    <p className='mb-5'>You can view my Resume <a className='btn' target='_blank' href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
  )
}

export default Resume