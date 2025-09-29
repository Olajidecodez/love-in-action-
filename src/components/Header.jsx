import React from 'react'
import Logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <header className='container mx-auto flex justify-between py-6 items-center'>
        <div>
            <img src={Logo} alt="Love In Action Logo" />
        </div>

        <nav>
            <ul className='flex space-x-28 items-center'>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        <div className='flex space-x-4 items-center'>
            <a href="" className='border-2 border-[#FFB703] text-[#FFB703] py-1.5 px-4 rounded-lg font-[var(--font-libre)]'>
                Get Involved
            </a>
            <a href="" className='bg-[#FFB703] text-white py-2.5 px-6 rounded-3xl font-semibold'>
                Donate
            </a>
        </div>
    </header>
  )
}
