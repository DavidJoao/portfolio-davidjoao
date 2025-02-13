"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoCss3, IoLogoHtml5, IoLogoVercel } from "react-icons/io5"
import { FaGit, FaAws, FaSalesforce } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

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
	  ];
	  

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

					<div className="w-full h-auto lg:h-full flex flex-col lg:flex-row gap-10 p-3">
						<div className="border-[1px] border-neutral-600 w-full lg:w-1/2 rounded-lg bg-neutral-900 p-2 flex flex-col-reverse lg:flex-row">
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
								<Link
									target="_blank"
									href={"https://booth-grading.vercel.app/"}
									className="nav-button mt-5">
									Full project
									<FaArrowRight />
								</Link>
							</div>

							<div
								className="border min-w-[200px] min-h-[300px] w-full lg:w-1/2 rounded-lg opacity-60"
								style={{
									background: "url('boothproject.png')",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}></div>
						</div>

						<div className="border-[1px] border-neutral-600 w-full lg:w-1/2 rounded-lg bg-neutral-900 p-2 flex flex-col-reverse lg:flex-row">
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
									A dynamic form-building web application with authentication,
									real-time updates via WebSockets for questions, comments, and
									likes, and an admin panel for managing forms and users. It
									integrates AWS services, Salesforce, and provides an API token
									for secure form data export, ensuring seamless collaboration and
									data management.
								</p>
								<h1 className="text-lg text-neutral-200 font-semibold mt-2">
									Main Features:
								</h1>
								<ul className="list-disc list-inside text-xs text-neutral-300">
									<li>
										Enhanced real-time interactivity by deploying a WebSocket
										server, enabling users to create, delete, or update
										comments, questions, and likes in real-time.
									</li>
									<li>
										Implementation of lazy loading and creation of dynamic
										components, resulting in faster load times and an enhanced
										user experience.
									</li>
									<li>
										AWS S3 Bucket for image storage, reducing the reliance on
										more expensive storage services.
									</li>
									<li>
										Creation of administrator panel to improve user management,
										roles, account deletion, account access.
									</li>
								</ul>
								<Link
									target="_blank"
									href={"https://itransition-coursep.vercel.app/"}
									className="nav-button mt-5">
									Full project
									<FaArrowRight />
								</Link>
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

								<div className="relative w-full overflow-hidden bg-neutral-800 p-1 flex flex-col items-center justify-center">
									<div className="w-full flex items-center">
										<motion.div
										className="flex w-max space-x-10 flex items-center justify-center p-3"
										initial={{ x: 0 }}
										animate={{ x: "-50%" }}
										transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
										>
										{[...logos, ...logos, ...logos].map((src, index) => (
											<img key={index} src={src} alt={`Logo ${index}`} className="w-[45px] h-[45px] object-contain" />
										))}
										</motion.div>
									</div>
								</div>

					<div className="w-full h-auto lg:h-full flex flex-col items-center justify-center p-3">
						<h1 className="font-black text-[35px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Services</h1>
						<div className="w-full p-3 h-auto grid grid-cols-1 lg:grid-cols-4 items-center gap-5">

							<div className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Web Development</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Full Stack Development</span> – Building scalable web applications using JavaScript (React.js, Next.js, Node.js) and Python (Django, FastAPI, Flask).</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Frontend Development</span> – Creating responsive, high-performance UI/UX with React, Next.js, and Tailwind CSS.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Backend Development</span> - Developing APIs and backend solutions using Node.js, Express.js, and Python frameworks.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Real-time Applications</span> - Implementing WebSockets (Socket.IO) for live updates and interactions.</li>
								</ol>
							</div>

							<div className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Cloud & Infrastructure</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Cloud Deployment</span> – Deploying and managing web applications on Vercel, AWS, and Render.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Storage Optimization</span> – Integrating AWS S3 for efficient and cost-effective image/document storage.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Serverless Architecture</span> – Setting up cloud-based functions and services for scalability and performance.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Monitoring & Alerts</span> - Configuring AWS CloudWatch alarms to track and manage cloud resources.</li>
								</ol>
							</div>

							<div className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Database Management</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Data Security & Authentication</span> –Implementing secure authentication with JWT, OAuth, password encryption, and access control.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">PostgreSQL & MongoDB</span> – Designing, optimizing, and maintaining relational and NoSQL databases.</li>
								</ol>
							</div>

							<div className="bg-neutral-900 rounded border-[1px] border-neutral-600 p-3 h-full">
								<h1 className="font-black text-[25px] bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Automation & Process Optimization</h1>
								<ol className="list-disc list-inside">
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Cost Reduction Strategies</span> – Minimizing third-party dependencies by developing in-house solutions for document management, notifications, and data handling.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Custom Web Solutions</span> – Developing tailored applications to enhance business operations and user experiences.</li>
									<li className="flex flex-col text-neutral-300 text-sm"><span className="font-bold text-regular text-white">Performance Optimization</span> – Enhancing website performance with lazy loading, dynamic components, and efficient database queries.</li>
								</ol>
							</div>



						</div>
					</div>

				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default page
