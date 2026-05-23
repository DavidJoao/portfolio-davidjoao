"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { sendEmail } from "@/lib/actions"
import { toast } from "sonner"
import { loaderIcon } from "@/lib/icons"
import Miamor from "../components/general/Miamor"

const page = () => {
  const text = "Let's get started!"

  const textVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: { delay: i * 0.04 },
    }),
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const initialForm = { name: "", email: "", message: "" }

  const [easterEgg, setEasterEgg] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [buttonText, setButtonText] = useState("Send message")
  const [errorMessage, setErrorMessage] = useState("")
  const [validEmail, setValidEmail] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (name === "email") {
      if (value === "") {
        setErrorMessage("")
        setValidEmail(false)
      } else if (regex.test(value)) {
        setErrorMessage("Valid email")
        setValidEmail(true)
      } else {
        setErrorMessage("Invalid email")
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
      setButtonText("Send message")
      setErrorMessage("")
      setValidEmail(false)
      toast.success("Email sent successfully!", {
        description: "I'll follow up with you shortly.",
      })
    } else {
      setButtonText("Send message")
    }
  }

  useEffect(() => {
    if (form?.name === process.env.NEXT_PUBLIC_EASTER_EGG_CODE) {
      setEasterEgg(true)
    }
  }, [form.name])

  if (easterEgg) return <Miamor />

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contact"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page-shell"
      >
        <div className="page-container pt-5">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="text-center lg:text-left">
              <p className="section-eyebrow mb-3">Contact</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="heading-gradient">
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  className="ml-0.5 inline-block h-[1em] w-0.5 align-middle bg-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </h1>
              <p className="mt-4 max-w-md text-sm text-zinc-400 sm:text-base">
                Have a project in mind or want to collaborate? Send a message
                and I&apos;ll get back to you.
              </p>
              <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                <Link
                  href="https://www.linkedin.com/in/davidjoaosandoval/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                </Link>
                <Link
                  href="https://github.com/DavidJoao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" />
                </Link>
                <Link
                  href="https://www.instagram.com/david.jso/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </Link>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <form
                className="flex flex-col gap-5"
                onSubmit={submitForm}
              >
                <div>
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    name="name"
                    value={form.name}
                    placeholder="John Smith"
                    className="input"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder="johnsmith@gmail.com"
                    className="input"
                    onChange={handleChange}
                  />
                  {errorMessage && (
                    <p
                      className={`mt-1.5 text-xs ${
                        validEmail ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {errorMessage}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    placeholder="Tell me about your project..."
                    className="input resize-none"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={!validEmail}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default page
