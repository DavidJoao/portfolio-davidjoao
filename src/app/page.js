"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  FaGitAlt,
  FaAws,
} from "react-icons/fa"
import {
  IoLogoPython,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoVercel,
} from "react-icons/io5"
import { SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si"
import Link from "next/link"

const techIcons = [
  FaGitAlt,
  FaAws,
  IoLogoPython,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoVercel,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
]

const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page-shell flex items-center"
      >
        <div className="page-container">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex shrink-0 justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
              <img
                src="/memoji.png"
                alt="David Sandoval"
                className="relative h-48 w-48 rounded-full border border-zinc-800 bg-zinc-900 object-cover shadow-2xl sm:h-56 sm:w-56 lg:h-[350px] lg:w-[350px]"
              />
            </motion.div>

            <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
              <p className="section-eyebrow mb-3">Portfolio</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                I&apos;m{" "}
                <span className="heading-accent">David</span>
                <br />
                <span className="heading-accent">Sandoval</span>
              </h1>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
                  Software Engineer
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                  Full Stack Developer
                </span>
              </div>

              <div className="mt-8 grid grid-cols-6 gap-3 text-2xl text-zinc-500 sm:grid-cols-6 sm:text-3xl">
                {techIcons.map((Icon, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-center transition-colors hover:text-blue-400"
                  >
                    <Icon />
                  </motion.span>
                ))}
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                Bringing ideas to life — building scalable, polished web
                applications end to end.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link href="/Home" className="btn-primary">
                  See my work
                </Link>
                <Link href="/Contact" className="btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default page
