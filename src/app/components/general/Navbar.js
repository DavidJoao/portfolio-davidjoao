'use client'
import Link from 'next/link'
import React from 'react'
import { useAppContext } from '../context'

const Navbar = () => {

  const { isShowing } = useAppContext()

  if (isShowing) return <></>
  return (
    <div className='border p-2 flex flex-row-reverse gap-2'>
        <Link href={'/'}></Link>
        <Link href={'/'}>Contact</Link>
        <Link href={'/'}>Projects</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Home</Link>
    </div>
  )
}

export default Navbar