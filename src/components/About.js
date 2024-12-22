import React from 'react'
import AboutImg from '../assets/About.png'
const About = () => {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='md:w-1/2 pl-5'>
                <img className='h-full '  src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mt-5 mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className=''>Hello, I'm Britvasan, A Highly Motivated Web Developer with an internship experience as a Full Stack Developer. Skilled in Python, JavaScript, React.js, Django, Bootstrap, Tailwind CSS, MySQL with strong Expertise in Both front-end and back-end technologies.  </p>
                    <br />
                    <h1 className='text-2xl border-b-4 border-primary mb-3 w-[115px] font-bold'>Education</h1>
                    <p>[B.E/ELectronics and Communication Engineering],[AAA College of Engineering and Technology, Sivakasi],[2019-2023]</p>
                    <br />
                    <h1 className='text-2xl border-b-4 border-primary mb-3 w-[95px] font-bold'>Hobbies</h1>
                    <ul>
                        <li>Web Designing</li>
                        <li className='pt-2'>Playing Cricket</li>
                        <li className='pt-2'>Learning New Technologies</li>
                        <li className='pt-2 py-5'>Watching Movies/Web series</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About