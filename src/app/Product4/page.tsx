import React from 'react'
import Image from 'next/image'
import h1 from "../Images/Frame 143.png"
import h2 from "../Images/hh.png"
import g from "../Images/g.png"
import g1 from "../Images/g1.png"
import g2 from "../Images/g3.png"
import g3 from "../Images/g4.png"
import Middle from '@/componenets/Middle'
import Button from '@/componenets/Button'
export default function Product4() {
  return (
    <div>
        <div className="flex justify-center items-center pt-6">
        <Image src={h1} alt="" className="sm:hidden md:block w-full "/>
        <Image src={h2} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <Middle/>
      <div className="flex lg:justify-evenly sm:items-center sm:justify-center mt-12 sm:flex-wrap lg:flex-row">
           <div><Image src={g} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">The Dandy chair </p><p className="font-clash font-medium text-[12px] mb-3">$250</p></div>
           <div><Image src={g1} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">Rustic Vase Set </p><p className="font-clash font-medium text-[12px] mb-3">$155</p></div>
           <div><Image src={g2} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">The Silky Vase </p><p className="font-clash font-medium text-[12px] mb-3">$125</p></div>
           <div><Image src={g3} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2"> The Lucy Lamp </p><p className="font-clash font-medium text-[12px] mb-3">$399</p></div>
        </div>
        <Middle/>
        <Button/>
        <br/><br/>
    </div>
  )
}
