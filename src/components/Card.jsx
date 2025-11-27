export default function Card({image, title, description, link, featured}) {
  return (
    <div className={`flex max-sm:max-w-[360px] gap-6 flex-col place-items-center text-center lg:gap-6 lg:flex-col lg:place-items-center lg:text-center ${featured ? 'sm:flex-row sm:items-center sm:gap-10 sm:text-left' : ''}`}>
        <img 
            src={image}
            alt={title}
            className={`rounded-3xl shadow-md max-w-full h-auto object-cover ${featured ? 'sm:basis-1/2 sm:min-w-0 sm:flex-shrink' : ''}`}
        />

        <div className={`flex flex-col gap-3 items-center lg:items-center text-center lg:text-center ${featured ? 'sm:items-start sm:text-left sm:min-w-0 sm:flex-1 sm:basis-1/2' : ''}`}>
            <h6 className='font-medium text-2xl text-[#000000]'>
                {title}
            </h6>

            <p className='text-[#1C1C1C] max-lg:line-clamp-3 max-xl:line-clamp-4'>
                {description}
            </p>
        

            <a 
                href={link}
                className='bg-[#FFB703] py-2 px-6 text-center font-semibold text-[#FFFFFF] text-sm rounded-lg max-lg:mt-2'
            >
                Learn More
            </a>
        </div>
    </div>
  )
}
