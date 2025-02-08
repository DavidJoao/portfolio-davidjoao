'use client'
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { sendEmail } from "@/lib/actions"
import { toast } from "sonner"

const page = () => {

	const initialForm = {
		name: "",
		email: "",
		message: ""
	}

	const [form, setForm] = useState(initialForm)
	const [successMessage, setSuccessMessage] = useState("")

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form, 
			[name]: value
		})
	}

	const submitForm = async (e) => {
		e.preventDefault()
		const response = await sendEmail(form)
		if (response.status === 200) {
			setForm(initialForm)
			toast("Email sent successfully!", {
				description: "I'll follow up with you shortly!",
			  })
			}
		}

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="box"
				initial={{ opacity: 0, y: -10, x: -10 }}
				animate={{ opacity: 1, y: 0, x: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<div className="h-screen lg:h-screen pt-[4rem] bg-gradient-to-tr from-black to-neutral-900 flex flex-col lg:flex-row">

					<div className={`w-full lg:w-1/2 h-auto p-3 lg:h-full flex flex-col items-center lg:justify-center pt-[50px] lg:pt-[0px] text-neutral-300 `}>
						<h1 className="font-black text-[45px] lg:text-[65px] tracking-wide bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">Let&#39;s get</h1>
						<h1 className="font-black text-[45px] lg:text-[65px] tracking-wide bg-gradient-to-bl from-neutral-700 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">started.</h1>
					</div>

					<div className="w-full lg:w-2/3 h-full p-3 lg:h-full flex flex-col items-center justify-center">
						<div className="rounded-lg w-[90vw] sm:w-[70vw] lg:w-[60%] h-full lg:h-[70%] bg-neutral-800 shadow-3xl p-3">
							<form className="h-full text-neutral-300 flex flex-col gap-3" onSubmit={submitForm}>

								<div className="flex flex-col">
									<label className="label">Name</label>
									<input required name="name" value={form.name} placeholder="John Smith" className="input" onChange={handleChange}/>
								</div>

								<div className="flex flex-col">
									<label className="label">Email</label>
									<input required name="email" value={form.email} placeholder="johnsmith@gmail.com" className="input" onChange={handleChange}/>
								</div>

								<div className="flex flex-col">
									<label className="label">Message</label>
									<textarea required name="message" value={form.message} className="resize-none input" onChange={handleChange}/>
								</div>

								<div className="flex flex-col">
									<button type="submit" className="blue-button text-white font-semi-bold">Submit</button>
								</div>

								<div className="flex flex-row gap-3 place-self-center mt-3">
									<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
										<Link
											href={"https://www.linkedin.com/in/davidjoaosandoval/"}
											target="_blank">
											{" "}
											<FaLinkedin className="social-icon" />{" "}
										</Link>
									</motion.button>

									<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
										<Link
											href={"https://github.com/DavidJoao/"}
											target="_blank">
											{" "}
											<FaGithub className="social-icon" />{" "}
										</Link>
									</motion.button>

									<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
										<Link
											href={"https://www.instagram.com/david.jso/"}
											target="_blank">
											{" "}
											<FaInstagram className="social-icon" />{" "}
										</Link>
									</motion.button>
								</div>

								<p>Email Sent Successfully</p>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default page
