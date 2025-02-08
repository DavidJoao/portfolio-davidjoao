import React, { useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'

const Miamor = () => {

    const pathname = usePathname();
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("cancion.mp3");
            
            audioRef.current.addEventListener("canplaythrough", () => {
                audioRef.current.play().catch(error => console.error("Playback failed:", error));
            });

            setTimeout(() => {
                audioRef.current?.pause();
            }, 60000);
        }

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    useEffect(() => {
        if (pathname !== "/Contact") {
            audioRef.current?.pause();
        }
    }, [pathname]);

	return (
		<div className="h-screen lg:h-screen pt-[4rem] p-5 bg-gradient-to-tr from-black to-neutral-900 flex flex-col items-center justify-start">
            <div className=" w-full lg:w-[600px] h-[70%] rounded-xl opacity-80" style={{ background:"url('miamor.jpeg')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat" }}></div>
            <h1 className="font-semibold text-center text-[25px]">Y no podía faltar lo bonito de mi vida ❤️</h1>
        </div>
	)
}

export default Miamor
