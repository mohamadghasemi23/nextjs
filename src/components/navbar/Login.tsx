import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

export default function Login({}: Props) {
  return (
      
      <div className='flex flex-row  '>
    <div className=''>Login</div>
    <div className='  sm:hidden '> 
    <Bars3Icon className="h-6 w-6  " /></div>
    </div>
    
  )
}