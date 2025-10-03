import React from 'react'
import Card from './Card'
import CardImg from "../assets/images/card-img.png"

export default function StoriesEvents() {
  return (
    <section className='py-28'>
        <div className='container mx-auto text-center'>
            <h3 className='font-medium text-5xl text-[#1C1C1C]'>Latest Stories and Events</h3>
            <div className='grid grid-cols-3 w-full mt-20 justify-items-center gap-12'>
                <Card 
                    image={CardImg}
                    title="The Book Drive"
                    description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                    link="#"
                />
                <Card 
                    image={CardImg}
                    title="The Book Drive"
                    description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                    link="#"
                />
                <Card 
                    image={CardImg}
                    title="The Book Drive"
                    description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                    link="#"
                />
            </div>
        </div>
    </section>
  )
}
