import React from "react"
import { useAppContext } from "../context"

const AboutPage = () => {
	const { setPage, setCurrentTab } = useAppContext()

	return (
		<div className="md:pt-[50px] h-auto min-h-screen w-screen flex flex-col-reverse md:flex-row bg-black">
			<div className="h-full w-full md:w-1/2 p-5 bg-black flex flex-col items-end text-center gap-2">
				<div>
					<h1 className="font-black text-[30px] mb-5">So, who am I?</h1>
					<p className="max-w-[600px]">
						I&#39;m a Software Engineer specializing in web development, leveraging my
						skills to build and deploy full-stack web applications. I work with
						technologies like JavaScript, React, Next.js, Node.js, Python, PostgreSQL,
						MongoDB, MySQL, Tailwind CSS, React Bootstrap, and Amazon Web Services to
						create efficient, scalable, and user-friendly solutions.
					</p>
					<p className="max-w-[600px] mt-4">
						My goal is to grow professionally while delivering high-quality, optimized
						web applications that meet and exceed expectations.
					</p>
				</div>
				<div className="h-auto max-w-[600px] mt-5 bg-neutral-700 p-4 rounded text-center">
                    <h1 className="mb-5 text-[30px] font-black">Outside Work</h1>
					<p>
						In my free time, I love exploring new restaurants as a true foodie and I&#39;m always
						on the hunt for great coffee. I also enjoy traveling, and going to concerts to immerse myself in
						live music. In fact, my favorite band is The Killers, and nothing beats the
						energy of seeing them perform live!
					</p>
                    <p> If you haven&#39;t heard them yet, give them a try with my personal recommendation—you won&#39;t be disappointed </p>
                    <iframe className="mt-4 w-[300px] h-[200px] mx-auto" width="560" height="315" src="https://www.youtube.com/embed/zPJQQeeYDYI?si=ms5zIOmjFSc5E4qR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
				</div>
			</div>

			<div className="h-auto md:h-full w-full md:w-1/2 p-5 flex justify-center items-start md:items-center bg-black">
				<img src="pcmemoji.png" className="w-[350px] md:w-2/3" />
			</div>
		</div>
	)
}

export default AboutPage
