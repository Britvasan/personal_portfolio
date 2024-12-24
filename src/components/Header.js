import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-5 py-2 bg-primary font-text-font fixed top-0 left-0 w-full z-50'>
        <a className='text-3xl flex flex-row font-semibold text-black mt-2 pr-2' href="/">BRIT</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white mt-2'>
                <li><a className='hover:text-black font-semibold' href="/">Home</a></li>
                <li><a className='hover:text-black font-semibold' href="#about">About</a></li>
                <li><a className='hover:text-black font-semibold' href="#projects">Projects</a></li>
                <li><a className='hover:text-black font-semibold' href="#resume">Resume</a></li>
                <li><a className='hover:text-black font-semibold' href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden'>
            <ul onClick={()=> setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                <li className='pt-2'><a href="/">Home</a></li>
                <li className='pt-2'><a href="#about">About</a></li>
                <li className='pt-2'><a href="#projects">Projects</a></li>
                <li className='pt-2'><a href="#resume">Resume</a></li>
                <li className='pt-2'><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-8'/></button>
        
    </header>
  )
}

export default Header