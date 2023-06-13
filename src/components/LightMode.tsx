'use client'
import React, { useState } from 'react'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
type Props = {width:string,height:string,mode:string}

export default function LightMode({width,height,mode}: Props) {


    const [light, setlight] = useState(false)
  return (

   // w-[${width}px] h-[${height}px]
    <div>
        <div onClick={()=>{ setlight(!light)}} className={`relative flex flex-row p-1 ${light ?'justify-end' :'justify-start' } m-4 items-center float-right ${width} h-10 bg-gray-500/40 rounded-[20px]  `}>
        <div className='absolute   top-0 w-full z-10 h-full'>
         
         <div className=' justify-center items-center  h-full flex flex-row flex-1'>
          <div className='flex-1  flex justify-center items-center' ><SunIcon  className={`h-7 w-7 ${!light?'text-blue-400':'text-dark-400'} `} /></div>
          <div className='flex-1  flex justify-center items-center' ><MoonIcon  className={`h-5 w-5 ${light?'text-blue-400':'text-dark-400'} `} /></div>
          </div>

        </div>
        <div onClick={()=>{ setlight(!light)}}  className=' z-20 flex-col  w-1/2 h-full  m-0 bg-slate-100/30   rounded-[17px]   '></div>
        {/* <div className='-pt-0'><SunIcon className="h-6 w-6 text-blue-500 " /></div>
        <div><MoonIcon className="h-5 w-5 " /></div> */}
        </div>
        </div>
  )
}