import React from 'react'
import Logo from "../assets/images/logo.png"

export default function Footer() {
  return (
    <section className='bg-[#1C1C1C] pt-28 pb-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-12 gap-6 text-[#FFFFFF]'>
                <div className='col-span-3'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='col-span-2 text-xl flex flex-col gap-3'>
                    <h6 className='font-semibold mb-4'>About</h6>
                    <a href="">Team</a>
                    <a href="">The Initiative</a>
                    <a href="">Contact</a>
                    <a href="">Youtube</a>
                </div>
                <div className='col-span-2 text-xl flex flex-col gap-3'>
                    <h6 className='font-semibold mb-4'>More</h6>
                    <a href="">Donate</a>
                    <a href="">Volunteer</a>
                    <a href="">News</a>
                </div>
                <div className='col-span-2 text-xl flex flex-col gap-3'>
                    <h6 className='font-semibold mb-4'>Contact</h6>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">Tiktok</a>
                    <a href="">LinkedIn</a>
                </div>
                <div className='col-span-3 flex flex-col gap-6'>
                    <h4 className='text-4xl'>Stay Updated on our Moves Round the Board.</h4>
                    <p>Subscribe to our newsletter</p>
                    <button 
                        className='bg-[#FFB703] py-3 px-6 font-semibold rounded-2xl cursor-pointer'
                        onClick={() => {
                            document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth'});
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='text-center text-[#ffffff] mt-20 font-semibold'>
                <p>&copy; 2023 LIA Initiative</p>
            </div>
        </div>
    </section>
  )
}
