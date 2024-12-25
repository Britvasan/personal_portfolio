import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <div className='py-4 bg-secondary text-center text-white font-text-font'>&copy; Britvasan {year.getFullYear()}</div>
  )
}

export default Footer

