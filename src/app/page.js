'use client'
import Welcome from "./components/general/Welcome";

export default function Home() {
  return (
    <div className="border w-screen h-screen flex flex-col md:flex-row items-center justify-center">
      <Welcome />
      <div className="border h-1/3 md:h-screen w-screen md:w-1/3">

      </div>
      <div className="border h-2/3 md:h-screen w-screen md:w-2/3">

      </div>
    </div>
  );
}
