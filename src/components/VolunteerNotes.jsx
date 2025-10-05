import React from 'react'

export default function VolunteerNotes() {
    const notes = [
        {
            id: 1,
            message: "Through volunteering with the Love In Action Initiative, I have learned valuable social skills as well as working with children and those in special needs. In addition, seeing those in need happy gives me self-satisfaction and also high self esteem.",
            name: "Emmanuel Ojo"
        },
        {
            id: 2,
            message: "The experience of volunteering was nice. It was beautiful working towards a good cause. It was amazing seeing how people are willing to give no matter how little to help the lives of others.",
            name: "Deborah Adesegun"
        },
        {
            id: 3,
            message: "Through volunteering with the Love In Action Initiative, I have learned valuable social skills as well as working with children and those in special needs. In addition, seeing those in need happy gives me self-satisfaction and also high self esteem.",
            name: "Farida Amodu"
        }
    ]
  return (
    <section className='py-24'>
        <div className='container mx-auto'>
            <h6 className='text-lg text-[#FFB703] mb-3 font-semibold'>FROM OUR VOLUNTEERS</h6>
            <h3 className='text-5xl text-[#000000] mb-28 font-semibold'>VOLUNTEER NOTES</h3>

            <div className='grid grid-cols-3 gap-36'>
                {notes.map((note) => (
                    <div key={note.id} className='flex flex-col justify-between gap-18'>
                        <p className='leading-relaxed text-[#1C1C1C] text-xl'>"{note.message}"</p>
                        <p className='font-semibold'>{note.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
