import React from 'react'
import HeroImg from "../assets/images/hero-img.png"
import Rectangle from "../assets/images/Rectangle.png"
import HeroDots from "../assets/images/dots.png"

export default function Hero() {
  return (
    <section className='container mx-auto h-[90.3vh] grid grid-cols-12 place-items-center gap-20'>
        <div className='flex flex-col col-span-7 gap-12 self-start mt-32'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-lg text-[#000000]'>A LITTLE HELP IS WHAT THEY NEED.</h3>
            <h1 className='text-7xl font-semibold'>Extend a helping hand, <br /> Give hope.</h1>
            <h3 className='text-2xl font-medium'>The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates.</h3>
          </div>
          <div className='flex space-x-4 items-center'>
            <a href="" className='border-2 border-[#FFB703] text-[#FFB703] py-1.5 px-4 rounded-lg font-[var(--font-libre)]'>
                Get Involved
            </a>
            <a href="" className='bg-[#FFB703] text-white py-2.5 px-6 rounded-3xl font-semibold'>
                Donate
            </a>
          </div>
        </div>
        <div className='flex col-span-5 w-full relative'>
          <img src={Rectangle} alt="" className='absolute z-0 top-0 left-0'/>
          <div className='w-full z-10 py-12 pl-10'>
            <img src={HeroImg} alt="" className='w-full rounded-4xl'/>
          </div>
          <img src={HeroDots} alt="" className='absolute bottom-18 -left-14 z-0' />
          <img src={Rectangle} alt="" className='absolute z-0 bottom-0 right-0'/>
        </div>
    </section>
  )
}
