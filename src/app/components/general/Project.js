import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Project = ( { project } ) => {
  return (
    <div className="border-[1px] border-neutral-600 rounded-lg bg-neutral-900 p-2 flex flex-col-reverse md:flex-row lg:flex-col-reverse lg:items-center lg:justify-end">
        <div className="w-full lg:w-1/2 p-3 text-left lg:w-full">
            <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-6 gap-2 text-xl m-3 place-items-center">
                {project.technologies.map((logo, index) => {
                    return(
                        <div key={index}>{logo}</div>
                    )
                })}
            </div>

            <h1 className="text-lg text-neutral-200 font-semibold">
                {project.title}
            </h1>
            <p className="text-xs text-neutral-300">
                {project.description}
            </p>
            <h1 className="text-lg text-neutral-200 font-semibold mt-2">
                Main Features:
            </h1>
            <ul className="list-disc list-inside text-xs text-neutral-300">
                { project.features.map((feature, index) => {
                    return (
                        <li key={index}>{feature}</li>
                    )
                }) }
            </ul>
            <Link
                target="_blank"
                href={project.link}
                className="nav-button mt-5">
                Full project
                <FaArrowRight />
            </Link>
        </div>

        <div
            className="border-[1px] border-neutral-600 min-w-[200px] min-h-[300px] w-full rounded-lg opacity-60"
            style={{
                background: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}></div>
    </div>
  )
}

export default Project