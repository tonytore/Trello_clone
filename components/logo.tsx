

import Image from 'next/image'
import React from 'react'
import logo from '../public/fonts/logo.svg'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
    href='/' 
    className='hidden hover:text-neutral-400 items-center md:flex gap-1 font-bold text-xl'>
      <Image
      src={logo}
      alt='logo'
      width={35}
      height={35}
      />
      <h1>Taskify</h1>
    </Link>
  )
}
