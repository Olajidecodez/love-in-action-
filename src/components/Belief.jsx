import React from 'react'
import BeliefSectionImage from "../assets/images/belief-section-img.png"
import Ellipse from "../assets/images/Ellipse-4.png"
import Star from "../assets/images/Vector.png"

export default function Belief() {
  return (
    <section className='bg-[#1C1C1C] py-32'>
        <div className='container mx-auto grid grid-cols-2 place-items-center'>
            <div>
                <h3 className='font-medium text-5xl text-[#FFFFFF] leading-snug'>We believe education should be accessible to all kids, regardless of their background or circumstances, empowering them to unlock their full potential and contribute meaningfully to society.</h3>
            </div>
            <div className='relative w-full'>
                <div className='relative w-full py-12 pl-16 z-10'>
                    <img src={BeliefSectionImage} alt="Happy Kids" className='w-full rounded-4xl'/>
                </div>
                <img src={Ellipse} alt="Ellipse Icon" className='absolute top-0 z-0 -right-8'/>
                <img src={Star} alt="Star Icon" className='absolute -bottom-10 -left-11'/>
            </div>
        </div>
    </section>
  )
}
