import Image from 'next/image'
import React from 'react'
import { Dancing_Script } from "next/font/google"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useAppContext } from '../context';

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const Welcome = () => {

    const { setIsShowing } = useAppContext()

  return (
    <div className='w-screen h-screen bg-black flex flex-col items-center justify-center gap-2 p-5'>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1}}>
            <Image height={200} width={200} src={"/pic.jpeg"} alt='pic' className='rounded-full'/>
        </motion.div>
        <h1 className={`${dancingScript.variable} name text-3xl font-extrabold -rotate-[5deg] m-[30px] text-center`}>- David Joao Sandoval -</h1>
        <p className='text-center'>Software Developer / Full Stack Developer</p>
        <button className='black-button' onClick={() => setIsShowing(false)}>Find Out More</button>
        <div className='flex flex-row gap-3'>
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Link href={"https://www.linkedin.com/in/davidjoaosandoval/"} target='_blank'> <FaLinkedin className='social-icon'/> </Link>
            </motion.button>

            <motion.button initial={{ scale: 0 }} animate={{ scale: 1}}>
                <Link href={"https://github.com/DavidJoao/"} target='_blank'> <FaGithub className='social-icon'/> </Link>
            </motion.button>

            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Link href={"https://www.instagram.com/david.jso/"} target='_blank'> <FaInstagram className='social-icon'/> </Link>
            </motion.button>
        </div>
    </div>
  )
}

export default Welcome