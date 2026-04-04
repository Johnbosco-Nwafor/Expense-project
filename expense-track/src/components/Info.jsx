import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

const Info = ({title, subTitle}) => {
  return (
    <div className='w-full flex flex-col md:flex-row md:items-center justify-between py-6 mt-0 md:mt-5 gap-6'>
        <div className='flex flex-col gap-1'>
            <p className='text-4xl font-semibold text-black dark:text-slate-300'>{title}</p>
            <span className='text-lg text-black dark:text-slate-500'>{subTitle}</span>
        </div>

        <div className='flex flex-row items-center gap-10'>
            <div className='px-4 py-2 flex flex-row items-center gap-2 border border-slate-800 dark:border-slate-500 rounded-lg'>
                <CiSearch className='text-black dark:text-slate-400 cursor-pointer' size={24}/>

                <input type="text" placeholder='Search now...' className='outline-none text-black dark:text-slate-400'/>
            </div>

            <div className='px-4 py-2 flex flex-row items-center bg-violet-800 text-white rounded-md gap-2'>
                <IoFilter size={24}/>
                <p className='text-base'>Filter By</p>
            </div>
        </div>
    </div>
  )
}

export default Info