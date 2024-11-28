import React from 'react'
import ExploreCard from './ExploreCard'

const HeroSection = () => {
  return (
    <div>
        {/* Explore Courses By Category */}
        <div className=' w-full w[1280px] h-[1094px] py-[112px]  bg-[#FFFFFF]  gap-[80px] max-sm:w-[428px] max-sm:h-[826px] max-sm:px-[24px] max-sm:py-[48px]'>
            {/* Heading */}
            <div className=' flex justify-center'>
            <div className='w-[786px] h-[109px] gap-[357px] max-sm:w-[385px]  max-sm:h-[162px]'>
                <h1 className='w-[786px] h-[58px] font-roboto font-bold text-[48px] leading-[57.6px] text-[#000000] max-sm:w-[385px] max-sm:h-[84px] max-sm:text-[32px] max-sm:leading-[41.6px] max-sm:text-center'>Explore Courses By Category</h1>
                <p className='w-[768px] h-[27px] font-roboto font-normal text-[18px] leading-[27px] mt-[30px] max-sm:w-[385px] max-sm:h-[54px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            </div>
            {/* Courses Category */}
          
            <div className='w-full w[1280px] h-[636px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center gap-[24px] max-sm:w-[380px] max-sm:h-[444px] mt-20'>
              <div>
              <ExploreCard title='Design & Development' image='/images/icon1.png' paragraph='50+ Courses Available'/>
              </div>
              <div>
              <ExploreCard title='Marketing' image='/images/icon2.png' paragraph='50+ Courses Available'/>
              </div>

              <div>
              <ExploreCard title='Development' image='/images/icon3.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Communication' image='/images/icon4.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Digital Marketing' image='/images/icon5.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Self Development' image='/images/icon6.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Business' image='/images/icon7.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Finance' image='/images/icon8.png' paragraph='50+ Courses Available'/>
              </div>

              <div className='max-sm:hidden'>
              <ExploreCard title='Consulting' image='/images/icon9.png' paragraph='50+ Courses Available'/>
              </div>

            </div>
            <div className='mt-10  flex justify-center'>
                
                <button className='w-[155px] h-[48px] rounded-md border px-3 py-3  border-[#000000] font-roboto font-normal text-[16px] leading-[24px]  '>
                  View All Courses
                </button>
               
                
              </div>
             
        </div>
      
    </div>
  )
}

export default HeroSection
