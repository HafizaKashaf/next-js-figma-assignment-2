import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbarfirst = () => {
  return (
    <div>
      {/* Navbar1 */}
    <div id='navbar1' className=' w-full w[1280px] h-[54px]  pr-[54px] pl-[62px] bg-[#F7F7F7]  border-b border-[#000000]  justify-between items-center max-sm:hidden'>
        <div className='w-[1154px] h-[54px] pt-[12px] pb-[12px] flex gap-[32px] '>

            {/* <img
             src='./images/content.png' 
             alt=''/> */}
            <div className='w-[368px] h-[30px] gap-[16px] flex'>
                <p className='font-roboto mt-[5px] w-[205px] h-[21px] text-[13px] font-normal leading-[21px] text-[#000000]'>Phone Number: 956 742 455 678</p>
                <span className="border border-[#676767] h-[30px] "></span>
                <p className=' mt-[5px] w-[149px] h-[21px] Roboto text-[13px] leading-[21px] text-[#000000] font-normal'>Email:info@ddsgnr.com</p>
            </div>
            <div className='w-[736px] h-[24px] gap-[16px] flex justify-end'>
                <div className='w-[132px] h-[24px] gap-[16px] flex items-center justify-items-center'>
                    <FaFacebookF width={24} height={24} />
                    <BsInstagram  width={24} height={24}/>
                    <FaTwitter  width={24} height={24}/>
                    <FaLinkedin width={24} height={24}/>
                </div>
             
            </div>
             
        </div>
    </div>
    </div>
  )
}

export default Navbarfirst
