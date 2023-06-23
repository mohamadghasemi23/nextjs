import MainText from '@/components/MainText'
import MiddleText from '@/components/MiddleText'
import CarouselBar from '@/components/section4/CarouselBar'
import SlideBar from '@/components/SlideBar'
import UnderText from '@/components/UnderText'
import React from 'react'
type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex flex-1 flex-col items-start justify-start '>
      <div className=' w-full'> <MainText/></div>

      <div className='   flex flex-1 w-full justify-center items-center mt-32'> <UnderText/></div>
      <div className='  w-full  '>< SlideBar/></div>
      <div className='   flex flex-1  w-full justify-center items-center   mt-16 '>< MiddleText/></div>
      <div className='   flex flex-1  w-full justify-center items-center   mt-16 '><CarouselBar/></div>
     
     

    </div>
  )
}