'use client'
import React from "react"
import { motion } from 'framer-motion'
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaGithub, FaArrowRight } from "react-icons/fa"

const InitialPage = () => {

	return (
		<div className="m-height flex flex-col lg:flex-row bg-black">
			<div className="flex flex-col items-center h-auto lg:h-full w-full lg:w-2/3 p-3 relative shadow-[15px_1px_26px_-4px_rgba(0,_0,_0,_0.8)]">
				<img src="pcmemoji.png" className="flex lg:hidden rounded-full border shadow-[inset_0px_4px_74px_36px_rgba(100,_100,_111,_0.2)]
" />
				<div
					className="w-full h-full z-5 hidden lg:flex"
					style={{
						background: "url('pcmemoji.png')",
						backgroundPosition: "right",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						opacity: "0.5",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
				<div className="w-full h-full flex flex-col items-left lg:left-[100px] justify-start lg:justify-center relative z-10">
					<div className="w-full lg:w-[550px] p-2 flex flex-col items-left text-center lg:text-left">
						<h1 className="font-black text-[35px] lg:text-[45px]">
							I&#39;m <span className="text-blue-400 lg:text-[50px]">David</span>, a
						</h1>
						<h1 className="font-black text-[35px] lg:text-[45px]">Software Engineer</h1>
						<p className="lg:w-[300px] mt-4">
							{" "}
							My goal is to grow professionally while delivering high-quality,
							optimized web applications that meet and exceed expectations.{" "}
						</p>
					</div>
				</div>
			</div>

			<div className="h-auto lg:h-full w-full lg:w-1/3 p-3 bg-neutral-800 flex flex-col items-center justify-center gap-5 shadow-[inset_-3px_33px_26px_-26px_rgba(0,_0,_0,_0.8)]">
				<div className="flex flex-col items-left gap-2 min-w-[200px] w-full max-w-[270px] p-3">
					<div className="mt-4">
						<h2 className="font-black text-lg">ABOUT ME</h2>
						<p className="text-xs text-neutral-400">
							I'm a Software Engineer specializing in web development, leveraging my
							skills to build and deploy full-stack web applications. I work with
							technologies like JavaScript, React, Next.js, Node.js, Python,
							PostgreSQL, MongoDB, MySQL, Tailwind CSS, React Bootstrap, and Amazon
							Web Services to create efficient, scalable, and user-friendly solutions.
						</p>
						<Link href={"/Contact"} className="nav-button">CONTACT ME <FaArrowRight/> </Link>
					</div>
				</div>

				<div className="flex flex-col items-left gap-2 min-w-[200px] w-full max-w-[270px] p-3">
					<div>
						<h2 className="font-black text-lg"> MY WORK </h2>
						<p className="text-xs text-neutral-400">
							Take a moment to explore some of the most recent projects I’ve worked on
							and brought to life. From innovative web applications to unique
							solutions, these projects showcase my skills and creativity in action!
						</p>
						<Link href={"/Projects"} className="nav-button" >BROWSE PROJECTS <FaArrowRight/> </Link>
					</div>
				</div>

				<div className="min-w-[200px] w-full max-w-[270px] p-3 pb-[50px]">
					<div className="flex flex-col gap-2">
						<h2 className="font-black text-lg">Follow Me</h2>
						<div className="flex flex-row gap-3">
							<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
								<Link
									href={"https://www.linkedin.com/in/davidjoaosandoval/"}
									target="_blank">
									{" "}
									<FaLinkedin className="social-icon" />{" "}
								</Link>
							</motion.button>

							<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
								<Link href={"https://github.com/DavidJoao/"} target="_blank">
									{" "}
									<FaGithub className="social-icon" />{" "}
								</Link>
							</motion.button>

							<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
								<Link href={"https://www.instagram.com/david.jso/"} target="_blank">
									{" "}
									<FaInstagram className="social-icon" />{" "}
								</Link>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InitialPage
