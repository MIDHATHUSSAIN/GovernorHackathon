import firstimg from "../Images/Screenshot 2022-05-31 at 9.33.png"
import secondeimg from "../Images/Screenshot 2022-05-31 at 9.33 (1).png"
import thirdimg from "../Images/Screenshot 2022-05-31 at 9.33 (2).png"
import pc from "../Images/Product Card.png"
import pc1 from "../Images/Product Card (1).png"
import bt from "../Images/Button Small.png"
import btt from "../Images/Button Small (1).png"
import p from "../Images/Product v3.png"
import p1 from "../Images/Product v3 (1).png"
import p2 from "../Images/Product v3 (3).png"
import p3 from "../Images/Email sign-up.png"
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="bg-[#2A254B] pt-6">
       <div className=" text-[48px] font-medium leading-[67.2px] lg:pt-[100px] lg:ml-[119px] font-clash text-white sm:ml-7 sm:pt-8" >
         Build ecom sites, super fast
       </div>
       <div className="text-white font-satoshi font-[400] text-[13px] leading-[21px] lg:mt-[16px] lg:ml-[121px] sm:ml-7 sm:mb-8">This template was built to help you rapidly, and modularly, build out high quality e-commerce concepts using pre-built content blocks, components and styles.<br></br>
        Customise and play around with the template to match your specific requirements, and most of all have fun with it! </div>
        <div className="flex  gap-12 lg:ml-11 lg:mr-11 lg:mt-14 text-white text-[12px] sm:flex-col sm:ml-8 xl:flex-row ">
          <div className="bg-[#4E4D93] w-[1000px] h-[440px] pt-6 sm:w-[600px] lg:w-[800px]" >
           <span className=" ml-[47px] font-medium font-clash text-[24px]">Use the styles</span><br /><br/>
           <div className="font-satoshi ml-[47px] text-[11px]">
           Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations <br/> minimising the risk of inconsistencies and streamlining the design process.<br/><br/>
           Within this template you can find color and type styles,  and their definitions on the style <br/>
           guide page. To use them simply select them from the Figma style panel as shown below.
           </div>
           <div className="mt-12 flex justify-evenly ">
              <div><Image src = {firstimg} alt="hjjk" className="w-[10rem] h-[14.3rem] pt-16"/></div>
              <div><Image src = {secondeimg} alt="hjjk" className="w-[10rem] h-[14.3rem] "/></div>
              <div><Image src = {thirdimg} alt="hjjk" className="w-[10rem] h-[14.3rem] pt-16"/></div>
           </div>

          </div>
          <div className="bg-[#4E4D93] w-[1000px] h-[440px] pt-6 sm:w-[600px] lg:w-[800px]">
           <span className=" ml-[47px] font-medium font-clash text-[24px]">Use the components</span><br /><br/>
           <div className="font-satoshi ml-[47px] text-[11px]">
            There’s a bunch of pre-configured components for you to use in this free template. Simply go to <br/>
            the Style Guide page and under the components header you can see everything included.<br/><br/> Buttons, steppers, filter options and more for you to integrate into your screens and modify to <br/>
            your tastes and requirements. 
           </div>
           <div className="mt-8 flex justify-evenly ">
              <div><Image src = {pc} alt="hjjk" className="w-[10rem] h-[11rem] "/><span className="font-[400] font-clash text-[8px]">The Dandy chair <br/>$250</span></div>
              <div><Image src = {pc1} alt="hjjk" className="w-[10rem] h-[11rem] "/><span className="font-[400] font-clash text-[8px]">Small tables <br/>$250</span></div>
              <div >
                  <div><Image src = {bt} alt="hjjk" className="w-[5rem] h-[2.5rem] "/></div><br/>
                  <div><Image src = {btt} alt="hjjk" className="w-[5rem] h-[2.5rem] "/></div><br/>
                  <div><Image src = {bt} alt="hjjk" className="w-[5rem] h-[2.5rem] "/></div><br/>
                  <div><Image src = {btt} alt="hjjk" className="w-[5rem] h-[2.5rem] "/></div><br/>
              
              </div>
              <div >
                
                <div>  <input type="checkbox" id="furniture" />Furniture
                </div><br/>
                <div><input type = "checkbox" checked/>Homeware</div><br/>
                <div><input type = "checkbox"/>Vases</div><br/>
                <div><input type = "checkbox"/>Products</div><br/>
                <div><input type = "checkbox"/>Components</div><br/>
                <div><input type="checkbox"/>Styleguide</div>
              </div>
           </div>

          </div>
        </div>
        <div className="flex  gap-12 lg:ml-11 lg:mr-11 lg:mt-14 text-white text-[12px] sm:flex-col sm:ml-8 sm:mt-8 xl:flex-row">
          <div className="bg-[#4E4D93] w-[1000px] h-[390px] pt-6 sm:w-[600px] lg:w-[800px]">
           <span className=" ml-[47px] font-medium font-clash text-[24px]">Check the layouts</span><br /><br/>
           <div className="font-satoshi ml-[47px] text-[11px]">
           As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes.<br/> Play around with replacing and modifying the nested content blocks and to switch device, simply use <br/>
           the content block property ‘device’ to toggle between mobile and desktop.
           </div>
           <div className="mt-8 flex justify-evenly ">
              <div><Image src = {p} alt="hjjk" className="w-[10rem] h-[14.3rem] "/></div>
              <div><Image src = {p1} alt="hjjk" className="w-[10rem] h-[14.3rem] "/></div>
              <div><Image src = {p2} alt="hjjk" className="w-[10rem] h-[14.3rem] "/></div>
           </div>

          </div>
          <div className="bg-[#4E4D93] w-[1000px] h-[390px] pt-6 sm:w-[600px] lg:w-[800px]">
           <span className=" ml-[47px] font-medium font-clash text-[24px]">Use the content blocks</span><br /><br/>
           <div className="font-satoshi ml-[47px] text-[11px]">
           We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections,<br/> forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing <br/> pages.
           </div>
           <div className="mt-8 flex justify-center items-center ">
              <div><Image src = {p3} alt="hjjk" className="w-[30rem] h-[14.3rem] sm:w-[38rem]"/></div>
              
           </div>

          </div>
        </div>
        <br/><br/>
    </div>
  )
}
