import React from 'react'

export default function SectionHeader({ title }) {
  return (
    <div>
        <h3 className='font-medium max-sm:text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#1C1C1C]'>{title}</h3>
    </div>
  )
}
