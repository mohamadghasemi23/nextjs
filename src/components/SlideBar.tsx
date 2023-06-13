
import React from 'react'
import slidebar1 from "public/slidebar1.png";
import slidebar2 from "public/slidebar2.png";
import slidebar3 from "public/slidebar3.png";
import Image from "next/image";

type Props = {}

export default function SlideBar({}: Props) {
  return (
    <div className='flex lg:flex-row sm:flex-col sm:space-y-4  h-auto items-center justify-center space-x-10'>
        
        <div className=' w-80 h-96  rounded-[3.5rem] bg-slate-400/5 '>
        <div className=' flex flex-col flex-1 items-center justify-center w-80 h-96  rounded-[3.5rem] '>
            <div className=' flex flex-1    justify-center w-full'>
            <Image  className='mt-10'  
                src={slidebar1}
                alt="Picture of the author"
                width={120} 
                height={100} 
              />
              </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='font-bold text-2xl -mt-7'>Posture correction</h3>
            </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='-mt-12'>The back will become straighter,<br/>posture will improve. The chest will<br/>straighten the shoulder well,the<br/>stoop will go away</h3>
            </div>
            </div>
        </div>
        <div className=' flex flex-col flex-1 items-center justify-center w-80 h-96 bg-slate-400/5 rounded-[3.5rem] '>
            <div className=' flex flex-1    justify-center w-full'>
            <Image  className='mt-10'  
                src={slidebar2}
                alt="Picture of the author"
                width={120} 
                height={100} 
              />
              </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='font-bold text-2xl -mt-7'>Posture correction</h3>
            </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='-mt-12'>The back will become straighter,<br/>posture will improve. The chest will<br/>straighten the shoulder well,the<br/>stoop will go away</h3>
            </div>
            </div>
        <div className=' w-80 h-96  rounded-[3.5rem] '><div className=' flex flex-col flex-1 items-center justify-center w-80 h-96 bg-slate-400/5 rounded-[3.5rem] '>
            <div className=' flex flex-1    justify-center w-full'>
            <Image  className='mt-14'  
                src={slidebar3}
                alt="Picture of the author"
                width={120} 
                height={100} 
              />
              </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='font-bold text-2xl -mt-7'>Posture correction</h3>
            </div>
            <div className='flex flex-1  items-center justify-center w-full text-center'>
                <h3 className='-mt-12'>The back will become straighter,<br/>posture will improve. The chest will<br/>straighten the shoulder well,the<br/>stoop will go away</h3>
            </div>
            </div></div>


    </div>
  )
}