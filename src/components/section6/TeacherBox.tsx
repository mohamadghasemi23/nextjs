import React from 'react'
import teacher1 from "public/teacher1.png";
import teacher2 from "public/teacher2.png";
import teacher3 from "public/teacher3.png";
import teacher4 from "public/teacher4.png";
import Image from "next/image";

type Props = {}

export default function TeacherBox({}: Props) {
  return (
    <div> <div className=' flex flex-col flex-1  h-auto items-center justify-center  '>
    <div className='text-center'>
       <span className=' font-bold  text-4xl text-blue-900'> Our teachers</span>
        <h3 className='mt-10 text-center'>At Astanga Yoga Studio we explore a wide variety. student practice<br/>
        at their own pace with advice and sometimes adjustments given by the teacher. </h3>
    </div>
    <div className='mt-8 flex flex-1 flex-col  w-full items-center justify-center space-x-7   mb-4
    xl:flex-row  sm:space-y-6'>
       
        <div className='flex flex-col   h-auto w-72 items-center justify-start'>
            <div className=' rounded-full w-56 h-56'> <Image  className=' rounded-full '  
                src={teacher1}
                alt="Picture of the author"
                width={220} 
                height={220} 
              /></div>
            <div className='mt-7'><span className='font-bold text-center text-3xl '>Hamish Hendry </span></div>
            <div className='mt-7 text-center text-xl'><span> I starded yoga when i was<br/>eighteen as i couldnt touch<br/> my toes. </span></div>
        </div>
        <div className='flex flex-col   h-auto w-72 items-center justify-start'>
            <div className=' rounded-full w-56 h-56'> <Image  className=' rounded-full '  
                src={teacher2}
                alt="Picture of the author"
                width={220} 
                height={220} 
              /></div>
            <div className='mt-7'><span className='font-bold text-center text-3xl '>Louise Newton </span></div>
            <div className='mt-7 text-center text-xl'><span> I stumbled upon Astanga<br/>yoga in 1999 and soon<br/> found Hamish. </span></div>
        </div>
        <div className='flex flex-col   h-auto w-72 items-center justify-start'>
            <div className=' rounded-full w-56 h-56'> <Image  className=' rounded-full '  
                src={teacher3}
                alt="Picture of the author"
                width={220} 
                height={220} 
              /></div>
            <div className='mt-7'><span className='font-bold text-center text-3xl '>Lauren Munday </span></div>
            <div className='mt-7 text-center text-xl'><span> My yoga story started in my<br/>early twenties at gym yoga<br/> classes </span></div>
        </div>
        <div className='flex flex-col   h-full w-72 items-center justify-start'>
            <div className=' rounded-full w-56 h-56'> <Image  className=' rounded-full '  
                src={teacher4}
                alt="Picture of the author"
                width={220} 
                height={220} 
              /></div>
            <div className='mt-7'><span className='font-bold text-center text-3xl '>Tom Norrington </span></div>
            <div className='mt-7 text-center text-xl'><span> I started going to Astanga<br/>as a beginner in 2007<br/>toy  </span></div>
        </div>


        
    </div>
</div></div>
  )
}