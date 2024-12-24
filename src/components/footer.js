import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <footer className='py-4 bg-secondary text-center text-white font-text-font'>&copy; Britvasan {year.getFullYear()}</footer>
  )
}

export default Footer