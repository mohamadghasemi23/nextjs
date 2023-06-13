import React from 'react'
import { Battery100Icon } from '@heroicons/react/24/solid'

type Props = {}

export default function MainText({}: Props) {
  return (
    <div className=' relative flex flex-col flex-1   z-30   '  >
      
      <div className='flex flex-row ml-32   lg:ml-44  '>
      <Battery100Icon className="h-6 w-6 " />
       <h2 className='font-semibold text-lg'>astanga</h2></div>
      <div className='flex flex-row ml-32   lg:ml-44 
      mt-6 ' ><h3 className='font-bold text-lg'>Yoga - a philosophy<br/>of life, the creation of <br/>a healthy body and mind</h3></div>
      <div className='flex flex-row ml-32   lg:ml-44   mt-6' >
        <h3 className=''>
        Astanga - we teach yoga in a traditional method<br/>
        Known as 'Mysore self-practice',which orginated in <br/>
        Mysore,South India </h3></div>
        <div className=' flex flex-row ml-32   lg:ml-44 bg-blue-700  text-white  justify-center items-center
         w-44 h-12 rounded-3xl mt-9 ' > Sign up</div>
      
      </div>
  )
}