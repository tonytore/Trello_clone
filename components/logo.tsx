"use client"

import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'

export default function Logo() {
  return (
    <div className='hidden items-center md:flex gap-1'>
      <Image
      src={logo}
      alt='logo'
      />
      <h1>Taskify</h1>
    </div>
  )
}
