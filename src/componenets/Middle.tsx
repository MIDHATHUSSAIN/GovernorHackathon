import React from 'react'
import Image from "next/image";
import parent from "../app/Images/Parent.png"
import patren1 from "../app/Images/Parent (1).png"
import parent2 from "../app/Images/Parent (2).png"
import parent3 from "../app/Images/Parent (3).png"


export default function Middle() {
  return (
    <div>
      <div className="flex lg:justify-evenly sm:items-center sm:justify-center mt-12 sm:flex-wrap lg:flex-row">
           <div><Image src={parent} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">The Dandy chair </p><p className="font-clash font-medium text-[12px] mb-3">$250</p></div>
           <div><Image src={patren1} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">Rustic Vase Set </p><p className="font-clash font-medium text-[12px] mb-3">$155</p></div>
           <div><Image src={parent2} alt ="dd"/><p className="font-clash font-medium text-[12px] mt-3 mb-2">The Silky Vase </p><p className="font-clash font-medium text-[12px] mb-3">$125</p></div>
           <div><Image src={parent3} alt ="dd"/> <p className="font-clash font-medium text-[12px] mt-3 mb-2"> The Lucy Lamp </p><p className="font-clash font-medium text-[12px] mb-3">$399</p></div>
         </div>
         
    </div>
  )
}
