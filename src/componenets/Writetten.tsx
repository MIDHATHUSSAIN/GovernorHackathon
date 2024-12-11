import React from 'react'
import s1 from "../app/Images/Delivery.png";
import s2 from "../app/Images/Checkmark--outline.png"
import s3 from "../app/Images/Purchase.png"
import s4 from "../app/Images/Sprout.png"
import Image from 'next/image'

export default function Writetten() {
  return (
    <div>
        <div className="text-center font-clash font-medium text-[26px] mt-12">What makes our brand different</div>
      <div className="flex lg:justify-evenly sm:items-center sm:justify-center mt-12 sm:flex-wrap lg:flex-row">
        
        <div className="h-40 w-[18rem]">
          <Image src={s1} alt="ddsdnsjns" className="mb-[1rem]" />
          <p className="font-clash text-[24px] font-medium mb-2 ">Next day as standard </p> 
          <span className="font-satoshi text-[16px] font-medium ">Order before 3pm and get your order <br />
          the next day as standard</span>
        </div>
        <div className="h-40 w-[18rem] ">
          <Image src={s2} alt="ddsdnsjns" className="mb-[1rem]" />
          <p className="font-clash text-[24px] font-medium mb-2">Made by true artisans </p>
          
          <span className="font-satoshi text-[16px] font-medium ">Handmade crafted goods made with <br/>
          real passion and craftmanship</span>
        </div>
        <div className="h-40 w-[18rem]">
          <Image src={s3} alt="ddsdnsjns" className="mb-[1rem]"/>
          <p className="font-clash text-[24px] font-medium mb-2">Unbeatable prices</p> 
          
         <span className="font-satoshi text-[16px] font-medium"> For our materials and quality you <br/> won’t find better prices anywhere</span>
        </div>
        <div className="h-40 w-[18rem]">
          <Image src={s4} alt="ddsdnsjns" className="mb-[1rem]"/>
         <p className="font-clash text-[24px] font-medium mb-2"> Recycled packaging</p> 
         
         <span className="font-satoshi text-[16px] font-medium"> We use 100% recycled packaging to <br/> ensure our footprint is manageable.</span>
        </div>
      </div>
    </div>
  )
}
