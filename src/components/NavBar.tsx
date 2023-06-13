'use client'
import React from 'react'
import Login from './navbar/Login'
import Logo from './navbar/Logo'
import MainMenu from './navbar/MainMenu'


type Props = {}

export default function NavBar({}: Props) {
  return (
    
    <div className='relative flex flex-row mx-8   h-24 z-20  items-center justify-center'>

        <Logo/>
        <MainMenu/>
        <Login/>
        </div>


 
    
  )
}