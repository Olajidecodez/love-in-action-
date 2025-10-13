import React from 'react'
import GalleryImage1 from "../assets/images/belief-section-img4.png"
import GalleryImage2 from "../assets/images/belief-section-img2.png"
import GalleryImage3 from "../assets/images/belief-section-img3.png"
import SectionHeader from './SectionHeader'

export default function Gallery() {
  return (
    <section className='py-24'>
        <div className='container mx-auto text-center'>
            <SectionHeader title={"GALLERY"}/>

            <div className='grid grid-cols-12 mt-24 gap-6 2xl:gap-2 place-items-center xl:mx-32 2xl:mx-60'>
                <div className='col-span-6 h-[750px] w-[500px]'>
                    <img src={GalleryImage1} alt="" className='w-full h-full rounded-2xl'/>
                </div>
                <div className='flex flex-col col-span-6 justify-between gap-6 h-full'>
                    <div>
                        <img src={GalleryImage2} alt="" className='w-[500px] h-[360px]'/>
                    </div>
                    <div>
                        <img src={GalleryImage3} alt="" className='w-[500px] h-[360px]'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
