import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";






const NavbarSec = () => {
  return (
  <div>
    
        {/* Navbar2 */}
    
    <div className="flex items-center w-full w[1280px] h-[72px] bg-[#F7F7F7] border-b border-[#676767] px-[16px] mt-[16px] max-sm:mt-0 pl-[64px] max-sm:pl-[24px]">
        <div className="flex items-center justify-between w-[1152px] h-[44px]  ">
             <Image
            width={130.6}
            height={41}
               src="/images/Ddsgnr.png"
               alt="Ddsgnr Logo"
                className="w-[130.6px] h-[41px] max-sm:h-[30.38px] "
            />
            <div className='lg:md:hidden'>
                <IoMdMenu
                
                className='w-[24px] h-[24px]'/>
            </div>
           <div className='w-[910px] h-[44px] gap-[32px] flex max-sm:hidden'>
             <ul className='w-[687px] h-[44px] gap-[32px] flex justify-between items-center'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Courses</Link>
                </li>
                <li>
                    <Link href="/">Services</Link>
                </li>
                <li>
                    <Link href="/">Achievement</Link>
                </li>
                <li>
                    <Link href="/">About Us</Link>
                </li>
                <li>
                    <Link href="/">Testimonial</Link>
                </li>
             </ul>
            <div className='w-[191px] h-[40px] flex gap-[16px]'>
             <button className='w-[80px] h-[40px]  px-5 py-2 text-sm rounded-md border gap-[8px] border-[#000000] '>Login</button>
             <button className='w-[95px] h-[40px] px-5 py-2 gap-[8px] text-sm rounded-md text-white bg-black border-[#000000]'>Sign Up</button>
             
             </div>
             

            </div>
        </div>
     </div>
        
    
      
 </div>
  
  )
  
}

export default NavbarSec
