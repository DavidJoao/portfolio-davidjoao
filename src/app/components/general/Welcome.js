import Image from 'next/image'
import React from 'react'
import { Dancing_Script } from "next/font/google"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from '../context';

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const Welcome = () => {

    const { setIsShowing, isShowing } = useAppContext()

  return (
    <AnimatePresence mode='wait'>
        {isShowing &&
        <motion.div key="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <div className='w-screen h-screen bg-black flex flex-col items-center justify-start sm:justify-center gap-2 pt-10'>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1}}>
                <Image height={200} width={200} src={"/pic.jpeg"} alt='pic' className='rounded-full border border-white'/>
            </motion.div>
            <h1 className={`${dancingScript.variable} name text-3xl font-extrabold -rotate-[5deg] p-[30px] text-center`}>- David Joao Sandoval -</h1>
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
        </motion.div> 
        }
    </AnimatePresence>
  )
}

export default Welcome