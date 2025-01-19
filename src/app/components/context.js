"use client"
import { createContext, useContext, useEffect, useCallback } from "react"

const AppContext = createContext()

const Provider = ({ children }) => {
	const [notification, setNotification] = useState("")
	const [theme, setTheme] = useState("light")

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
		<SessionProvider>
			<I18nextProvider>
				<AppContext.Provider
					value={{
						notification,
						setNotification,
						toggleTheme,
						theme
					}}>
					{children}
				</AppContext.Provider>
			</I18nextProvider>
		</SessionProvider>
	)
}
export default Provider

export const useAppContext = () => useContext(AppContext)
