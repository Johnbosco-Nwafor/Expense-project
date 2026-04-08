import React, { useState } from 'react'
import { RiCurrencyLine } from "react-icons/ri";
import { Avatar } from '../assets';
import { IoIosArrowDown } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import ThemeSwitch from './ThemeSwitch';

const links = ["Dashboard", "Transactions", "Accounts", ]

const Navbar = ({isDarkMode, isMenu, toggleMenu, toggleTheme}) => {
    const [selected, setSelected] = useState(0)
  return (
    <div className='w-full py-8 shadow-lg px-5'>
        <div className='w-full flex flex-row items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 md:w-12 md:h-12 rounded-xl bg-violet-800 flex items-center justify-center cursor-pointer gap-2'>
                    <RiCurrencyLine className='text-3xl text-white hover:animate-spin'/>
                </div>
                <span className='text-black dark:text-slate-200 text-xl font-bold hidden lg:block'>My-Finance</span>
            </div>

            <div className='hidden md:flex items-center gap-4'>
                {
                    links.map((items, index)=>(
                        <div 
                         key={index}
                         className={`px-6 py-2 flex items-center justify-center rounded-full ${selected === index ? "bg-black dark:bg-slate-800 text-white" : "text-slate-600 dark:text-slate-400"}`}
                         onClick={()=> setSelected(index)}
                        >
                            <a href="#">{items}</a>
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-4 md:gap-10'>
                <ThemeSwitch 
                 isDarkMode={isDarkMode}
                 toggleTheme={toggleTheme}
                />

                <div className='flex flex-row items-center gap-2'>
                    <img src={Avatar} className='w-12 h-12 rounded-full object-cover hidden lg:block'/>

                    <div className='hidden md:block'>
                        <p className='text-xl font-semibold text-black dark:text-slate-400'>John Doe</p>
                        <span className='text-sm text-black dark:text-slate-500'>johndoe@gmail.com</span>
                    </div>

                    <IoIosArrowDown size={22} className='text-black dark:text-slate-400 hidden md:block'/>
                </div>

                <button
                 className='md:hidden cursor-pointer'
                 type='button'
                 aria-expanded="false"
                 aria-controls='mobile-view'
                 onClick={toggleMenu}
                >
                    <GrMenu size={26} className={`${isMenu ? "block" : "hidden"} text-black dark:text-slate-300 font-bold`}/> 
                        
                    <GrClose size={26} className={`${isMenu ? "hidden" : "block"} text-black dark:text-slate-300 font-bold`}/>
                
                </button>
            </div>
        </div>

        <div className={`${isMenu ? "hidden" : "block"} lg:hidden flex flex-col gap-4 mt-6 px-0`}>
            {
                links.map((items, index)=>(
                    <div
                    key={index}
                    className={`${selected === index ? "bg-[#05174e] dark:bg-[#061130] text-white" : "text-slate-700 dark:text-slate-200"} px-2 py-2 rounded-lg cursor-pointer`}
                    onClick={()=> setSelected(index)}
                    >
                    <a href="#" onClick={toggleMenu}>{items}</a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar