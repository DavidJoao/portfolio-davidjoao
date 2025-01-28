'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAppContext } from '../context'

const Navbar = () => {

  const { isShowing, currentTab, setCurrentTab } = useAppContext()

  if (isShowing) return <></>
  
  return (
    <div className='p-3 md:pr-10 flex justify-center md:justify-start flex-row-reverse gap-5 border text-xs md:text-base fixed w-full bg-black'>
        <Link href={'/contact'} onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          }} className={currentTab === "Contact" ? "nav-link selected-nav-link" : "nav-link text-white"}>Contact</Link>
        <Link href={'/projects'} onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          }} className={currentTab === "Projects" ? "nav-link selected-nav-link" : "nav-link text-white"}>Projects</Link>
        <Link href={'/about'} onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          }} className={currentTab === "About" ? "nav-link selected-nav-link" : "nav-link text-white"}>About</Link>
        <Link href={'/'} onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          }} className={currentTab === "Home" ? "nav-link selected-nav-link" : "nav-link text-white"}>Home</Link>
    </div>
  )
}

export default Navbar