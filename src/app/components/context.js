"use client"
import { createContext, useContext, useEffect, useCallback, useState } from "react"
import InitialPage from "./pages/InitialPage"

const AppContext = createContext()

const Provider = ({ children }) => {
	const [notification, setNotification] = useState("")
	const [theme, setTheme] = useState("light")
	const [isShowing, setIsShowing] = useState(true)
	const [currentTab, setCurrentTab] = useState("Home")
	const [page, setPage] = useState(<InitialPage />)

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme) {
			document.documentElement.classList.toggle("dark", savedTheme === "dark")
			setTheme(savedTheme)
		} else {
			const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
			const initialTheme = prefersDarkScheme ? "dark" : "light"
			document.documentElement.classList.toggle("dark", initialTheme === "dark")
			setTheme(initialTheme)
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark"
		document.documentElement.classList.toggle("dark", newTheme === "dark")
		setTheme(newTheme)
		localStorage.setItem("theme", newTheme)
	}

	return (
		<AppContext.Provider
			value={{
				notification,
				setNotification,
				toggleTheme,
				theme,
				isShowing, setIsShowing,
				currentTab, setCurrentTab,
				page, setPage
			}}>
			{children}
		</AppContext.Provider>
	)
}
export default Provider

export const useAppContext = () => useContext(AppContext)
