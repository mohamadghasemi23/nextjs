'use client'
import React, { useState } from 'react'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
type Props = {}

export default function LightMode({}: Props) {


    const [light, setlight] = useState(false)
  return (

    
    <div>
        <div className='relative flex flex-col p-7 space-y-5 justify-center float-right w-20 h-28 bg-gray-500/40 rounded-2xl shadow-lg '>
        <div  className='absolute flex-col w-[73px] h-12   bg-slate-100/50 top-2 right-1 rounded-2xl  '></div>
        <div className='-pt-0'><SunIcon className="h-6 w-6 text-blue-500 " /></div>
        <div><MoonIcon className="h-5 w-5 " /></div>
        </div>
        </div>
  )
}