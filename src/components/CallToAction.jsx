import React from 'react'
import DonateImg from "../assets/images/donate-img.png"
import HelpImg from "../assets/images/help-img.png"

export default function CallToAction() {
  return (
    <section className='mt-16 md:mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='relative w-full bg-center bg-cover min-h-[300px] md:min-h-[500px] lg:min-h-[700px] flex flex-col justify-end pb-16 md:pb-24' style={{ backgroundImage: `url(${DonateImg})`}}>

                {/*Image Overlay*/}
                <div className="absolute inset-0 brightness-75 bg-center bg-cover" style={{ backgroundImage: `url(${DonateImg})` }}></div>

                <div className='relative w-[85%] md:w-[60%] mx-auto'>
                    <h4 className='text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl mb-6 font-medium'>Donate to Support <br /> Our Cause</h4>
                    <a href="" className='bg-[#FFB703] text-white text-base md:text-lg py-2 md:py-3.5 px-5 md:px-7 rounded-3xl font-semibold'>Donate</a>
                </div>
            </div>
            <div className='relative w-full bg-center bg-cover min-h-[300px] md:min-h-[500px] lg:min-h-[700px] flex flex-col justify-end pb-16 md:pb-24' style={{ backgroundImage: `url(${HelpImg})`}}>
                
                {/*Image Overlay*/}
                <div className="absolute inset-0 brightness-75 bg-center bg-cover" style={{ backgroundImage: `url(${HelpImg})` }}></div>

                <div className='relative w-[85%] md:w-[60%] mx-auto'>
                    <h4 className='text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl mb-6 font-medium'>Want to Help us do <br /> More?</h4>
                    <a href="" className='border-2 border-[#FFB703] text-[#FFB703] text-base md:text-lg py-2 md:py-3.5 px-5 md:px-7 rounded-lg'>Get Involved</a>
                </div>
            </div>
        </div>
    </section>
  )
}
