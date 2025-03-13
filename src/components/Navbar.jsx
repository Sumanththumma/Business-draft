import React from 'react'
import Logonav from '../assets/navassets/logonav'
const Navbar = () => {
  return (
    <div className='flex justify-between md:px-10 md:py-4'>
       <Logonav />
       <ul className='font-Poppins flex md:gap-5' id='navlinks'>
            <li>Learn more</li>
            <li>Contact</li>
            <li className='font-bold font-Poppins'>Follow</li>
       </ul>
    </div>

  )
}

export default Navbar