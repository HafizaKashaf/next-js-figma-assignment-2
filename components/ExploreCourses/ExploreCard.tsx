import React from 'react';
import Image from 'next/image';
interface Props{
    image:string
    title:string
    paragraph:string

}

const ExploreCard = ({image,title,paragraph}:Props) => {
  return (
    <div className=' h-[132px]  bg-[#F7F7F7]  rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110  flex items-center justify-center'>
    <Image
    src={image}
    alt='icon' 
    width={100}
    height={100}
    className='bg-[#FFFFFF] rounded-md  gap-[10px]'/>
    <div className='w-[246.67px] h-[57px] pl-[12px]'>
    <h1 className='font-roboto font-semibold text-[20px] leading-[30px]'>{title}</h1>
    <p className='font-roboto font-normal text-[18px] leading-[27px]'>{paragraph}</p>
    </div>

      
    </div>
  )
}

export default ExploreCard
