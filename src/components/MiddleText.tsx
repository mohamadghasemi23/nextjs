import React from 'react'
import ww from "public/ww.png";
import Image from "next/image";

type Props = {}

export default function MiddleText({}: Props) {
  return (
    <div className=' flex flex-row flex-1 h-full'>
        <div className='  hidden lg:block items-center justify-center '>
            <Image  className=' mt-10 2xl:ml-44 '  
                src={ww}
                alt="Picture of the author"
                width={500} 
                height={500} 
              /></div>
        <div className='flex-1 flex  flex-col  '>
            <div className='flex flex-1  items-center justify-start md:mt-10 '>
                <h3 className='font-bold text-3xl'>Yoga studio Astanga</h3>
            </div>
            <div className='flex flex-col flex-1  sm:mt-7'>
            <div className='flex flex-1 '>
                <h3>We can an astanga yoga school that tries to teach in a traditional way so students<br/>
                can progress at their own pace.We offer quality,compassionate teaching.We try to<br/>
                ensure everyone feels welcome as we feel the idea of a supportive community is very<br/>
                important .We usually work with hands-on adjustments:if you feel uncomfortable<br/>
                with this,just let us know:noquestions or judgment.</h3></div>
                <div className='flex flex-1  mt-10'>
                <h3>Our shala is named 'Dharma Shala' inspired by the story of an ancient Indian king<br/>
                called Ashoka who bulit many 'dharma shalas' to support wandering yogis.We hope<br/>
                our dharma shala will be a suportive place for you.</h3>
                </div>
            </div>
            <div className='flex flex-1 flex-row mt-8 '>
                <div className='flex flex-1 flex-col '>
                    <div><h3 className='font-bold text-4xl text-blue-800'>800 ㎡</h3></div>
                    <div className='mt-4'><h3> study spaces</h3></div>
                    </div>
                <div className='flex flex-1 flex-col'>
                  <div><h3 className='font-bold text-4xl text-blue-800'>17 years</h3></div>
                    <div className='mt-4'><h3> Working at a<br/>high level</h3></div>
                    </div>
                <div className='flex flex-1 flex-col '>
                   <div> <h3 className='font-bold text-4xl text-blue-800'>15 min</h3></div>
                    <div className='mt-4'><h3> Walk from<br/>Euston Square</h3></div>
                    </div>
            </div>
        </div>
    </div>
  )
}