import React from 'react'
import GalleryImage1 from "../assets/images/belief-section-img4.png"
import GalleryImage2 from "../assets/images/belief-section-img2.png"
import GalleryImage3 from "../assets/images/belief-section-img3.png"
import SectionHeader from './SectionHeader'

export default function Gallery() {
  return (
    <section className='py-24'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] text-center'>
            <SectionHeader title={"GALLERY"}/>

            <div className='mt-24 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-6 xl:gap-6 2xl:gap-6 place-items-center'>
                    <div className='lg:h-[750px] lg:w-[500px]'>
                        <img src={GalleryImage1} alt="" className='w-full h-full rounded-2xl'/>
                    </div>
                    <div className='flex flex-col gap-6 justify-between h-full'>
                        <div>
                            <img src={GalleryImage2} alt="" className='w-[500px] h-[360px]'/>
                        </div>
                        <div>
                            <img src={GalleryImage3} alt="" className='w-[500px] h-[360px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
