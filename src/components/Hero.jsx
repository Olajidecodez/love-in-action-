import React from 'react'
import HeroImg from "../assets/images/hero-img.png"
import Rectangle from "../assets/images/Rectangle.png"
import HeroDots from "../assets/images/dots.png"

export default function Hero() {
  return (
    <section className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] max-md:min-h-screen xl:h-[90.3vh] grid grid-cols-1 md:grid-cols-12 place-items-center max-md:gap-2 max-lg:gap-6 xl:gap-10 lg:gap-20 max-lg:mb-12 max-xl:mb-28'>
        <div className='flex flex-col md:col-span-6 xl:col-span-7 gap-8 md:gap-4 xl:gap-8 2xl:gap-12 self-start max-md:mt-20 mt-32'>
          <div className='flex flex-col gap-5 md:gap-4 2xl:gap-5'>
            <h3 className='md:text-sm xl:text-base 2xl:text-lg text-[#000000]'>A LITTLE HELP IS WHAT THEY NEED.</h3>
            <div>
              <h1 className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold xl:whitespace-nowrap'>Extend a helping hand, <br /><span className='hidden 2xl:flex'> Give hope.</span></h1>
              <h1 className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold hidden max-2xl:flex mt-0'>Give hope.</h1>
            </div>
            <h3 className='md:text-sm lg:text-base xl:text-xl font-medium xl:pr-18'>The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates.</h3>
          </div>
          <div className='flex space-x-4 items-center'>
            <a href="" className='border-2 border-[#FFB703] text-[#FFB703] max-xl:py-0.5 max-xl:px-3 max-2xl:py-1 max-2xl:px-3.5 py-1.5 px-4 rounded-lg max-lg:text-sm'>
                Get Involved
            </a>
            <a href="" className='bg-[#FFB703] text-white max-xl:py-1 max-xl:px-4.5 max-2xl:py-2 max-2xl:px-5.5 py-2.5 px-6 rounded-3xl font-semibold max-lg:text-sm'>
                Donate
            </a>
          </div>
        </div>
        <div className='flex md:col-span-6 xl:col-span-5 w-full max-md:w-full max-lg:w-[400px] 2xl:w-[615px] max-md:px-0 max-lg:px-4 relative max-2xl:self-start max-xl:mt-24 max-2xl:mt-24'>
          <img src={Rectangle} alt="" className='absolute z-0 top-0 left-0 max-xl:w-[90px] max-lg:w-[80px]'/>
          <div className='w-full z-10 py-12 max-lg:py-6 max-lg:pl-8 pl-10'>
            <img src={HeroImg} alt="" className='w-full rounded-4xl'/>
          </div>
          <img src={HeroDots} alt="" className='absolute max-lg:bottom-14 bottom-18 max-lg:-left-1 lg:-left-14 z-0 max-xl:w-[312px] max-lg:w-[212px]' />
          <img src={Rectangle} alt="" className='absolute z-0 bottom-0 max-md:right-0 max-lg:right-4 right-0 max-xl:w-[90px] max-lg:w-[80px]'/>
        </div>
    </section>
  )
}
