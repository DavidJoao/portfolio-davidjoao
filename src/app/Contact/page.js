'use client'
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

const page = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="box"
				initial={{ opacity: 0, y: -10, x: -10 }}
				animate={{ opacity: 1, y: 0, x: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<div>Contact</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default page
