import React from 'react' 
import q from "../Images/q.png"
import q1 from "../Images/q1.png"
import Middle from '@/componenets/Middle'
import Button from '@/componenets/Button'
import Writetten from '@/componenets/Writetten'
import UpperFooter from '@/componenets/UpperFooter'
import Image from 'next/image'
export default function Product() {
  return (
    <div>
        <div className="  flex justify-center items-center pt-6">
        <Image src={q} alt="" className="sm:hidden md:block w-full"/>
        <Image src={q1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <div className="pt-[5rem]">
         <p  className="font-clash font-medium text-[26px] ml-14 mb-4">You might also like</p>
         <Middle/>
         <Button/>
         <br/>
      </div>
      <Writetten/>
      <UpperFooter/>
    </div>
  )
}
