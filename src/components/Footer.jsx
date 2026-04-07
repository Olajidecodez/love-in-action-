import React from 'react'
import Logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <section className='bg-[#1C1C1C] pt-12 md:pt-20 xl:pt-28 pb-4'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)]'>
            <div className='grid grid-cols-12 gap-6 text-[#FFFFFF]'>
                <div className='col-span-12 lg:col-span-3 max-lg:justify-center max-lg:flex'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='col-span-4 md:col-span-2 xl:col-span-2 text-xl flex flex-col gap-3 mx-auto max-lg:pt-6'>
                    <h6 className='font-semibold mb-3 md:mb-4 text-xs lg:text-xl xl:text-2xl tracking-widest max-lg:uppercase'>About</h6>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Team</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>The Initiative</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Contact</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Youtube</a>
                </div>
                <div className='col-span-4 md:col-span-2 xl:col-span-2 text-xl flex flex-col gap-3 mx-auto max-lg:pt-6'>
                    <h6 className='font-semibold mb-3 md:mb-4 text-xs lg:text-xl xl:text-2xl tracking-widest max-lg:uppercase'>More</h6>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Donate</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Volunteer</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>News</a>
                </div>
                <div className='col-span-4 md:col-span-2 xl:col-span-2 text-xl flex flex-col gap-3 mx-auto max-lg:pt-6'>
                    <h6 className='font-semibold mb-3 md:mb-4 text-xs lg:text-xl xl:text-2xl tracking-widest max-lg:uppercase'>Contact</h6>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Facebook</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Instagram</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Twitter</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>Tiktok</a>
                    <a href="" className='text-sm w-fit text-slate-200 hover:underline'>LinkedIn</a>
                </div>
                
                <div className='col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3 lg:gap-4 md:gap-6 max-lg:mt-6 max-lg:pt-8 md:pl-8 md:border-l max-md:border-t md:border-white/10 max-lg:border-white/10 md:text-left md:items-start'>
                    <h4 className='text-xl sm:text-2xl xl:text-[1.6rem] font-semibold leading-snug max-lg:max-w-sm'>Stay Updated on our Moves Round the Board.</h4>
                    <p className='text-sm text-slate-200 leading-relaxed'>Subscribe to our newsletter</p>
                    <button 
                        className='bg-[#FFB703] max-lg:w-fit lg:w-full max-lg:text-sm py-3 px-7 font-semibold rounded-xl cursor-pointer'
                        onClick={() => {
                            document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth'});
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            
            <div className='border-t border-white/10 mt-10 lg:mt-20'></div>

            <div className='text-center text-[#ffffff] mt-6 font-semibold'>
                <p className='text-sm lg:text-base'>&copy; 2023 LIA Initiative</p>
            </div>
        </div>
    </section>
  )
}
