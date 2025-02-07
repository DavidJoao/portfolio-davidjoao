"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowChildren(true), 300);
    return () => {
      setShowChildren(false);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute w-full h-full bg-black z-50 pointer-events-none"
        />
        {showChildren && (
          <div className="absolute z-10 w-full h-full overflow-y-auto">{children}</div>
        )}
      </AnimatePresence>
    </div>
  );
}
