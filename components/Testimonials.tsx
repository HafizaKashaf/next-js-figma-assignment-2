import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div>
        <div className=' w-full w[1280] h-[830.89px]    py-[112px] flex flex-col gap-[80px] bg-[#F7F7F7] items-start max-sm:w-[428px] max-sm:h-[681.89px] max-sm:px-[24px] max-sm:py-[48px] max-sm:bg-[#FFFFFF]'>
            <div className='w-[560px] h-[109px] flex flex-col gap-[24px] md:lg:ml-[64px] max-sm:w-[361px] max-sm:h-[120px] '>
                <h1 className='font-roboto font-bold text-[48px] leading-[57.6px] text-[#000000] max-sm:hidden'>Customer testimonials</h1>
                <h1 className='lg:md:hidden  h-[42px] font-roboto font-bold text-[32px] leading-[41.6px] text-center'>What Our Student Say</h1>
                <p className='w-[560px] h-[27px] font-roboto font-normal text-[18px] leading-[27px] text-[#000000] max-sm:w-[361px] max-sm:h-[54px] max-sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className=' xl:w-[1152px] w-[768px] h-[417.89px] flex flex-col gap-[48px] md:lg:mx-[64px] max-sm:w-[380px] max-sm:h-[417.89px]'>
                <div className='h-[321.89px] flex flex-row gap-[32px]'>
                  {/* Card1 */}
                 <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] border border-solid border-[#000000] max-sm:w-[380px]'>
                    <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'>
                        <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                    </div>
                    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px]'>
                        <p className='font-roboto font-normal text-[18px] leading-[27px] text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className='w-[254px]
                        h-[56px] flex flex-row gap-[20px]'>
                            <Image 
                            width={56}
                            height={56}
                            className='rounded-[50%]'
                            src='/images/image3.png' 
                            alt="image" />
                            <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>James Nduku</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>Software Developer</p>
                        </div>
                        </div>
                    </div>
               </div>
             {/* Card2 */}
             <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] border border-solid border-[#000000] max-sm:hidden'>
                    <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'>
                        <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                    </div>
                    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px]'>
                        <p className='font-roboto font-normal text-[18px] leading-[27px] text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className='w-[254px]
                        h-[56px] flex flex-row gap-[20px]'>
                            <Image 
                            width={56}
                            height={56}
                            className='rounded-[50%]'
                            src='/images/image1.png' 
                            alt="image" />
                            <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Erick Kipkemboi</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>Scrum Master</p>
                        </div>
                        </div>
                    </div>
               </div>
               {/* Card3 */}
               <div className='w-[362.67px] h-[321.89px] p-[32px] flex flex-col gap-[24px] border border-solid border-[#000000] max-sm:hidden'>
                    <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'>
                        <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                         <Image  
                        src='/images/star2.png' alt=''
                        width={20}
                        height={18.89}
                        />
                    </div>
                    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px]'>
                        <p className='font-roboto font-normal text-[18px] leading-[27px] text-[#000000]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        <div className='w-[254px]
                        h-[56px] flex flex-row gap-[20px]'>
                            <Image 
                            width={56}
                            height={56}
                            className='rounded-[50%]'
                            src='/images/image6.png' 
                            alt="image" />
                            <div className='w-[178px] h-[48px] my-[4px]'>
                            <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Stephen Kerubo</p>
                            <p className='text-[16px] h-[24px] leading-[24px]'>UI/UX Designer</p>
                        </div>
                        </div>
                    </div>
               </div>
             </div>
             {/* Content 2 */}

              <div className='w-[760px] xl:w-[1152px] h-[48px] flex justify-between max-sm:w-[380px] max-sm:h-[48px]'>
                <div className='w-[72px] h-[8px] flex flex-row gap-[8px] my-5'>
                <div className='rounded-full h-2 w-2 bg-black'></div>
                <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
                <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
                <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
                <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>

                </div>

                <div className='w-[111px] h-[48px] flex gap-[15px]'>
                <button className="w-12 h-12">
                    <Image 
                    width={48}
                    height={48}
                    src='/images/button1.png' 
                    alt="" /></button>
                <button className="w-12 h-12">
                    <Image
                    width={48}
                    height={48} 
                    src='/images/button2.png'
                    alt='' /></button>
               </div>
             </div>
         </div>
     </div>


            
    </div>



        
      
   
  )
}

export default Testimonials
