'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import Welcome from "./components/general/Welcome";
import { useAppContext } from "./components/context";

export default function Home() {

  const { isShowing, setIsShowing } = useAppContext()

  if (isShowing) return <Welcome />

  return (
    <div>
      
    </div>
  );
}
