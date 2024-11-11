import React from 'react'
import logoImage from "../assets/images/logo-w.png"
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container bg-black'>
        <div className="flex items-center justify-between">
          <Image src={logoImage} alt="Logo" className='h-[120px] w-[120px] relative'/>
          <nav className='hidden sm:flex gap-6 items-center'>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Our Story</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</Link>
            <Link href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</Link>
            <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

