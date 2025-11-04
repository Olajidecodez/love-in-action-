import React, { useState } from 'react'

export default function Newsletter() {
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: ''});
    const [status, setStatus] = useState({loading: false, success: '', error: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validateEmail = (email) => {
        const regrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regrex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({loading: true, success: '', error: ''});

        const {firstName, lastName, email} = formData;

        if(!firstName || !lastName || !email) {
            setStatus({loading: false, success: '', error: 'Please fill out all fields'});
            return;
        }

        if(!validateEmail(email)) {
            setStatus({loading: false, success: '', error: 'Please enter a valid email address'});
            return;
        }

        setTimeout(() => {
            setStatus({loading: false, success: "🎉 You've successfully subscribed to our newsletter!", error: ''});
            setFormData({firstName: '', lastName: '', email: ''});
        }, 2000)
    };

  return (
    <section id='newsletter' className='bg-[#FFF5C0] py-10 px-4'>
        <div className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] text-center'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-8'>Add LIA's Newsletter to your Inbox.</h3>
            <form action="" onSubmit={handleSubmit} className='flex max-md:flex-col gap-6 max-lg:gap-3 max-xl:gap-4 xl:gap-6 items-center justify-center'>
                <input 
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    aria-label='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 max-xl:px-2 xl:px-4 max-lg:pr-3 max-xl:pl-3 rounded-xl outline-none focus:ring-1 focus:ring-[#FFB703] focus:ring-offset-1 text-sm w-full max-md:w-full lg:w-72'
                    required
                />

                <input 
                    type="text"
                    name='lastName'
                    placeholder='Last Name'
                    aria-label='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 max-xl:px-2 xl:px-4 max-lg:pr-3 max-xl:pl-3 rounded-xl outline-none focus:ring-1 focus:ring-[#FFB703] focus:ring-offset-1 text-sm w-full max-md:w-full lg:w-72'
                    required
                />
                
                <input 
                    type="email" 
                    name='email'
                    placeholder='Email'
                    aria-label='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-[#FFFFFF] text-gray-700 py-3 px-4 max-xl:px-2 xl:px-4 max-xl:pl-3 max-lg:pr-3 rounded-xl outline-none focus:ring-1 focus:ring-[#FFB703] focus:ring-offset-1 text-sm w-full max-md:w-full lg:w-72'
                    required
                />

                <button type='submit' disabled={status.loading} className={`bg-[#FFB703] hover:bg-[#E6A403] text-[#FFFFFF] font-semibold text-center py-2.5 max-lg:px-16 max-xl:px-24 xl:px-28 rounded-lg md:ml-3 lg:ml-5 max-md:w-full max-md:mt-6 hover:cursor-pointer transition-colors duration-200 ${status.loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#E6A403] cursor-pointer'}`}>
                    {status.loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {status.error && 
                <p className='text-red-500 text-sm mt-4'>{status.error}</p>
            }

            {status.success && 
                <p className='text-green-600 text-sm mt-4 font-medium'>{status.success}</p>
            }
            <p className='text-sm mt-6 text-[#1C1C1C]'>
                *We won't share your email and you can unsubscribe at any time.
            </p>
        </div>
    </section>
  )
}
