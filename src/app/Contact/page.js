"use client"
import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { sendEmail } from "@/lib/actions"
import { toast } from "sonner"
import { loaderIcon } from "@/lib/icons"
import Miamor from "../components/general/Miamor"

const page = () => {
	const text = "Let's get \n started!"

	const textVariants = {
		hidden: { opacity: 0 },
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i * 0.1,
			},
		}),
	}

	let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	const initialForm = {
		name: "",
		email: "",
		message: "",
	}

	const [easterEgg, setEasterEgg] = useState(false)
	const [form, setForm] = useState(initialForm)
	const [buttonText, setButtonText] = useState("Submit")
	const [errorMessage, setErrorMessage] = useState("")
	const [validEmail, setValidEmail] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value,
		})

		if (name == "email") {
			if (value === "") {
				setErrorMessage("")
				setValidEmail(false)
			} else if (regex.test(value)) {
				setErrorMessage("Valid Email")
				setValidEmail(true)
			} else {
				setErrorMessage("Invalid Email")
				setValidEmail(false)
			}
		}
	}

	const submitForm = async e => {
		e.preventDefault()
		setButtonText(loaderIcon)
		const response = await sendEmail(form)
		if (response.status === 200) {
			setForm(initialForm)
			setButtonText("Submit")
			setErrorMessage("")
			setValidEmail("false")
			toast("Email sent successfully!", {
				description: "I'll follow up with you shortly!",
			})
		}
	}

	useEffect(() => {
		if (form?.name == process.env.NEXT_PUBLIC_EASTER_EGG_CODE) {
			setEasterEgg(true)
			console.log("EasterEgg")
		}
	}, [form.name])

	return (
		<>
			{easterEgg ? (
				<Miamor />
			) : (
				<AnimatePresence mode="wait">
					<motion.div
						key="box"
						initial={{ opacity: 0, y: -10, x: -10 }}
						animate={{ opacity: 1, y: 0, x: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<div className="h-screen lg:h-screen pt-[4rem] bg-gradient-to-tr from-black to-neutral-900 flex flex-col lg:flex-row">
							<div
								className={`w-full lg:w-1/2 h-auto p-3 lg:h-full flex flex-col items-center lg:justify-center pt-[50px] lg:pt-[0px] text-neutral-300 `}>
								<div className="w-[95%] lg:w-1/2">
									<h1 className="font-black text-[45px] lg:text-[65px] tracking-wide bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent text-center">
										{text.split("").map((char, index) => (
											<motion.span
												key={index}
												custom={index}
												initial="hidden"
												animate="visible"
												variants={textVariants}>
												{char}
											</motion.span>
										))}
										<motion.span
											className="border-r-2 border-orange-500 inline-block align-baseline"
											initial={{ opacity:0 }}
											animate={{ opacity: [0, 1, 0] }}
											transition={{ repeat: Infinity, duration: 0.6 }}
										/>
									</h1>
								</div>
							</div>

							<div className="w-full lg:w-2/3 h-full p-3 lg:h-full flex flex-col items-center justify-center">
								<div className="rounded-lg w-[90vw] sm:w-[70vw] lg:w-[60%] h-full lg:h-[70%] bg-neutral-800 shadow-3xl p-3">
									<form
										className="h-full text-neutral-300 flex flex-col gap-3"
										onSubmit={submitForm}>
										<div className="flex flex-col">
											<label className="label">Name</label>
											<input
												required
												name="name"
												value={form.name}
												placeholder="John Smith"
												className="input"
												onChange={handleChange}
											/>
										</div>

										<div className="flex flex-col">
											<label className="label">Email</label>
											<input
												required
												name="email"
												value={form.email}
												placeholder="johnsmith@gmail.com"
												className="input"
												onChange={handleChange}
											/>
											<label
												className={
													validEmail
														? "text-xs text-green-500"
														: "text-xs text-red-500"
												}>
												{errorMessage}
											</label>
										</div>

										<div className="flex flex-col">
											<label className="label">Message</label>
											<textarea
												required
												name="message"
												value={form.message}
												className="resize-none input"
												onChange={handleChange}
											/>
										</div>

										<div className="flex flex-col">
											<button
												type="submit"
												className="blue-button text-white font-semi-bold flex justify-center"
												disabled={!validEmail}>
												{" "}
												{buttonText}{" "}
											</button>
										</div>

										<div className="flex flex-row gap-3 place-self-center mt-3">
											<motion.button
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}>
												<Link
													href={
														"https://www.linkedin.com/in/davidjoaosandoval/"
													}
													target="_blank">
													{" "}
													<FaLinkedin className="social-icon" />{" "}
												</Link>
											</motion.button>

											<motion.button
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}>
												<Link
													href={"https://github.com/DavidJoao/"}
													target="_blank">
													{" "}
													<FaGithub className="social-icon" />{" "}
												</Link>
											</motion.button>

											<motion.button
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}>
												<Link
													href={"https://www.instagram.com/david.jso/"}
													target="_blank">
													{" "}
													<FaInstagram className="social-icon" />{" "}
												</Link>
											</motion.button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	)
}

export default page
