import React from 'react'
import MissionIcon from "../assets/images/Mission-icon.png"
import VisionIcon from "../assets/images/Vision-icon.png"
import CoreValuesIcon from "../assets/images/Core-values-icon.png"
import Dots2 from "../assets/images/dots-2.png"
import Ellipse3 from "../assets/images/Ellipse-3.png"
import Arrow from "../assets/images/arrow-stack-up.png"
import SectionHeader from './SectionHeader'

export default function VisionMissionValues() {
  return (
    <section className='bg-[#FFF5C0] py-18 sm:py-22 md:py-26'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] text-center'>
            <SectionHeader title={"Our Vision, Mission and Core Values"}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-sm:place-items-center gap-12 sm:gap-6 mt-18'>

                {/*Card 1*/}
                <div className='relative max-sm:max-w-[360px]'>
                    <div className='relative flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30 z-10 h-full'>
                        <h5 className='text-[#000000] font-medium max-lg:text-xl lg:text-2xl'>Mission</h5>
                        <img src={MissionIcon} alt="Mission Icon" className='sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-60'/>
                        <p className='text-[#000000] text-base md:leading-snug px-14 sm:px-4 md:px-8 lg:px-14 xl:px-14 2xl:px-16 mt-2 md:mt-2 xl:mt-4 2xl:mt-6'>To be a pioneer and advocate in expanding educational opportunities and developing global talent in Nigeria.</p>
                        <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                    </div>
                    <img src={Ellipse3} alt="Ellipse Icon" className='absolute max-sm:top-[475px] max-md:w-16 max-lg:w-20 max-2xl:w-24 -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 2xl:-bottom-11 right-52 max-sm:-left-6 max-md:-left-7 max-lg:-left-9 lg:-left-10 z-0'/>
                </div>
                
                {/*Card 2*/}
                <div className='relative max-sm:max-w-[360px] flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30'>
                    <h5 className='text-[#000000] font-medium max-lg:text-xl lg:text-2xl'>Vision</h5>
                    <img src={VisionIcon} alt="Mission Icon" className='sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-60'/>
                    <p className='text-[#000000] text-base md:leading-snug px-14 sm:px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-16 mt-2 md:mt-2 xl:mt-4 2xl:mt-6'>To unleash youthful talents through formal and informal education, proffer solutions to societal issues and advance sustainable education across Nigeria.</p>
                    <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                </div>

                {/*Card 3*/}
                <div className='relative max-sm:max-w-[360px] flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30 max-sm:w-full sm:mt-2 md:mt-4 lg:mt-0'>
                    <h5 className='text-[#000000] font-medium max-lg:text-xl lg:text-2xl'>Core Values</h5>
                    <img src={CoreValuesIcon} alt="Mission Icon" className='sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-60'/>
                    <ul className='text-[#000000] text-base md:leading-snug px-14 sm:px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-16 mt-2 md:mt-2 xl:mt-4 2xl:mt-6 text-left'>
                        <li>• Community</li>
                        <li>• Equity and Inclusion</li>
                        <li>• Responsibility</li>
                        <li>• Perseverance</li>
                        <li>• Service</li>
                    </ul>
                    <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                    <img src={Arrow} alt="Arrow Icon" className='w-12 max-lg:w-12 max-xl:w-16 max-2xl:w-20 2xl:w-20 absolute -top-6 sm:-top-6 lg:-top-8 xl:-top-10 2xl:-top-10.5 -right-5.5 sm:-right-3.5 lg:-right-5.5 xl:-right-7 2xl:-right-8'/>
                </div>
            </div>
        </div>
    </section>
  )
}
