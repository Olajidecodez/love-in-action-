import React, { useState, useEffect } from 'react'
import Logo from "../assets/images/logo.png"
import { HiOutlineBars3, HiOutlineInformationCircle, HiOutlineLightBulb, HiOutlineEnvelope } from "react-icons/hi2";

export default function Navbar() {
    const navLink = "flex gap-3 items-center p-2 rounded-lg transition-colors duration-200 active:bg-[#FFB703]";
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenuIcon = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && openMenu) {
        setOpenMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openMenu]);

  return (
    <header className='mx-auto max-w-[1730px] px-[clamp(1rem,5vw,6rem)] flex justify-between py-6 items-center relative overflow-x-hidden'>
        <div className='max-md:shrink-0'>
            <img src={Logo} alt="Love In Action Logo" className='max-lg:w-[190px] max-xl:w-[220px] max-2xl:w-[250px]'/>
        </div>

        <nav>
            <ul className='flex max-md:hidden md:space-x-6 lg:space-x-14 xl:space-x-22 2xl:space-x-28 items-center max-lg:text-sm'>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        <div className='max-md:hidden flex space-x-4 items-center'>
            <a href="" className='border-2 border-[#FFB703] text-[#FFB703] max-xl:py-0.5 max-xl:px-3 max-2xl:py-1 max-2xl:px-3.5 py-1.5 px-4 rounded-lg max-lg:text-sm'>
                Get Involved
            </a>
            <a href="" className='bg-[#FFB703] text-white max-xl:py-1 max-xl:px-4.5 max-2xl:py-2 max-2xl:px-5.5 py-2.5 px-6 rounded-3xl font-semibold max-lg:text-sm'>
                Donate
            </a>
        </div>
        <button className='hidden max-md:flex items-center' onClick={toggleMenuIcon}>
            <HiOutlineBars3 className='cursor-pointer' size={26}/>
        </button>

        {openMenu && (
            <div className='fixed sm:inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300' onClick={toggleMenuIcon}></div>
        )}

        <div className={`fixed top-0 right-0 h-screen w-screen sm:w-90 bg-white shadow-2xl/45 z-50 transform transition-transform duration-300 ease-in-out ${openMenu ? 'translate-x-0' : 'translate-x-[110%]'}`}>
            <div className='p-6'>
                <img src={Logo} alt="Logo Image" className='w-[190px]'/>
            </div>
            <button className='absolute top-6 right-6' onClick={toggleMenuIcon}>
                <HiOutlineBars3 className='cursor-pointer' size={26}/>
            </button>
            <div className="p-6 flex flex-col space-y-6 text-gray-800">
                <a href="" className={navLink}><span><HiOutlineInformationCircle size={22}/></span>About</a>
                <a href="" className={navLink}><span><HiOutlineLightBulb size={22}/></span>Projects</a>
                <a href="" className={navLink}><span><HiOutlineEnvelope size={22}/></span>Contact</a>
            </div>
            <div className='flex flex-col gap-4 mt-6 w-full'>
                <a href="" className='border-2 border-[#FFB703] text-[#FFB703] py-1.5 px-4 rounded-lg text-sm text-center mx-6'>
                    Get Involved
                </a>
                <a href="" className='bg-[#FFB703] text-white py-2.5 px-6 rounded-3xl font-semibold text-sm text-center mx-6'>
                    Donate
                </a>
            </div>
        </div>
    </header>
  )
}
