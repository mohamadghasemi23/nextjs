'use client'
import React from 'react'
import LoginBox from './LoginBox'
import Logo from './Logo'
import Menu from './Menu'
import Rightbox from './Rightbox'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='shadow-lg border h-16 items-center flex flex-row justify-between
    hover:bg-amber-500'>
    <Logo/>
    <Menu/>
    <LoginBox/>
    <Rightbox title="منوی سمت راست"  number="55"  />
    
    </div>
  )
}