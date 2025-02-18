"use client"
import React, { useRef } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import {
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoReact,
	IoLogoCss3,
	IoLogoHtml5,
	IoLogoVercel,
} from "react-icons/io5"
import { FaGit, FaAws, FaSalesforce } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import Project from "../components/general/Project"
import { projects } from "@/lib/projects"

const page = () => {
	const logos = [
		"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python
		"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript
		"https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp", // MongoDB
		"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", // PostgreSQL
		"https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png", // AWS
		"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", // CSS3
		"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML5
	]

	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const ref3 = useRef(null)
	const ref4 = useRef(null)

	const isInView1 = useInView(ref1, { once: true })
	const isInView2 = useInView(ref2, { once: true })
	const isInView3 = useInView(ref3, { once: true })
	const isInView4 = useInView(ref4, { once: true })

	return (
		<AnimatePresence>
			<motion.div
				key="box"
				initial={{ opacity: 0, y: -10, x: -10 }}
				animate={{ opacity: 1, y: 0, x: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.7 }}>
				<div className="h-auto lg:min-h-screen pt-[4rem] bg-gradient-to-tr from-black to-neutral-900 flex flex-col items-center pb-[4rem] lg:pb-[2rem]">
					<div className="p-3 text-center">
						<h1 className="font-black text-[35px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
							Capturing Ideas
						</h1>
						<h1 className="font-black text-[35px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
							Delivering Results
						</h1>
						<p className="text-neutral-300 text-sm">
							Most recent projects of my portfolio:
						</p>
					</div>

					<div className="w-full h-auto lg:h-full grid grid-cols-1 lg:grid-cols-3 gap-5 p-3">

						<Project project={projects.booth}/>
						<Project project={projects.intern}/>
						<Project project={projects.scenariogpt} />

					</div>

					<div className="relative w-full overflow-hidden bg-neutral-800 p-1 flex flex-col items-center justify-center">
						<div className="w-full flex items-center">
							<motion.div
								className="flex w-max space-x-10 flex items-center justify-center p-3"
								initial={{ x: 0 }}
								animate={{ x: "-50%" }}
								transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
								{[...logos, ...logos, ...logos].map((src, index) => (
									<img
										key={index}
										src={src}
										alt={`Logo ${index}`}
										className="w-[45px] h-[45px] object-contain"
									/>
								))}
							</motion.div>
						</div>
					</div>

					<div className="w-full h-auto lg:h-full flex flex-col items-center justify-center p-3">
						<h1 className="font-black text-[35px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
							Services
						</h1>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.3,
									},
								},
								hidden: {},
							}}
							className="w-full p-3 h-auto grid grid-cols-1 lg:grid-cols-4 items-center gap-5">
							<motion.div
								ref={ref1}
								initial={{ opacity: 0, y: 50 }}
								animate={isInView1 ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
									Web Development
								</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Full Stack Development
										</span>{" "}
										– Building scalable web applications using JavaScript
										(React.js, Next.js, Node.js) and Python (Django, FastAPI,
										Flask).
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Frontend Development
										</span>{" "}
										– Creating responsive, high-performance UI/UX with React,
										Next.js, and Tailwind CSS.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Backend Development
										</span>{" "}
										- Developing APIs and backend solutions using Node.js,
										Express.js, and Python frameworks.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Real-time Applications
										</span>{" "}
										- Implementing WebSockets (Socket.IO) for live updates and
										interactions.
									</li>
								</ol>
							</motion.div>

							<motion.div
								ref={ref2}
								initial={{ opacity: 0, y: 50 }}
								animate={isInView2 ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
									Cloud & Infrastructure
								</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Cloud Deployment
										</span>{" "}
										– Deploying and managing web applications on Vercel, AWS,
										and Render.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Storage Optimization
										</span>{" "}
										– Integrating AWS S3 for efficient and cost-effective
										image/document storage.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Serverless Architecture
										</span>{" "}
										– Setting up cloud-based functions and services for
										scalability and performance.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Monitoring & Alerts
										</span>{" "}
										- Configuring AWS CloudWatch alarms to track and manage
										cloud resources.
									</li>
								</ol>
							</motion.div>

							<motion.div
								ref={ref3}
								initial={{ opacity: 0, y: 50 }}
								animate={isInView3 ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
									Database Management
								</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Data Security & Authentication
										</span>{" "}
										–Implementing secure authentication with JWT, OAuth,
										password encryption, and access control.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											PostgreSQL & MongoDB
										</span>{" "}
										– Designing, optimizing, and maintaining relational and
										NoSQL databases.
									</li>
								</ol>
							</motion.div>

							<motion.div
								ref={ref4}
								initial={{ opacity: 0, y: 50 }}
								animate={isInView4 ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
									Automation & Process Optimization
								</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Cost Reduction Strategies
										</span>{" "}
										– Minimizing third-party dependencies by developing in-house
										solutions for document management, notifications, and data
										handling.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Custom Web Solutions
										</span>{" "}
										– Developing tailored applications to enhance business
										operations and user experiences.
									</li>
									<li className="flex flex-col text-neutral-300 text-sm">
										<span className="font-bold text-regular text-white">
											Performance Optimization
										</span>{" "}
										– Enhancing website performance with lazy loading, dynamic
										components, and efficient database queries.
									</li>
								</ol>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default page
