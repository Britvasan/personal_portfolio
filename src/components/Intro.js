import React from 'react'
import IntroImg from '../assets/Homepage.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin ,AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
const Intro = () => {
  const config = {
    subtitle:"I'm a Junior Web Developer",
    social:{
      twitter:'https://x.com/brittoxic_',
      facebook:'https://www.facebook.com/brit.adictz/',
      linkedin:'http://www.linkedin.com/in/britvasan12',
      instagram:'https://www.instagram.com/_.mockingbirdz._/',
      github:'https://github.com/Britvasan'
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-name-font'>Hi, <br /> I am <span className='text-black'>BRITVASAN</span>
          <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
          <a href={config.social.twitter} target='_blank' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
          <a href={config.social.facebook} target='_blank' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
          <a href={config.social.linkedin} target='_blank' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
          <a href={config.social.instagram} target='_blank' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
          <a href={config.social.github} target='_blank' className='hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
      </div>
      <img className='md:w-1/3' src={IntroImg} />
    </section>
  )
}

export default Intro