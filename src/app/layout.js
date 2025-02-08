import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Provider from "./components/context"
import Navbar from "./components/general/Navbar"
import { Noto_Sans_Cuneiform } from "next/font/google"
import LayoutWrapper from "./components/general/LayoutWrapper"
import { Toaster } from "sonner"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistNoto = Noto_Sans_Cuneiform({
    variable: "--font-geist-noto",
    subsets: ["latin"],
    weight: "400"
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata = {
	title: "David Joao Sandoval",
	description: "",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
				<Provider>
					<Toaster /> 
                    <Navbar />
					<LayoutWrapper>{children}</LayoutWrapper>
                </Provider>
			</body>
		</html>
	)
}
