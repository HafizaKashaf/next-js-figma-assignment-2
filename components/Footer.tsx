import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='w-[1280px] h-[684px] p-[80px] flex flex-col gap-[80px] max-sm:w-[428px] max-sm:h-[1411px] max-sm:px-[24px] max-sm:py-[48px] max-sm:gap-[48px]  '>
            {/* News Letter */}
            <div className='w-[1120px] h-[52px] flex flex-col gap-[80px] max-sm:gap-[48px]  '>
                <div className="w[1120px] h[82px] flex lg:flex-row flex-col items-start gap-3 justify-between max-sm:flex-col max-sm:w-[380px] max-sm:h-[261px]">
                  <div className="w-[500px] h-[51px] max-sm:w-[380px] max-sm:h-[91px] ">
                     <p className="text-[18px] leading-[27px] font-semibold max-sm:text-center">Subscribe to our newsletter</p>
                     <p className="text-[16px] leading-[24px] max-sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="w-[400px] h[82px] flex flex-col gap-[16px] max-sm:w-[380px] max-sm:h-[146px]">
                      <div className='h-[48px] flex w-[400px] gap-[16px]  max-sm:flex-col  max-sm:h-[112px]'>
                         <input className='h-[48px] w-[256px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#505050] max-sm:w-[380px] max-sm:h-[48px]' placeholder='Enter your email' type="text" />
                         <button className='w-[119px] h-[48px] text-[16px] leading-[24px] border-solid rounded-[5px] border-black border-[1px] max-sm:w-[380px] max-sm:h-[48px]'>Subscribe</button>
                       </div>
                          <p className='text-[12px] leading-[18px] max-sm:text-center text-normal'>By subscribing you agree to with our <Link className='underline' href="/">Privacy Policy</Link></p>
                   </div>
                </div>
                   {/* Links */}
                <div className="w-[1120px] h-[225px] flex gap-2 justify-between max-sm:w-[380px] max-sm:h-[811px] max-sm:flex max-sm:flex-col  max-sm:gap-[32px]  ">
            <div className="w-[250px] h-[40px] max-sm:w-[380px] max-sm:flex max-sm:justify-center">
                <Image 
                width={130.6}
                height={40}
                src='/images/Ddsgnr.png'
                alt="Ddsgnrlogo" /></div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px] max-sm:text-center max-sm:w-[380px] max-sm:h-[225px]">
                <p className="text-[16px] leading-[24px] font-semibold">Courses</p>
                <p className="text-[14px] leading-[21px]">Business</p>
                <p className="text-[14px] leading-[21px]">Development</p>
                <p className="text-[14px] leading-[21px]">Technology</p>
                <p className="text-[14px] leading-[21px]">Design</p>
                <p className="text-[14px] leading-[21px]">Programming</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px] max-sm:text-center max-sm:w-[380px] max-sm:h-[225px]">
                <p className="text-[16px] leading-[24px] font-semibold">Resources</p>
                <p className="text-[14px] leading-[21px]">Career</p>
                <p className="text-[14px] leading-[21px]">Resume</p>
                <p className="text-[14px] leading-[21px]">Learning</p>
                <p className="text-[14px] leading-[21px]">Interview Preparation</p>
                <p className="text-[14px] leading-[21px]">Jobs</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px] max-sm:text-center max-sm:w-[380px] max-sm:h-[225px]">
                <p className="text-[16px] leading-[24px] font-semibold">About Us</p>
                <p className="text-[14px] leading-[21px]">Contact</p>
                <p className="text-[14px] leading-[21px]">Help/Support</p>
                <p className="text-[14px] leading-[21px]">FAQ</p>
                <p className="text-[14px] leading-[21px]">Terms and Conditions</p>
                <p className="text-[14px] leading-[21px]">Partners</p>
            </div>
        </div>

        {/* Credit */}
          
        <div className="w[1120px] h-[57px] items-end border-solid border-black border-t-[2px] pt-[33px] max-sm:w-[380px] max-sm:h-[147px]  ">
        <div className="h-[24px] flex justify-between max-sm:w-[380px] max-sm:h-[144px] max-sm:flex-col  max-sm:gap-[24px] ">
        <div className="h-[21px] flex gap-[24px] max-sm:w-[380px] max-sm:flex-col">
                    <p className=' max-sm:w-[380px] text-[14px] leading-[21px]
                    max-sm:text-center'>2023 Ddsgnr. All right reserved.</p>
                    <div className='max-sm:flex max-sm:flex-row max-sm:gap-[24px] max-sm:w-[380px]'>
                    <Link className='text-[14px] leading-[21px] underline' href="">Privacy Policy</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Terms of Service</Link>
                    <Link className='text-[14px] leading-[21px] underline' href="">Cookies Settings</Link>
                    </div>
                </div>
                <div className='flex w-[132px] h-[24px] items-center max-sm:w-[380px] max-sm:justify-center'>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'>
             <FaFacebookF/>
            </div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'>
              <BsInstagram  />
            </div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center mr-[12px]'>
                <FaTwitter/>
            </div>
            <div className='h-[24px] w-[24px]  flex justify-center items-center '>
                <FaLinkedin />
            </div>
        </div>
        </div>
        </div>


            </div>
        </div>
      
    </div>
  )
}

export default Footer
