"use client";

import React from 'react'
import logoImage from "../assets/images/logo-w.png"
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "https://web.spark4speech.com/support", label: "Support", external: true },
  ];

  return (
    <header className='bg-black'>
      <div className='container bg-black'>
        <div className="flex min-h-24 items-center justify-between">
          <Link href="/" aria-label="SPARK home">
            <Image src={logoImage} alt="SPARK" className='h-[92px] w-[92px]'/>
          </Link>
          <nav aria-label="Main navigation" className='hidden sm:flex gap-6 items-center'>
            {links.map((link) => <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className='text-white/60 hover:text-white transition'>{link.label}</Link>)}
            <Link className='bg-white text-black py-2 px-4 rounded-lg hover:bg-orange-100 transition' href="https://web.spark4speech.com">Open SPARK</Link>
          </nav>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="sm:hidden min-h-12 min-w-12 grid place-items-center rounded-lg border border-white/20 text-white">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav aria-label="Mobile navigation" className="sm:hidden flex flex-col gap-2 pb-5">{links.map((link) => <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white">{link.label}</Link>)}<Link href="https://web.spark4speech.com" className="rounded-lg bg-white px-4 py-3 text-center font-medium text-black">Open SPARK</Link></nav>}
      </div>
    </header>
  )
}
