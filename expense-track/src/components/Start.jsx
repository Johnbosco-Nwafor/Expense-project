import React from 'react'
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { SiCashapp } from "react-icons/si";

const data = [
    {
        label: "Your Total Balance",
        amount: "100,020",
        increase: 10.9,
        icons: <BsCurrencyDollar size={26}/>
    },
    {
        label: "Total Income",
        amount: "150,010",
        increase: 8.9,
        icons: <BsCashCoin size={26}/>
    },
    {
        label: "Total Income",
        amount: "150,010",
        increase: -10.9,
        icons: <SiCashapp size={26}/>
    },
]

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];

const Start = () => {
  return (
    <div className='w-full py-6 flex flex-col md:flex-row justify-between gap-8'>
        {
            data.map((items, index)=>(
                <div
                 key={index}
                 className='flex flex-col lg:flex-row 2xl:min-w-96 py-12 px-4 items-center justify-between border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 rounded-xl gap-6'
                >
                    <div className='flex flex-row justify-between gap-2 w-full'>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}>
                            {
                                items.icons
                            }
                        </div> 

                        <div>
                            <p className='text-lg text-slate-600 dark:text-slate-400'>{items.label}</p>
                            <span className='text-2xl font-medium text-black dark:text-slate-400'>${items.amount}.00</span>
                        </div>
                    </div>

                    <div className='flex w-full justify-between lg:flex-col '>
                        <p className={`${items.increase > 0 ? "text-emerald-700" : "text-rose-700"} flex items-center gap-1 font-bold`}>
                            {items.increase > 0 ? <IoMdArrowUp size={22}/> : <IoMdArrowDown size={22}/>}

                            {Math.abs(items.increase)} %
                        </p>
                        <span className='text-sm dark:text-slate-400 text-black'>Compare to last year</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Start