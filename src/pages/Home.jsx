import React from 'react'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import StoriesEvents from '../components/StoriesEvents'
import Card from '../components/Card'
import VisionMissionValues from '../components/VisionMissionValues'
import Belief from '../components/Belief'
import PastProjects from '../components/PastProjects'
import VolunteerNotes from '../components/VolunteerNotes'
import Gallery from '../components/Gallery'
import CallToAction from '../components/CallToAction'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Newsletter />
        <StoriesEvents />
        <VisionMissionValues />
        <Belief />
        <Testimonials />
        <Gallery />
        <PastProjects />
        <VolunteerNotes />
        <CallToAction />
        <Footer />
    </div>
  )
}
