"use client"
import { createContext, useContext, useEffect, useCallback, useState } from "react"

const AppContext = createContext()

const Provider = ({ children }) => {



	return (
		<AppContext.Provider value={{}}>
			{children}
		</AppContext.Provider>
	)
}
export default Provider

export const useAppContext = () => useContext(AppContext)
