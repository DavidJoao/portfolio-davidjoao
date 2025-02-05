import React, { useState } from 'react'

const ProjectsPage = () => {

  const [imageSrc, setImageSrc] = useState("https://img.freepik.com/free-vector/wanna-be-my-valentine-message_23-2148801325.jpg")

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={imageSrc} className='w-[350px] rounded' />
      <div className='flex mt-5 gap-2'>
        <button className='p-2 w-[100px] rounded bg-green-400' onClick={() => {
          setImageSrc("https://i.pinimg.com/originals/7c/0d/79/7c0d799c44a95f6637a05d888b3ab0d0.gif")
          const audio = new Audio("cancion.mp3")
          audio.play()
          }}>Chi</button>
        <button className='p-2 w-[100px] rounded bg-red-400' onClick={() => {
          setImageSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-KVLpxuT3nfZ_9Wm8rVdQf4Dl524m7cUsA&s")
          }}>Nel</button>
      </div>
    </div>
  )
}

export default ProjectsPage