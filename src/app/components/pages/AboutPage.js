import React from "react"
import { useAppContext } from "../context"

const AboutPage = () => {
	const { setPage, setCurrentTab } = useAppContext()

	return (
		<div className="m-height md:h-[calc(100vh-4rem)] p-2 w-screen flex flex-col lg:flex-row-reverse ">

			<div className="w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-center justify-start p-5">
				<img src="pcmemoji.png" className="w-[350px] sm:w-[450px] lg:w-full" />
			</div>

			<div className="flex flex-col items-center justify-center w-full lg:w-2/3 h-auto p-5 lg:h-full gap-5">
				<div className=" h-full w-full flex flex-col text-left gap-3 p-3">
					<h1 className="font-black text-[30px]">So, who am I?</h1>
					<p>
						I&#39;m a Software Engineer specializing in web development, leveraging my
						skills to build and deploy full-stack web applications. I work with technologies
						like JavaScript, React, Next.js, Node.js, Python, PostgreSQL, MongoDB, MySQL,
						Tailwind CSS, React Bootstrap, and Amazon Web Services to create efficient,
						scalable, and user-friendly solutions.
					</p>
					<p>
						My goal is to grow professionally while delivering high-quality, optimized web
						applications that meet and exceed expectations.
					</p>
				</div>

				<div className="h-full w-full flex flex-col justify-start gap-3 p-3 lg:text-right">
					<h1 className="font-black text-[30px]">Outside Work</h1>
					<p>
						In my free time, I love exploring new restaurants as a true foodie and I&#39;m
						always on the hunt for great coffee. I also enjoy traveling, and going to
						concerts to immerse myself in live music. In fact, my favorite band is The
						Killers, and nothing beats the energy of seeing them perform live!
					</p>
					<p>
						{" "}
						If you haven&#39;t heard them yet, give them a try with my personal
						recommendation—you won&#39;t be disappointed{" "}
					</p>
				</div>
			</div>


		</div>
	)
}

export default AboutPage
