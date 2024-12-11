import React from 'react'
import abc from "../Images/Hero Blocks.png"
import abcd from "../Images/Hero Blocks1.png"
import Writetten from '@/componenets/Writetten'
import Middle from '@/componenets/Middle'
import Button from '@/componenets/Button'
import a from "../Images/abc.png"
import b from  "../Images/abc1.png"
import p from "../Images/p.png"
import p1 from "../Images/p1.png"
import Image from 'next/image'
export default function Home1() {
  return (
    <div>
        <div className="flex justify-center items-center pt-6">
        <Image src={abc} alt="" className="sm:hidden md:block w-full "/>
        <Image src={abcd} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <Writetten/>
      <div className="pt-[5rem]">
        <Middle/>
        <Button/>
         <br/>
      </div>
      <div className="  flex justify-center items-center">
        <Image src={a} alt="" className="sm:hidden md:block w-full"/>
        <Image src={b} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <div className="  flex justify-center items-center">
        <Image src={p} alt="" className="sm:hidden md:block w-full"/>
        <Image src={p1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      
      
    </div>
  )
}

