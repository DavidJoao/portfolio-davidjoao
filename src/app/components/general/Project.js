import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const Project = ({ project }) => {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden transition-colors hover:border-zinc-700">
      <div
        className="relative h-48 w-full shrink-0 border-b border-zinc-800 bg-zinc-900 sm:h-52"
        style={{
          background: `url('${project.image}') center / cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2 text-lg text-zinc-500">
          {project.technologies.map((logo, index) => (
            <span
              key={index}
              className="transition-colors group-hover:text-zinc-300"
            >
              {logo}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-white">{project.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Main features
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="nav-cta mt-auto pt-6"
        >
          View project <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  )
}

export default Project
