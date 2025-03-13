import React from 'react'
import bg from '../assets/bgassets/bg.mp4'
const Ready = () => {
  return (
    <div className=' flex justify-center items-centerw-full h-screen'>
        <video className='rounded-lg' src={bg} autoPlay muted loop></video>
    </div>
  )
}

export default Ready