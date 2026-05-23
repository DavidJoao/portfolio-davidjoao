"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const links = [
  { href: "/Home", label: "Home" },
  { href: "/Projects", label: "Projects" },
  { href: "/Contact", label: "Contact" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname === "/") return null

  const linkClass = href =>
    pathname === href
      ? "nav-link selected-nav-link"
      : "nav-link"

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/Home"
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          DS<span className="text-blue-400">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800/60 bg-zinc-950/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-lg px-3 py-2.5 ${linkClass(href)}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
