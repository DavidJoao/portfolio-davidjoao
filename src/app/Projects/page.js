"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoLogoPython, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoCss3, IoLogoHtml5, IoLogoVercel } from "react-icons/io5"
import { FaGit, FaAws, FaSalesforce } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si"

const page = () => {
	return (
		<AnimatePresence>
			<motion.div
				key="box"
				initial={{ opacity: 0, y: -10, x: -10 }}
				animate={{ opacity: 1, y: 0, x: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.7 }}>
				<div className="h-auto lg:h-screen pt-[4rem] bg-gradient-to-tr from-black to-neutral-900 flex flex-col items-center">
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

					<div className="w-full h-auto lg:h-full flex flex-col lg:flex-row gap-3 p-3">
						<div className="border-[1px] border-neutral-600 w-full lg:w-1/2 rounded-lg bg-neutral-900 p-2 flex flex-col lg:flex-row">
							<div className="w-full lg:w-1/2 p-3 text-left">

								<div className="grid grid-cols-5 lg:flex lg:flex-row gap-2 text-xl m-4">
									<SiNextdotjs />
									<IoLogoReact />
									<SiTailwindcss />
									<SiMongodb />
									<IoLogoCss3 />
									<IoLogoJavascript />
									<IoLogoHtml5 />
									<IoLogoVercel />
									<IoLogoNodejs />
									<FaGit />
								</div>

								<h1 className="text-lg text-neutral-200 font-semibold">
									Booth Grading Employee Portal
								</h1>
								<p className="text-xs text-neutral-300">
									A custom portal web application designed to meet the unique
									needs of the company. The platform streamlines work processes,
									enhances communication, and boosts productivity by providing a
									centralized system for managing key resources.
								</p>
								<h1 className="text-lg text-neutral-200 font-semibold mt-2">
									Main Features:
								</h1>
								<ul className="list-disc list-inside text-xs text-neutral-300">
									<li>
										AWS CloudWatch Alarms to actively monitor and manage
										resource metrics.
									</li>
									<li>
										JWT authentication with encrypted passwords to protect user
										accounts, ensuring secure access to sensitive information
										and preventing unauthorized access to the application
									</li>
									<li>
										Real-time updates to 30+ employees and managers about
										important information regarding job sites, equipment, and
										daily reports, thus improving overall communication and
										collaboration.{" "}
									</li>
									<li>
										Generates a ready-to-print PDF from timesheets, daily
										reports, incident reports, absence request forms, and
										warnings, then sends it by email to the company.
									</li>
								</ul>
								<button className="nav-button mt-5">Full project</button>
							</div>

							<div
								className="border min-w-[200px] min-h-[300px] w-full lg:w-1/2 rounded-lg opacity-60"
								style={{
									background: "url('boothproject.png')",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}></div>
						</div>

						<div className="border-[1px] border-neutral-600 w-full lg:w-1/2 rounded-lg bg-neutral-900 p-2 flex flex-col lg:flex-row">
							<div className="w-full lg:w-1/2 p-3 text-left">

								<div className="grid grid-cols-5 lg:flex lg:flex-row gap-2 text-xl m-4">
									<SiNextdotjs />
									<IoLogoReact />
									<SiTailwindcss />
									<SiPostgresql />
									<IoLogoCss3 />
									<IoLogoJavascript />
									<IoLogoHtml5 />
									<IoLogoVercel />
									<IoLogoNodejs />
									<FaGit />
									<FaAws />
									<FaSalesforce />
								</div>

								<h1 className="text-lg text-neutral-200 font-semibold">
									Forms Web Application
								</h1>
								<p className="text-xs text-neutral-300">
								A dynamic form-building web application with authentication, real-time updates via WebSockets for questions, comments, and likes, and an admin panel for managing forms and users. 
								It integrates AWS services, Salesforce, and provides an API token for secure form data export, ensuring seamless collaboration and data management.
								</p>
								<h1 className="text-lg text-neutral-200 font-semibold mt-2">
									Main Features:
								</h1>
								<ul className="list-disc list-inside text-xs text-neutral-300">
									<li>
										Enhanced real-time interactivity by deploying a WebSocket server, enabling users to create, delete, or update comments, questions, and likes in real-time.
									</li>
									<li>
										Implementation of lazy loading and creation of dynamic components, resulting in faster load times and an enhanced user experience.
									</li>
									<li>
										AWS S3 Bucket for image storage, reducing the reliance on more expensive storage services.
									</li>
									<li>
										Creation of administrator panel to improve user management, roles, account deletion, account access.
									</li>
								</ul>
								<button className="nav-button mt-5">Full project</button>
							</div>

							<div
								className="border min-w-[200px] min-h-[300px] w-full lg:w-1/2 rounded-lg opacity-60"
								style={{
									background: "url('forms.png')",
									backgroundSize: "cover",
									backgroundPosition: "left",
								}}></div>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default page
