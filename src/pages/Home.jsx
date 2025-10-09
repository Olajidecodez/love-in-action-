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

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Newsletter />
        <StoriesEvents />
        <VisionMissionValues />
        <Belief />
        <PastProjects />
        <VolunteerNotes />
        <Gallery />
        <CallToAction />
    </div>
  )
}
