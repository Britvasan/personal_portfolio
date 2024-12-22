import React from 'react'
import project1 from '../assets/project1.png';

const Projects = () => {
    return (
        <section className='flex py-20 px-5 justify-center bg-primary text-white'>
            <div className='w-1/2'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl border-b-4 border-secondary mt-5 mb-5 w-[140px] font-bold'>Projects</h1>

                </div>
            </div>
            <div className='w-1/2'>
                <img src={project1}/>
            
            </div>
        
        </section>
    )
}

export default Projects