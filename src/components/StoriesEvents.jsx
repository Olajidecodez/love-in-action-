import React from 'react'
import Card from './Card'
import CardImg from "../assets/images/card-img.png"
import SectionHeader from './SectionHeader'

export default function StoriesEvents() {
  return (
    <section className='py-28'>
        <div className='container mx-auto text-center'>
            <SectionHeader title={"Latest Stories and Events"}/>
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
