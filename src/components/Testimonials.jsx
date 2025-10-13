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
        }
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

  return (
    <section className='py-28'>
        <div className='container mx-auto text-center'>
            <SectionHeader title={"TESTIMONIALS"}/>

            <div className='flex mt-28 justify-center overflow-hidden'>
                <div className='flex transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${current * 100}%)`, width: `${testimonials.length * 100}%`}}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='flex flex-shrink-0 w-full gap-16 place-items-center'>
                            <button onClick={prevSlide} className='cursor-pointer'>
                                <FaArrowLeft size={35}/>
                            </button>
                            <div>
                                <img src={testimonial.image} alt="" className='w-[600px] rounded-2xl'/>
                            </div>
                            <div className='self-start flex flex-col gap-10 p-1'>
                                <p className='text-2xl text-left leading-relaxed'>"{testimonial.message}"</p>
                                <p className='text-left font-semibold'>{testimonial.name}, <span className='font-normal'>{testimonial.role}</span></p>
                            </div>
                            <button onClick={nextSlide} className='cursor-pointer'>
                                <FaArrowRight size={35}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
