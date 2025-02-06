import React from 'react'

const OldWelcome = () => {
  return (
    <div className='w-screen h-screen bg-black flex flex-col items-center justify-start sm:justify-center gap-2 pt-10'>
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1}}>
        <Image height={200} width={200} src={"/pic.jpeg"} alt='pic' className='rounded-full border-[5px] border-white'/>
    </motion.div>
    <h1 className={`${dancingScript.variable} name text-3xl font-extrabold -rotate-[5deg] p-[30px] text-center`}>- David Joao Sandoval -</h1>
    <p className='text-center'>Software Engineer / Full Stack Developer</p>
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

export default OldWelcome