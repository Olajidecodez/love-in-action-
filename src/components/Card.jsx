import React from 'react'
import CardImg from "../assets/images/card-img.png"

export default function Card({image, title, description, link}) {
  return (
    <div className='flex flex-col gap-6 place-items-center text-center'>
        <img 
            src={image}
            alt={title}
            className='rounded-3xl w-full shadow-md'
        />

        <div className='flex flex-col gap-3'>
            <h6 className='font-medium text-2xl text-[#000000]'>
                {title}
            </h6>

            <p className='text-[#1C1C1C]'>
                {description}
            </p>
        </div>

        <a 
            href={link}
            className='bg-[#FFB703] py-2 px-6 text-center font-semibold text-[#FFFFFF] text-sm rounded-lg'
        >
            Learn More
        </a>
    </div>
  )
}
