import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
   <div> 
     <div className=' w-full max-sm:w-[428px]  w[1280px] max-sm:h-[780px] h-[800px] sm:flex'>

       {/* content */}
        <div className='w-1/2 max-sm:w-[428px] pr-[60px] pl-[70px] h-[800px] flex items-center max-sm:h-[390px] max-sm:px-[24px]'>
        <div className='w-[640px] h-[300px]  gap-[24px] max-sm:w-[428px]   '>
            <div className='w-[500px] h-[212px] gap-[24px] max-sm:w-[380px] ]'>
                <h1 className='w-[500px] h-[134px] font-bold text-[56px] leading-[67.2px] font-roboto text-[#000000] max-sm:text-[40px]  max-sm:w-[380px] max-sm:leading-[48px] max-sm:h-[96px] flex justify-center'>Learn new skills online with ease</h1>
                <p className='w-[500px] h-[54px] font-roboto font-normal text-[18px] leading-[27px] text-[#000000] mt-[29px]  max-sm:w-[380px] '>
                Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>
            <div className='w-[358px] h-[64px] pt-[16px] flex gap-[16px] mt-[24px] max-sm:mt-0'>
                 <button className='w-[178px] h-[48px] rounded-md border px-6 py-3 flex gap-[8px] bg-[#000000] border-[#000000] text-[15px] text-[#FFFFFF] font-roboto leading-[24px]'>Start learning now</button>
                 <button className='w-[164px] h-[48px] rounded-md border px-6 py-3 flex gap-[8px] border-[#000000] font-roboto font-normal text-[15px] leading-[24px] text-[#000000]'>Explore Courses</button>
            </div>
        </div>
        </div>

       {/* picture */}
        <div  className='w-1/2 h-[800px] max-sm:w-[428px] max-sm:h-[390px]'>
       <Image src="/images/Header.png"
         alt="Header"
         width={640}
         height={800}
         className='w-full w[640px] h-[800px] max-sm:w-[428px] max-sm:h-[390px]'
        </div>
      
     </div>
     
  </div>
  )
}

export default Hero
