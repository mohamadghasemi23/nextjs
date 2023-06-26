import React from 'react'
import centertext from "public/centertext.png";
import Image from "next/image";

type Props = {}

export default function CenterText({}: Props) {
  return (
    <div className=' flex flex-row flex-1 h-full '>
       
        <div className='flex-1 flex basis-1/2  flex-col     '>
            <div className='flex flex-1 xl:-ml-36    items-center justify-center md:mt-10 '>
                <h3 className='font-bold text-3xl subpixel-antialiased'><span className='text-blue-900'>Mysore</span> self-practice</h3>
            </div>
            <div className='flex flex-col flex-1 xl:ml-44  xl:-mt-11 text-start items-center  justify-center sm:mt-7 '>
            <div className='flex flex-1 '>
                <h3>We can an astanga yoga school that tries to teach in a traditional way so students<br/>
                can progress at their own pace.We offer quality,compassionate teaching.We try to<br/>
                ensure everyone feels welcome as we feel the idea of a supportive community is very<br/>
                important .We usually work with hands-on adjustments:if you feel uncomfortable<br/>
                with this,just let us know:noquestions or judgment.</h3></div>
                <div className='flex flex-1 mr-2  mt-10 '>
                <h3>Our shala is named 'Dharma Shala' inspired by the story of an ancient Indian king<br/>
                called Ashoka who bulit many 'dharma shalas' to support wandering yogis.We hope<br/>
                our dharma shala will be a suportive place for you.</h3>
                </div>
            </div>
            <div className='flex flex-1 flex-row mt-9   items-start justify-center xl:ml-64    sm:ml-5 
                           '>
               
                <div className='flex flex-1 flex-col'>
                  <div><h3 className='font-bold text-4xl antialiased text-blue-900 '>Breath</h3></div>
                    <div className='mt-4'><h3> Eeach breath is soft,precise<br/>and perfectly steady</h3></div>
                    </div>
                <div className='flex flex-1 flex-col items-start    '>
                   <div> <h3 className='font-bold text-4xl antialiased text-blue-900'>practice</h3></div>
                    <div className='mt-4 '><h3> Strenth,stamina and<br/>sweat are unique aspects</h3></div>
                    </div>
            </div>
        </div>
        <div className='flex-1  hidden lg:block basis-1/4   '>
            <Image  className=' mt-10 -ml-7   '  
                src={centertext}
                alt="Picture of the author"
                width={500} 
                height={500} 
              /></div>
    </div>
  )
}