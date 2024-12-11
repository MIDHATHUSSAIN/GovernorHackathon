import React from 'react'
import Link from 'next/link'

export default function Navbar2() {
  return (
    <div className='sm:hidden md:block'>
        <ul className='flex gap-8 justify-center items-center font-satoshi font-medium text-[12px] '>
        <li><Link href="/Home1">Plant pots</Link></li>
        <li><Link href="/Product">Ceramics</Link></li>
        <li><Link href="/Product2">Tables</Link></li>
        <li><Link href="/Product3">Chairs</Link></li>
        <li><Link href="/Product4">Crockery</Link></li>
        <li><Link href="/About">Tableware</Link></li>
        <li><Link href="">Cutlery</Link></li>


        </ul>
    </div>
  )
}
