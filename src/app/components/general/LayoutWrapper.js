"use client"

export default function LayoutWrapper({ children }) {
  return (
    <div className="relative z-10 min-h-screen w-full text-white">
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
      <div className="pointer-events-none fixed inset-0 glow-blue" aria-hidden />
      {children}
    </div>
  )
}
