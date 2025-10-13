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
    <section className='bg-[#FFF5C0] py-26'>
        <div className='container mx-auto text-center'>
            <SectionHeader title={"Our Vision, Mission and Core Values"}/>
            <div className='relative grid grid-cols-3 gap-6 mt-18'>
                <div className='relative flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30 z-10'>
                    <h5 className='text-[#000000] font-medium text-2xl'>Mission</h5>
                    <img src={MissionIcon} alt="Mission Icon" className='w-60'/>
                    <p className='text-[#000000] text-base px-28 mt-6'>To be a pioneer and advocate in expanding educational opportunities and developing global talent in Nigeria.</p>
                    <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                </div>
                    <img src={Ellipse3} alt="Ellipse Icon" className='absolute -bottom-11 -left-11 z-0'/>
                <div className='relative flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30'>
                    <h5 className='text-[#000000] font-medium text-2xl'>Vision</h5>
                    <img src={VisionIcon} alt="Mission Icon" className='w-60'/>
                    <p className='text-[#000000] text-base px-28 mt-6'>To unleash youthful talents through formal and informal education, proffer solutions to societal issues and advance sustainable education across Nigeria.</p>
                    <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                </div>
                <div className='relative flex flex-col gap-8 py-22 pt-14 bg-[#FFFFFF] place-items-center rounded-2xl shadow-lg/30'>
                    <h5 className='text-[#000000] font-medium text-2xl'>Core Values</h5>
                    <img src={CoreValuesIcon} alt="Mission Icon" className='w-60'/>
                    <ul className='text-[#000000] text-base px-28 mt-6 text-left'>
                        <li>• Community</li>
                        <li>• Equity and Inclusion</li>
                        <li>• Responsibility</li>
                        <li>• Perseverance</li>
                        <li>• Service</li>
                    </ul>
                    <img src={Dots2} alt="Dots" className='absolute bottom-7 right-0'/>
                    <img src={Arrow} alt="Arrow Icon" className='absolute -top-12.5 -right-8'/>
                </div>
            </div>
        </div>
    </section>
  )
}
