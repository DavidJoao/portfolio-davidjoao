'use client'
import React from "react"
import { FaGit, FaAws } from "react-icons/fa";
import { IoLogoPython, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoCss3, IoLogoHtml5, IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";

const InitialPage = () => {

	return (
		<div className="h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row items-center justify-center" style={{ background: "url('https://img.freepik.com/free-vector/dark-background-hexagonal-shapes_1048-2713.jpg?semt=ais_hybrid')", backgroundSize:"contain" }}>
			<div className="h-auto w-screen md:w-1/2 flex flex-col items-center md:items-end justify-start">
				<div className="flex flex-col items-center justify-center gap-3">
					<img src="/memoji.png" className="w-[230px] h-[230px] sm:h-auto sm:w-auto" />
				</div>
			</div>
			<div className="h-full w-screen md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center text-center md:pt-[50px] p-2">
				<div className="p-2 flex flex-col items-center">
					<h1 className="font-extrabold text-4xl md:text-[40px]">
						I&#39;m{" "}
						<span className="text-blue-400 font-black md:text-[50px]">David</span>
					</h1>
					<span className="text-blue-400 text-4xl md:text-[50px] font-black">
						Sandoval
					</span>
					<h3 className="border-b border-slate-400 pb-2 text-md mt-5">Software Engineer</h3>
					<h3 className="text-md">Full Stack Developer</h3>
					<div className="grid grid-cols-4 sm:grid-cols-6 sm:grid-rows-2 gap-3 mt-5 text-[40px]">
						<FaGit />
						<FaAws />
						<IoLogoPython />
						<IoLogoJavascript />
						<IoLogoNodejs />
						<IoLogoReact />
						<IoLogoCss3 />
						<IoLogoHtml5 />
						<IoLogoVercel />
						<SiNextdotjs />
						<SiPostgresql />
						<SiMongodb />
					</div>
					<p className="mt-2 font-bold text-center">Bringing ideas to life—let's build something amazing!</p>
					<div className="mt-2 flex gap-3">
						<button className="black-button font-bold">See my work</button>
						<button className="blue-button font-bold">Start a project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InitialPage
