'use client'
import React, { useState } from 'react'

type Props = {title:string,number:string}

export default function Rightbox({title,number}: Props) {
    const [showrightbox, setshowrightbox] = useState(false)
  return (

    <>
    {<div onClick={()=>{setshowrightbox(!showrightbox)}}   className='lg:hidden'>...
    {showrightbox&&<div className='text-right right-1 w-64 h-96 border p-8 absolute shadow-lg top-16'>{title}{number}</div>}
    </div>}

    </>
  )
}