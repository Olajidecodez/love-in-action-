import React from 'react'
import BeliefSectionImage from "../assets/images/belief-section-img.png"
import Ellipse from "../assets/images/Ellipse-4.png"
import Star from "../assets/images/Vector.png"

export default function Belief() {
  return (
    <section className='bg-[#1C1C1C] py-32'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] grid grid-cols-1 md:grid-cols-2 place-items-center'>
            <div>
                <h3 className='font-medium text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#FFFFFF] leading-snug'>We believe education should be accessible to all kids, regardless of their background or circumstances, empowering them to unlock their full potential and contribute meaningfully to society.</h3>
            </div>
            <div className='relative w-full'>
                <div className='relative w-full p-10 sm:p-24 md:p-6 lg:py-12 lg:pl-18 2xl:py-12 2xl:pl-16 z-10'>
                    <img src={BeliefSectionImage} alt="Happy Kids" className='w-full rounded-4xl'/>
                </div>
                <img src={Ellipse} alt="Ellipse Icon" className='absolute top-8 right-4 sm:top-18 md:top-0 z-0 sm:right-12 md:-right-8 w-[52px] sm:w-[68px] md:w-[78px] lg:w-[88px] xl:w-[96px] 2xl:w-[100px]'/>
                <img src={Star} alt="Star Icon" className='absolute -bottom-14 sm:-bottom-10 left-0 sm:left-0 md:-left-11 w-[50px] sm:w-[56px] md:w-[66px] lg:w-[76px] xl:w-[84px] 2xl:w-[88px]'/>
            </div>
        </div>
    </section>
  )
}
