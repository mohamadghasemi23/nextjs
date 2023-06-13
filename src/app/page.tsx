'use client'
import LightMode from '@/components/LightMode'
import NavBar from '@/components/NavBar'
import OfferBox from '@/components/OfferBox'

export default function Home() {
  return (
    <>
      <img className='w-12 h-12' src='../images/img.jpg'></img> 
    <NavBar/>
    <LightMode width="w-[400px]"  height="11"  mode="vertical" />
    <OfferBox/>
   
    </>
    
  )
}
