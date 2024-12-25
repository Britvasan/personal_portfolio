import React from 'react'
import AboutImg from '../assets/About.png'
const About = () => {
    const config = {
        line1 : "Hello, I'm Britvasan, A Highly Motivated Web Developer with an internship experience as a Full Stack Developer. Skilled in Python, JavaScript, React.js, Django, Bootstrap, Tailwind CSS, MySQL with strong Expertise in Both front-end and back-end technologies.",
        listitem1 : "Web Designing",
        listitem2 : "Playing Cricket",
        listitem3 : "Learning New Technologies",
        listitem4 : "Watching Movies/Web series"
    }
    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 py-10'>
            <div className='md:w-1/2 pl-5'>
                <img className='h-full'  src={AboutImg} alt='about preview' />
            </div>
            <div className='md:w-1/2 flex justify-center font-text-font'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-3xl border-b-4 border-primary mt-5 mb-5 w-[150px] font-semibold'>About Me</h1>
                    <p>{config.line1}</p>
                    <br />
                    <h1 className='text-2xl border-b-4 border-primary mb-3 w-[130px] font-semibold'>Education</h1>
                    <p>[B.E/ELectronics and Communication Engineering],[AAA College of Engineering and Technology, Sivakasi],[2019-2023]</p>
                    <br />
                    <h1 className='text-2xl border-b-4 border-primary mb-3 w-[105px] font-semibold'>Hobbies</h1>
                    <ul>
                        <li>{config.listitem1}</li>
                        <li className='pt-2'>{config.listitem2}</li>
                        <li className='pt-2'>{config.listitem3}</li>
                        <li className='pt-2'>{config.listitem4}</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About