import React from 'react'

type Props = {}

export default function MainMenu({}: Props) {
  return (
      <div className=' flex flex-row flex-1 justify-center space-x-2 lg:space-x-7 lg:mr-56 xl:mr-96 xl:space-x-12 '>

        <div className='hidden sm:block'> About us</div>
        <div className='hidden sm:block'>Practice</div>
        <div className='hidden sm:block'>Our teachers</div>
        <div className='hidden sm:block'>Gallery</div>
        <div className='hidden sm:block'>Contact us</div>

        </div>
  )
}