import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Provider from "./components/context"
import Navbar from "./components/general/Navbar"
import LayoutWrapper from "./components/general/LayoutWrapper"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "David Joao Sandoval",
  description: "Software Engineer — Full Stack Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Provider>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "hsl(0 0% 9%)",
                border: "1px solid hsl(0 0% 16%)",
                color: "white",
              },
            }}
          />
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  )
}
