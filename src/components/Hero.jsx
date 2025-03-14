import React from 'react'
import hero from '../assets/heroassets/hero.jpg'
const Hero = () => {
  return (
    <div className=' flex justify-center items-center w-full h-screen relative'>
        <div className='w-1/2'>
            <h1 className='md:text-8xl font-Poppins font-extralight leading-28 tracking-[-9px]'>Building businesses is our <span className='font-light'>psyche.</span></h1>
        </div>
        <div className='w-1/2 overflow-hidden'>
            <img className='w-full h-auto object-cover rounded-md' src={hero} alt="bokka" />
        </div>
    </div>
  )
}

export default Hero