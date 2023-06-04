import React, { useState } from 'react'

type Props = {}

export default function LoginBox({}: Props) {
    const [showbox, setshowbox] = useState(false)
  return (
      <>
    {<div onClick={()=>{setshowbox(!showbox)}} className='mr-5 hover:bg-yellow-300 rounded-full flex flex-row '>login
    {showbox&& <div className='border shadow-lg rounded-md p-3 right-10 top-16 w-32 h-64 absolute right-64  '>box</div>}
     </div>}
     </>
  )
}