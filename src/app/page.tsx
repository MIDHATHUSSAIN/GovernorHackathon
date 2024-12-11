import Image from "next/image";
import f from "./Images/Container.png";
import f1 from "./Images/Hero Blocks (1).png";
import Writetten from "@/componenets/Writetten";
import parent from "./Images/Parent.png"
import Middle from "@/componenets/Middle";
import Button from "@/componenets/Button";
import UpperFooter from "@/componenets/UpperFooter";
import g1 from "./Images/Large.png"
import g2 from "./Images/Photo.png"
import g3 from "./Images/Button Medium.png"
import ff from "./Images/Features.png"
import ff1 from "./Images/Features (1).png"
export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center md:mt-8">
        <Image
          src={f}
          alt="fdfdf"
          className="sm:hidden md:block md:w-[50rem] lg:w-[65rem] xl:w-[85rem]"
        />
        <Image src={f1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
      </div>
      <Writetten/>
      <div className="pt-[5rem]">
         <p  className="font-clash font-medium text-[26px] ml-14 mb-4">New ceramics</p>
         
         <Middle/>
         <Button/>
      </div>
      <div className="pt-[5rem]">
         <p  className="font-clash font-medium text-[26px] ml-14 mb-4">Our popular products</p>
         <div className="flex lg:justify-evenly sm:items-center sm:justify-center mt-12 sm:flex-wrap lg:flex-row">
           <div><Image src={g1} alt ="dd"/>
           <p className="font-clash font-medium text-[12px] mt-3 mb-2">The Poplar suede sofa</p><p className="font-clash font-medium text-[12px] mb-3">$980</p>
             
           </div>
           <div><Image src={parent} alt ="dd"/>
           <p className="font-clash font-medium text-[12px] mt-3 mb-2">The Dandy chair</p><p className="font-clash font-medium text-[12px] mb-3">$250</p>
            
           </div>
           <div><Image src={g2} alt ="dd"/>
           <p className="font-clash font-medium text-[12px] mt-3 mb-2">The Dandy chair</p><p className="font-clash font-medium text-[12px] mb-3">$250</p>
           
           </div>
           
         </div>
         <div className="flex justify-center items-center pt-[2.5rem]"><Image src={g3} alt="dd" /></div><br/>
      </div>
      <UpperFooter/>
      <div className="flex justify-center items-center">
        <Image src={ff} alt="" className="sm:hidden md:block w-full"/>
        <Image src={ff1} alt="ndjsnd" className="sm:block md:hidden w-[29rem]" />
        
      </div>
      <br/><br/>
    </div>
  );
}
