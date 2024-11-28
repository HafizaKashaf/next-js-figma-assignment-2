import React from 'react'

const Logo = () => {
  return (
    <div>
      {/* Logo */}
     <div className=' w-full w[1280px] h-[228px] px-[64px] py-[80px] lg:flex gap-[64px] bg-[#F7F7F7] max-sm:w-[428px] max-sm:h-[239.34px]  max-sm:flex max-sm:flex-col max-sm:gap-[24px] max-sm:px-[24px] max-sm:py-[48px]'>
         <h1 className='font-roboto font-bold leading-[27px] text-[18px] w-[327px] h-[54px] md:lg:hidden'>Trusted by the world's best companies [social proof to build credibility]</h1>
         <h1 className='w-[320px] h-[68px] font-roboto font-bold text-[24px] leading-[33.6px] text-[rgb(0,0,0)] max-sm:hidden'>Trusted by 2000+ companies worldwide.</h1>
         <div className='w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] flex gap-[19.12px] items-center max-sm:h-[65.34px]'>
            <img src="/images/logo1.png" alt="logo1" className='w-[123.8px] h-[38.52px] max-sm:w-[103px] max-sm:h-[33px]'/>
            <img src="/images/logo2.png" alt="logo2" className='w-[123.8px] h-[38.52px] max-sm:w-[103px]  max-sm:h-[33px] ' />
            <img src="/images/logo3.png" alt="logo3" className='w-[123.8px] h-[38.52px] max-sm:w-[103px]  max-sm:h-[33px]' /> 
            <img src="/images/logo4.png" alt="logo4" className='w-[123.8px] h-[38.52px] max-sm:w-[103px]  max-sm:h-[33px]' />
            <img src="/images/logo5.png" alt="logo5" className='w-[123.8px] h-[38.52px] max-sm:w-[103px]  max-sm:h-[33px]' />
            <img src="/images/logo6.png" alt="logo6" className='w-[123.8px] h-[38.52px] max-sm:w-[103px]  max-sm:h-[33px]' />        
            </div>
     </div>
    </div>
  )
}

export default Logo
