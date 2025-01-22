import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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