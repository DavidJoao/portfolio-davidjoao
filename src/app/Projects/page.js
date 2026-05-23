"use client"

import { useRef } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import Project from "../components/general/Project"
import { projects } from "@/lib/projects"

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
]

const services = [
  {
    title: "Web Development",
    items: [
      {
        label: "Full Stack Development",
        text: "Building scalable web applications using JavaScript (React.js, Next.js, Node.js) and Python (Django, FastAPI, Flask).",
      },
      {
        label: "Frontend Development",
        text: "Creating responsive, high-performance UI/UX with React, Next.js, and Tailwind CSS.",
      },
      {
        label: "Backend Development",
        text: "Developing APIs and backend solutions using Node.js, Express.js, and Python frameworks.",
      },
      {
        label: "Real-time Applications",
        text: "Implementing WebSockets (Socket.IO) for live updates and interactions.",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      {
        label: "Cloud Deployment",
        text: "Deploying and managing web applications on Vercel, AWS, and Render.",
      },
      {
        label: "Storage Optimization",
        text: "Integrating AWS S3 for efficient and cost-effective image/document storage.",
      },
      {
        label: "Serverless Architecture",
        text: "Setting up cloud-based functions and services for scalability and performance.",
      },
      {
        label: "Monitoring & Alerts",
        text: "Configuring AWS CloudWatch alarms to track and manage cloud resources.",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        label: "Data Security & Authentication",
        text: "Implementing secure authentication with JWT, OAuth, password encryption, and access control.",
      },
      {
        label: "PostgreSQL & MongoDB",
        text: "Designing, optimizing, and maintaining relational and NoSQL databases.",
      },
    ],
  },
  {
    title: "Automation & Process Optimization",
    items: [
      {
        label: "Cost Reduction Strategies",
        text: "Minimizing third-party dependencies by developing in-house solutions for document management, notifications, and data handling.",
      },
      {
        label: "Custom Web Solutions",
        text: "Developing tailored applications to enhance business operations and user experiences.",
      },
      {
        label: "Performance Optimization",
        text: "Enhancing website performance with lazy loading, dynamic components, and efficient database queries.",
      },
    ],
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="surface-panel h-full p-5 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <ul className="mt-4 space-y-4">
        {service.items.map((item, i) => (
          <li key={i} className="text-sm text-zinc-400">
            <span className="font-medium text-zinc-200">{item.label}</span>
            <span className="mt-0.5 block leading-relaxed">{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="projects"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page-shell"
      >
        <div className="page-container space-y-16 pt-5 sm:space-y-20">
          <header className="text-center">
            <p className="section-eyebrow mb-3">Portfolio</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="heading-gradient">Capturing Ideas</span>
              <br />
              <span className="heading-accent">Delivering Results</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400">
              Most recent projects from my portfolio
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            <Project project={projects.booth} />
            <Project project={projects.avshotchicken} />
            <Project project={projects.intern} />
            <Project project={projects.scenariogpt} />
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 py-4">
            <motion.div
              className="flex w-max items-center gap-12 px-4"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            >
              {[...logos, ...logos, ...logos].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  className="h-10 w-10 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-11 sm:w-11"
                />
              ))}
            </motion.div>
          </div>

          <section>
            <header className="mb-8 text-center">
              <p className="section-eyebrow mb-3">What I offer</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="heading-gradient">Services</span>
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default page
