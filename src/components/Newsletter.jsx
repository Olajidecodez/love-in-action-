import React from 'react'

export default function Newsletter() {
  return (
    <section id='newsletter' className='bg-[#FFF5C0] py-10'>
        <div className='container mx-auto place-items-center'>
            <h3 className='text-2xl font-semibold mb-8'>Add LIA's Newsletter to your Inbox.</h3>
            <form action="" className='flex gap-6 items-center justify-center'>
                <input 
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 rounded-xl outline-none text-sm w-72'
                    required
                />

                <input 
                    type="text"
                    name='lastName'
                    placeholder='Last Name'
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 rounded-xl outline-none text-sm w-72'
                    required
                />
                
                <input 
                    type="text" 
                    name='email'
                    placeholder='Email'
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 rounded-xl outline-none text-sm w-72'
                    required
                />

                <button type='submit' className='bg-[#FFB703] text-[#FFFFFF] font-semibold text-center py-2.5 px-28 rounded-lg ml-5 hover:cursor-pointer'>
                    Submit
                </button>
            </form>
            <p className='text-sm mt-6 text-[#1C1C1C]'>
                *We won't share your email and you can unsubscribe at any time.
            </p>
        </div>
    </section>
  )
}
