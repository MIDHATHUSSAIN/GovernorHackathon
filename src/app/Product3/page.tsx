import React from 'react'
import Image from 'next/image'
import g from "../Images/Shopping basket.png"
import g1 from "../Images/Shopping basket (1).png"
export default function Product3() {
  return (
    <div>
       <div className="flex justify-center items-center pt-6">
        <Image src={g} alt="" className="sm:hidden md:block w-full "/>
        <Image src={g1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
    </div>
  )
}
