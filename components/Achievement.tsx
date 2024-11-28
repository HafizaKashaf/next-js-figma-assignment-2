import React from 'react'

const Achievement = () => {
  return (
    <div> 
        {/* Achievement */}
        <div className=' w-full w[1280px] h-[488px] py-[112px] gap-[80px] bg-[#FFFFFF] max-sm:w-[428px] max-sm:h-[451px] max-sm:px-[24px] max-sm:py-[48px]'>
            <div className='w-[1152px] h-[136px] gap-[16px] max-sm:w-[380px] max-sm:h-[147px] lg:px-[64px] '>
                <h1 className='w-[1152px] h-[58px] font-roboto font-bold text-[48px] leading-[57.6px] flex justify-center items-center text-[#000000]  max-sm:w-[380px] max-sm:h-[42px] max-sm:text-[32px] '>Our Achievements</h1>
                <p className='w-[1152px] h-[54px] font-roboto font-normal text-[18px] leading-[27px] text-center text-[#000000] mt-6  max-sm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <p className='max-sm:w-[362px] max-sm:h-[81px] lg:hidden font-roboto font-normal text-[18px] leading-[27px] text-center text-[#000000] max-sm:mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className='w-[1256px] h-[96px] mt-7  grid max-sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4   items-center gap-[24px] max-sm:w-[380px] max-sm:h-[176px] '>
                <div className='w-[296px] h-[80px] flex flex-col justify-center items-center max-sm:w-[182px] max-sm:h-[60px] '>
                    <h1 className='w-[91px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#000000] max-sm:text-[20px] max-sm:text-center'>+200</h1>
                    <p className='w-[59px] h-[24px] font-roboto text-[16px] font-normal leading-[24px] text-[#000000] text-center'>Courses</p>
                </div>
                <div className='w-[296px] h-[80px] flex flex-col justify-center items-center max-sm:w-[182px] max-sm:h-[60px] '>
                    <h1 className='w-[72px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#000000]  max-sm:text-center max-sm:text-[20px]'>50K</h1>
                    <p className='w-[59px] h-[24px] font-roboto text-[16px] font-normal leading-[24px] text-[#000000] text-center'>Mentors</p>
                </div>

                <div className='w-[296px] h-[80px] flex flex-col justify-center items-center max-sm:w-[182px] max-sm:h-[60px] '>
                    <h1 className='w-[91px] h-[48px] font-roboto font-bold text-[40px] leading-[48px]  max-sm:text-center text-[#000000] max-sm:text-[20px] '>370k</h1>
                    <p className='w-[64px] h-[24px] font-roboto text-[16px] font-normal leading-[24px] text-[#000000] text-center'>Students</p>
                </div>

                <div className='w-[296px] h-[80px] flex flex-col justify-center items-center max-sm:w-[182px] max-sm:h-[60px]  '>
                    <h1 className='w-[91px] h-[48px] font-roboto font-bold text-[40px] leading-[48px]  max-sm:text-center text-[#000000] max-sm:text-[20px]  '>100+</h1>
                    <p className='w-[85px] h-[24px] font-roboto text-[16px] font-normal leading-[24px] text-[#000000] text-center'>Recognition</p>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Achievement
