import React from 'react'
import Image from 'next/image'
import g3 from "../app/Images/Button Medium.png"
export default function Button() {
  return (
    <div>
       <div className="flex justify-center items-center pt-[2.5rem]"><Image src={g3} alt="dd" /></div>
    </div>
  )
}
