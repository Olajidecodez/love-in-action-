import React from 'react'
import Card from './Card'
import CardImg from "../assets/images/card-img.png"
import SectionHeader from './SectionHeader'

export default function StoriesEvents() {
  return (
    <section className='py-18 sm:py-28'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] text-center'>
            <SectionHeader title={"Latest Stories and Events"}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-20 justify-items-center gap-12'>
                {/*Card 1*/}
                <div>
                    <Card 
                        image={CardImg}
                        title="The Book Drive"
                        description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                        link="#"
                    />
                </div>
                
                {/*Card 2*/}
                <div>
                    <Card 
                        image={CardImg}
                        title="The Book Drive"
                        description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                        link="#"
                    />
                </div>

                {/*Card 3*/}
                <div className='sm:col-span-2 lg:col-span-1 mt-0 lg:mt-0 sm:mt-4'>
                    <Card 
                        image={CardImg}
                        title="The Book Drive"
                        description="The Love in Action Initiative is a community- and volunteer-driven organisation that seeks to alleviate hunger and enhance educational possibilities by providing education for out of school children in Lagos where it currently operates."
                        link="#"
                        featured={true}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
