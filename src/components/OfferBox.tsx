'use client'
import React from 'react'
import { Battery100Icon } from '@heroicons/react/24/solid'
import Avatar, { genConfig } from 'react-nice-avatar'
import { motion } from "framer-motion"

type Props = {}

export default function OfferBox({}: Props) {
  return (
      <>
    <div className='flex flex-col bg-slate-300 w-screen h-screen  border items-center '>
    <motion.div whileHover={{
    scale: 1.5,
    transition: { duration: 1 },}} className=' w-64 h-96 p-3 mt-44   shadow-2xl rounded-3xl
   bg-gradient-to-b from-white via-purple-200 to-blue-100'>
       <div className=' flex flex-col    -mt-2 text-right items-end'>
       <div> <Battery100Icon className="h-6 w-6 " /></div>
       </div>
       <div className=' flex flex-col text-center items-center '>
         <div className='w-28 h-10 p-1 pr-3 rounded-lg border-dashed border-[3px]  border-dashed-800 	
         font-bold'>🔥 Offer</div>
       </div>
       <div className=' text-center'>
       <div className='mt-5 font-bold  '>Create your own profile<br/> in avatar bilder platform <br/>without login process.</div>
       </div>
       <div className='flex flex-row  justify-center mt-6'>
         <motion.div    animate={{ x: [-50,0] }} className='-mr-5 bg-white rounded-full p-1'><Avatar className="w-16 h-16"  /></motion.div>
         <motion.div animate={{ x:  [-120,0] }} className='-mr-5 bg-white rounded-full p-1'><Avatar className="w-16 h-16"  /></motion.div>
         <motion.div animate={{ x: [-190,0]}} className=' -mr-5 bg-white rounded-full p-1'><Avatar className="w-16 h-16"  /></motion.div>
       </div>
       <div className=' flex flex-row justify-center mt-8'>
         <div className='shadow-md bg-blue-900 rounded-lg w-32 h-10 p-1 text-center font-semibold text-cyan-50'>Explore Now</div>
       </div>
       </motion.div>
    </div>

    {/* //theird commit */}
    {/* //theird commit */}
    {/* //theird commit */}

    </>
  )
}