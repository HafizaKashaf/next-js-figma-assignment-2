import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div>
        <div className='w-full w[1280px] h-[895px]  py-[112px] flex flex-col gap-[60px] bg-[#F7F7F7] items-center max-sm:w-[428px] max-sm:h-[1075px] max-sm:px-[24px] max-sm:py-[48px]'>
            <div className='w-full w[768px] h-[109px] mx-[256px] flex flex-col gap-[16px] max-sm:w-[363px] max-sm:h-[120px]'>
                <h1 className='font-roboto font-bold text-[48px] leading-[57.6px] text-center'>Our team</h1>
                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            </div>
            {/* content */}
            <div className=' w-full w[1280px] h-[482px] flex flex-col gap-[64px] max-sm:w-[380px] max-sm:h-[723px] '>
                {/* profile1 */}
                <div className=' sm:w-[640px] md:w-[70px] xl:[1280px] h-[209px] flex flex-row xl:gap-[48px] justify-between  max-sm:grid max-sm:grid-col-1 max-sm:w-[380px] max-sm:h-[723px] max-sm:gap-[48px]'>
                    <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image1.png' alt='image1'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'>James Nduku</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Marketing Coordinator</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>
                    </div>
                        {/* profile2 */}

                        <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image2.png' alt='image2'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'> Joseph Munyambu</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Nursing Assistant</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>
                    </div>

                    {/* profile3 */}
                    <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image3.png' alt='image3'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'>Joseph Ngumbau</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Medical Assistant</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>
                    </div>

                </div>
                {/* Raw2 */}
                     
                     
                <div className='h-[482px] flex flex-col gap-[64px] max-sm:hidden'>
                <div className=' sm:w-[640px] md:w-[70px] xl:[1280px] h-[209px] flex flex-row xl:gap-[48px] justify-between'>
                    <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image4.png' alt='image4'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'>Erick Kipkemboi</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Web Designer</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>
                    </div>
                        {/* profile5*/}

                        <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image5.png' alt='image5'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'>Stephen Kerubo</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>President of Sales</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>
                    </div>

                    {/* profile6 */}
                    <div className=' w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
                        <div>
                            <Image
                            className= ' w-[80px] h-[80px]  mx-[157.33px]'
                            src='/images/image6.png' alt='image6'
                            width={80}
                            height={80} />
                        </div>
                        <div className='w-[394.67px] h-[57px]'>
                                <h1 className='font-roboto font-semibold text-[20px] leading-[30px] text-center'>John Leboo</h1>
                                <p className='font-roboto font-normal text-[18px] leading-[27px] text-center'>Dog Trainer</p>

                        </div>
                        <div className='w-[100px] h-[24px] flex gap-[14px]  mx[147.33px]'>
                                <FaLinkedin
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaTwitter
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />
                                <FaDribbble
                                className='w-[24px] h-[24px] flex items-center justify-center' 
                                width={18} 
                                height={18} />

                        </div>

                    </div>

                </div>
                        

                        
                  </div>
                           
   

            </div>
            {/* button */}
            <div  >
               <button className='w-[89px] h-[40px] rounded-md border px-[16px] py-[8px] border-black font-roboto font-normal text-[15px] leading-[24px] text-center  md:lg:hidden'>View All </button>
            </div>
        </div>
      
    </div>
  )
}

export default Team
