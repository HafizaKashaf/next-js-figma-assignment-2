import React from 'react';
import Image from 'next/image';

const Courses = () => {
  return (
    <div >
        <div className='w-full w[1280px] h-[1742px] py-[112px] gap-[60px] bg-[#FFFFFF] max-sm:w-[428px] max-sm:h-[2135px] max-sm:px-[24px] max-sm:py-[48px]'>
            {/* section TITLE */}
            <div className='flex justify-center'>
            <div className='w-[768px] h-[118px] grid grid-cols-1 gap-[16px] max-sm:w-[249px] max-sm:h-[93px]'>
                <h1 className='w-[768px] h-[67px] font-roboto font-bold text-[56px] leading-[7.2px]  flex items-center justify-center text-[#000000] max-sm:text-[32px] max-sm:w-[249px] max-sm:h-[42px] max-sm:text-center '>Courses</h1>
                <p className='w-[768px] h-[27px] font-[roboto] font-normal text-[18px] leading-[27px] text-center text-[#000000]  max-sm:w-[249px] max-sm:h-[27px] max-sm:text-center '>Your Ultimate Guide to learning</p>
            </div>
            </div>
            {/*Content  */}

            <div className=' mt-4 w-full w[1280px] h-[1340px] flex flex-col gap-[64px] items-center max-sm:w-[380px] max-sm:h-[1898px]  '>
                <div className='w-[336px] h-[40px] flex mx-[472px]'>
                   <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[87px] border-solid border-[#676767] border-b-[1px]">Popular</div>
                   <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[140px]">Recommended</div>
                   <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[109px]">Best Price</div>
                </div>
                {/* COURSES */}
                <div className='h-[1132px]  w-[1280px] flex flex-col gap-[64px] items-center max-sm:w-[380px] max-sm:h-[1690px] '>
            <div className='h-[534px] w-full flex flex-row gap-[32px]   w[1280px] justify-center  max-sm:grid max-sm:grid-col-1 '>
                {/* Course1 */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className=" w-[405px] h-[300px]"><Image width={405} height={300} src='/images/course1.png'  alt="course1" 
                     /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Design</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'>
                                        <Image className='rounded-[1px]'
                                         src='/images/star1.png' alt="star"
                                         width={24}
                                         height={24} /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">UX/UI Design 201</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* Course2 */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className="w-[405] h-[300px]"><Image  width={405} height={300} src='/images/course2.png' alt="course2" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Programmimg</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src='/images/star1.png' alt="star" 
                                     width={24}
                                     height={24}/></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to Python</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* Course3*/}
                <div className='w-[405] h-[534px] rounded-[5px] xl:flex  flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className="w-[405]  h-[300px]"><Image  width={405} height={300} src='/images/course3.png'  alt="course3" /></div>
                    <div className="ml-[16px] w-[405] h-[210px] flex flex-col gap-[24px] max-sm:mt-4">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Business</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src='/images/star1.png'  alt="star" 
                                     width={24}
                                     height={24}/></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Data Analysis for Beginners</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='h-[534px] flex flex-row gap-[32px] w[1280px] justify-center max-sm:hidden'>
                {/* Course4 */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className="w-[405px] h-[300px]"><Image   width={405} height={300} src='/images/course4.png'  alt="course4" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Art</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src='/images/star1.png'  alt="star" 
                                     width={24}
                                     height={24}/></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Art Specialization</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* Course5 */}
                <div className='w-[405] h-[534px] rounded-[5px] flex flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className="w-[405] h-[300px]"><Image  width={405} height={300} src='/images/course5.png'  alt="course5" /></div>
                    <div className="pl-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Law</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src='/images/star1.png'  alt="star"
                                     width={24}
                                     height={24} /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Rule of Law</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
                {/* Course6 */}
                <div className='w-[405] h-[534px] rounded-[5px]  hidden xl:flex flex-col gap-[24px] bg-[#F7F7F7] hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 '>
                    <div className="w-[405] h-[300px]"><Image  width={405} height={300} src='/images/course6.png'  alt="course6" /></div>
                    <div className="ml-[16px] w-[405] h-[210px] flex flex-col gap-[24px]">
                        <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                            <div className='h-[24px] flex'>
                                <p className='w-[326px] text-[14px] font-semibold leading-[21px]'>Tech</p>
                                <div className="w-[48px] h-[24px] flex">
                                    <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src='/images/star1.png'  alt="star"
                                     width={24}
                                     height={24} /></div>
                                    <p className='w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'>5.0</p>
                                </div>
                            </div>
                            <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to webflow</h5>
                            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="w-[382px] h-[40px] flex gap-[16px]">
                            <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                            <button className="w-[77px] h-[40px]">$400</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <button className=' w-[152px] h-[40px] mx-[564px] text-[16px] leading-[24px] border-solid border-black border-[1px] rounded-[5px]'>View All Courses</button>
            </div>
        </div>
      
    </div>
  )
}

export default Courses
