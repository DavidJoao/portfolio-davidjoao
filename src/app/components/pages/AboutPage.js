import React from "react"
import { useAppContext } from "../context"

const AboutPage = () => {
	const { setPage, setCurrentTab } = useAppContext()

	return (
		<div className="h-auto md:h-[calc(100vh-4rem)] p-2 w-screen grid grid-cols-1 md:grid-cols-2 grid-rows-2">

			<div className="flex flex-col md:items-start md:justify-center p-4 md:p-[35px] gap-2">
				<h1 className="font-black text-[30px]">So, who am I?</h1>
				<p className="max-w-[600px]">
					I&#39;m a Software Engineer specializing in web development, leveraging my
					skills to build and deploy full-stack web applications. I work with technologies
					like JavaScript, React, Next.js, Node.js, Python, PostgreSQL, MongoDB, MySQL,
					Tailwind CSS, React Bootstrap, and Amazon Web Services to create efficient,
					scalable, and user-friendly solutions.
				</p>
				<p className="max-w-[600px] mt-4">
					My goal is to grow professionally while delivering high-quality, optimized web
					applications that meet and exceed expectations.
				</p>
			</div>

			<div className="flex items-start justify-center md:items-center md:justify-center md:p-[35px]">
				<img src="pcmemoji.png" className="w-[350px]" />
			</div>

			<div className="flex items-start justify-center p-4 md:p-[35px]">
				<iframe
					className="w-full h-[300px] mt-5 md:m-0 md:h-full rounded-xl border border-neutral-500"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/zPJQQeeYDYI?si=ms5zIOmjFSc5E4qR"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>

			<div className="flex flex-col items-start md:items-end justify-start p-[35px] gap-2 text-left md:text-right">
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
	)
}

export default AboutPage
