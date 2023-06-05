import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
type Props = {}

export default function page({}: Props) {
  return (
    <div className='main'>
    <div className='relative flex flex-row space-x-2   md:space-x-7  h-24 shadow-lg border items-center justify-center'>
        <div className='absolute  left-5'>Logo</div>
        <div className='hidden sm:block'> About us</div>
        <div className='hidden sm:block'>Practice</div>
        <div className='hidden sm:block'>Our teachers</div>
        <div className='hidden sm:block'>Gallery</div>
        <div className='hidden sm:block'>Contact us</div>
        <div className='absolute  right-12'>Login</div>
        <div className='absolute  sm:hidden  right-5'> <Bars3Icon className="h-6 w-6 " /></div>
        <div className=""><img src="./right.png" alt="react logo" style={{ width: '400px', }}/></div>
        </div>


    <div>part1</div>
    <div>part2</div>
    <div>part3</div>
    
    </div>
  )
}