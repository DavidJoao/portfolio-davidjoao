'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAppContext } from '../context'
import ContactPage from '../pages/ContactPage'
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'
import InitialPage from '../pages/InitialPage'

const Navbar = () => {

  const { isShowing, currentTab, setCurrentTab, setPage } = useAppContext()

  if (isShowing) return <></>
  
  return (
    <div className='h-[4rem] p-3 md:pr-10 fixed flex md:flex justify-center md:justify-start flex-row-reverse gap-5 text-xs md:text-base w-full bg-black/60 z-[100]'>
        <button onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          setPage(<ContactPage />)
          }} className={currentTab === "Contact" ? "nav-link selected-nav-link" : "nav-link text-white"}>Contact</button>
        <button onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          setPage(<ProjectsPage />)
          }} className={currentTab === "Projects" ? "nav-link selected-nav-link" : "nav-link text-white"}>Projects</button>
        <button onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          setPage(<AboutPage />)
          }} className={currentTab === "About" ? "nav-link selected-nav-link" : "nav-link text-white"}>About</button>
        <button onClick={(e) => {
          setCurrentTab(e.target.innerHTML)
          setPage(<InitialPage />)
          }} className={currentTab === "Home" ? "nav-link selected-nav-link" : "nav-link text-white"}>Home</button>
    </div>
  )
}

export default Navbar