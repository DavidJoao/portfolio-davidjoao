'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAppContext } from '../context'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

  if (pathname === "/") return <></>

  console.log()
  
  return (
    <div className='h-[4rem] p-3 md:pr-10 fixed flex md:flex justify-center md:justify-start flex-row-reverse gap-5 text-md md:text-base w-full bg-black/80 z-[100]'>
        <Link href={"/Contact"} className={pathname === "/Contact" ? "nav-link selected-nav-link" : "nav-link"}>Contact</Link>
        <Link href={"/Projects"} className={pathname === "/Projects" ? "nav-link selected-nav-link" : "nav-link"}>Projects</Link>
        <Link href={"/Home"} className={pathname === "/Home" ? "nav-link selected-nav-link" : "nav-link"}>Home</Link>
    </div>
  )
}

export default Navbar