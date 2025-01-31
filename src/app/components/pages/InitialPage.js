'use client'
import React from "react"
import { FaGit, FaAws } from "react-icons/fa";
import { IoLogoPython, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoCss3, IoLogoHtml5, IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";

const InitialPage = () => {

	return (
		<div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center">
			<div className="h-auto md:h-screen w-screen md:w-1/2 flex flex-col items-center md:items-end justify-center p-5">
				<div className="flex flex-col items-center justify-center gap-3">
					<img src="/memoji.png" className="w-[250px] h-[250px] sm:h-auto sm:w-auto" />
				</div>
			</div>
			<div className="h-2/3 md:h-screen w-screen md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center text-center md:pt-[50px] md:p-2">
				<div className="p-2">
					<h1 className="font-extrabold text-4xl md:text-[40px]">
						I&#39;m{" "}
						<span className="text-blue-400 font-black md:text-[50px]">David</span>
					</h1>
					<span className="text-blue-400 text-4xl md:text-[50px] font-black">
						Sandoval
					</span>
					<h3 className="border-b border-slate-400 pb-2 text-md">Software Engineer</h3>
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
				</div>
				<p className="mt-2 font-bold text-center">Bringing ideas to life—let's build something amazing!</p>
			</div>
		</div>
	)
}

export default InitialPage
