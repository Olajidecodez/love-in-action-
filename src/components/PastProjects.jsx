import React from 'react'
import Project1Img from "../assets/images/project1-img.png"
import Project2Img from "../assets/images/project2-img.png"

export default function PastProjects() {
    const projects = [
        {
            id: 1,
            img: Project1Img,
            title: "PROJECT 1.0",
            p1: "We launched the preliminary project of the initiative in February 2019, with the goal of having a positive influence on children by reducing their levels of hunger. As a result, we headed to the Stella Obasanjo Children's Home in Abeokuta, which is located in the state of Ogun, and provided them with food supplies and other provisions that are sufficient to nourish them.",
            p2: "We understand the value of nourishment in a child which is essential to the upbringing and growth in all areas of life including education."
        },
        {
            id: 2,
            img: Project2Img,
            title: "PROJECT 2.0",
            p1: "In accordance with our mission, The Love in Action Initiative team launched a campaign emphasizing the importance of education, health, and sexual awareness. Our target audience consisted of women and students from the Oworoshoki local government in Lagos State. The program was inspired by the dearth of excellent education and the neglect of education in areas where there are few renowned role models available.",
            p2: "Mr. Abayomi Okeowo, a multi-prize winner of the Institute of Chartered Accountants of Nigeria (ICAN), delivered our first session on education's significance to 320 youngsters. He spoke in the children's dialect and simplified English to aid their comprehension. As he also had a similar upbringing to them, the kids were attentive and asked insightful questions and shared their stories. Our second class, presented by serial entrepreneur Miss Tolulope Ijelu, educated youngsters about their health and well-being"
        }
    ]
  return (
    <section className='py-28'>
        <div className='container mx-auto'>
            <h6 className='text-lg text-[#FFB703] mb-3 font-semibold'>PAST PROJECTS</h6>
            <h3 className='text-5xl text-[#000000] mb-20 font-semibold'>PROJECTS</h3>

            <div className='grid grid-cols-2 gap-24'>
                {projects.map((project, index) => (
                    <div key={project.id} className='flex gap-3'>
                        <div>
                            <img src={project.img} alt="" className={`${index === 1 ? "w-420" : "w-300"} rounded-full`}/>
                        </div>
                        <div>
                            <div className='border-l-2 border-[#FFB703] pl-2 mb-3'>
                                <h6 className='text-xl font-semibold py-1'>{project.title}</h6>
                            </div>
                            <p className='leading-relaxed text-[#1C1C1C] mb-8'>{project.p1}</p>
                            <p className='leading-relaxed text-[#1C1C1C]'>{project.p2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
