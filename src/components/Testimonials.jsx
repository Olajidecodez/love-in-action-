import React, { useState } from 'react'
import TestimonialImg from "../assets/images/testimonial-img.png"
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import SectionHeader from './SectionHeader';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            image: TestimonialImg,
            message: "I admire LIA's spirit of innovation. LIA is constantly looking for new ideas that can benefit the world, especially the poor, and they aren't afraid to try something that no one has ever tried before.",
            name: "— Ms. Pelumi Ogunade",
            role: "Founder, Dear NGO Founder Publication / Nobel Prize Winner / LIA Partner"
        },
        {
            id: 2,
            image: TestimonialImg,
            message: "I admire LIA's spirit of innovation. LIA is constantly looking for new ideas that can benefit the world, especially the poor, and they aren't afraid to try something that no one has ever tried before.",
            name: "— Ms. Pelumi Ogunade",
            role: "Founder, Dear NGO Founder Publication / Nobel Prize Winner / LIA Partner"
        }
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const nextSlide = () => {
        if (current < testimonials.length - 1) {
            setCurrent(current + 1);
        }
    };

  return (
    <section className='py-18 md:py-28'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] text-center'>
            <SectionHeader title={"TESTIMONIALS"}/>

            <div className='flex mt-18 md:mt-28 justify-center overflow-hidden'>
                <div className='flex transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${current * 100}%)`, width: `${testimonials.length * 100}%`}}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='flex max-md:flex-col max-md:gap-8 flex-shrink-0 w-full md:gap-8 lg:gap-10 xl:gap-16 place-items-center'>
                            <button onClick={prevSlide} disabled={current === 0} className={`hidden md:flex cursor-pointer flex-shrink-0 transition-opacity ${current === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}>
                                <FaArrowLeft size={30}/>
                            </button>
                            <div className='flex-shrink-0'>
                                <img src={testimonial.image} alt="" className='max-md:w-[220px] md:w-[230px] lg:w-[280px] xl:w-[300px] rounded-2xl'/>
                            </div>
                            <div className='self-start flex flex-col gap-10 md:gap-8 xl:gap-10 p-1 min-w-0'>
                                <p className='lg:text-xl xl:text-2xl text-center md:text-left lg:leading-relaxed'>"{testimonial.message}"</p>
                                <p className='hidden md:block max--md:text-center md:text-left max-lg:text-sm font-semibold'>{testimonial.name}, <span className='font-normal'>{testimonial.role}</span></p>
                                <div className='hidden max-md:flex max-md:flex-col gap-2'>
                                    <p className='text-center md:text-left max-lg:text-sm font-semibold'>{testimonial.name}</p>
                                    <p className='font-normal text-sm'>{testimonial.role}</p>
                                </div>
                            </div>
                            <button onClick={nextSlide} disabled={current === testimonials.length - 1} className={`hidden md:flex cursor-pointer flex-shrink-0 transition-opacity ${current === testimonials.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}>
                                <FaArrowRight size={30}/>
                            </button>
                            <div className='hidden max-md:flex gap-10 bg-[#efeeef] rounded-4xl px-1 py-2'>
                                <button onClick={prevSlide} disabled={current === 0} className={`cursor-pointer flex-shrink-0 bg-white rounded-full p-2 ${current === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}>
                                    <FaArrowLeft size={22}/>
                                </button>
                                <button onClick={nextSlide} disabled={current === testimonials.length - 1} className={`cursor-pointer flex-shrink-0 bg-white rounded-full p-2 ${current === testimonials.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}>
                                    <FaArrowRight size={22}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
