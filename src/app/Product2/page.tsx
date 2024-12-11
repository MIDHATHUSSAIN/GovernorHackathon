import React from 'react'
import Image from 'next/image'
import h from "../Images/Page Headers.png"
import h1 from "../Images/Page Headers (1).png"
import a from "../Images/abc.png"
import b from  "../Images/abc1.png"
import o from "../Images/o.png"
import o1 from "../Images/o1.png"
import UpperFooter from '@/componenets/UpperFooter'
import Writetten from '@/componenets/Writetten'
export default function Product2() {
  return (
    <div>
       <div className="  flex justify-center items-center pt-6">
        <Image src={h} alt="" className="sm:hidden md:block w-full"/>
        <Image src={h1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <div className="  flex justify-center items-center">
        <Image src={a} alt="" className="sm:hidden md:block w-full"/>
        <Image src={b} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div> 
      <div className="  flex justify-center items-center">
        <Image src={o} alt="" className="sm:hidden md:block w-full"/>
        <Image src={o1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div> 

     <Writetten/>
      <UpperFooter/>
    </div>
  )
}
