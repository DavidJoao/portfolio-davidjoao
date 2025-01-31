'use client'
import Welcome from "./components/general/Welcome";
import { useAppContext } from "./components/context";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

    const { isShowing, page } = useAppContext()

	return (
        <div>
        <Welcome />
        <AnimatePresence mode="wait">
                {!isShowing && page && (
                    <motion.div
                        key={page?.type?.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} className="absolute w-full">
                        {page}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
	)
}
