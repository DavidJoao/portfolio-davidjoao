"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"

const InitialPage = () => {
  const downloads = [
    { href: "resume.pdf", file: "David Sandoval Resume", label: "Resume" },
    {
      href: "gacert.pdf",
      file: "David Sandoval Software Development Certificate",
      label: "Software Development Certificate",
    },
    {
      href: "itrancert.pdf",
      file: "David Sandoval Front End Intern Certificate",
      label: "Front End Engineer Certificate",
    },
  ]

  return (
    <AnimatePresence>
      <motion.div
        key="home"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page-shell"
      >
        <div className="page-container pt-5">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <section className="relative lg:col-span-3">
              <div className="surface-card overflow-hidden p-6 sm:p-8 lg:min-h-[520px] h-full">
                <div
                  className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-30 lg:block"
                  style={{
                    background: "url('/pcmemoji.png') right center / contain no-repeat",
                  }}
                  aria-hidden
                />
                <img
                  src="/pcmemoji.png"
                  alt=""
                  className="mx-auto mb-6 h-40 w-40 rounded-2xl border border-zinc-800 object-cover lg:hidden"
                />
                <p className="section-eyebrow mb-4">Introduction</p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  I&apos;m <span className="heading-accent">David</span>, a
                  <br />
                  Software Engineer
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                  My goal is to grow professionally while delivering
                  high-quality, optimized web applications that meet and exceed
                  expectations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/Projects" className="btn-primary">
                    View projects
                    <FaArrowRight className="text-xs" />
                  </Link>
                  <Link href="/Contact" className="btn-ghost">
                    Contact me
                  </Link>
                </div>
              </div>
            </section>

            <aside className="flex flex-col gap-6 lg:col-span-2">
              <div className="surface-panel p-6">
                <p className="section-eyebrow mb-3">About me</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  I&apos;m a Software Engineer specializing in web development,
                  building and deploying full-stack applications with
                  JavaScript, React, Next.js, Node.js, Python, PostgreSQL,
                  MongoDB, Tailwind CSS, and AWS.
                </p>
                <Link href="/Contact" className="nav-cta mt-4">
                  Get in touch <FaArrowRight className="text-xs" />
                </Link>
              </div>

              <div className="surface-panel p-6">
                <p className="section-eyebrow mb-3">My work</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Explore recent projects — from web apps to full-stack
                  solutions that showcase skills in production.
                </p>
                <ul className="mt-4 space-y-2">
                  {downloads.map(({ href, file, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        download={file}
                        target="_blank"
                        className="btn-link text-xs sm:text-sm"
                      >
                        {label}
                        <MdOutlineFileDownload />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/Projects" className="nav-cta mt-4">
                  Browse projects <FaArrowRight className="text-xs" />
                </Link>
              </div>

              <div className="surface-panel p-6">
                <p className="section-eyebrow mb-4">Follow me</p>
                <div className="flex gap-4">
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
            </aside>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default InitialPage
