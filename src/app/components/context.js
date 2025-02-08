"use client"
import { createContext, useContext, useEffect, useCallback, useState } from "react"

const AppContext = createContext()

const Provider = ({ children }) => {

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme) {
			document.documentElement.classList.toggle("dark", savedTheme === "dark")
		} else {
			const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
			const initialTheme = prefersDarkScheme ? "dark" : "light"
			document.documentElement.classList.toggle("dark", initialTheme === "dark")
		}
	}, [])

	return (
		<AppContext.Provider value={{}}>
			{children}
		</AppContext.Provider>
	)
}
export default Provider

export const useAppContext = () => useContext(AppContext)
