import React from 'react'
import Title from './Title'
import { FaBtc, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

const data = [
  {
    name: "Crypto",
    account: "codewave@gmail.com",
    amount: "85,345.00",
    icon: (
      <div className='w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full'>
        <FaBtc size={26} />
      </div>
    ),
  },
  {
    name: "Visa Debit Card",
    account: "2463********8473",
    amount: "15,345.00",
    icon: (
      <div className='w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full'>
        <RiVisaLine size={26} />
      </div>
    ),
  },
  {
    name: "MasterCard",
    account: "6785********8473",
    amount: "55,345.00",
    icon: (
      <div className='w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-full'>
        <FaCcMastercard size={26} />
      </div>
    ),
  },
  {
    name: "Paypal",
    account: "codewave@gmail.com",
    amount: "35,345.00",
    icon: (
      <div className='w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full'>
        <FaPaypal size={26} />
      </div>
    ),
  },
];

const Accounts = () => {
  return (
    <div className='w-full lg:w-1/3'>
      <Title title="Accounts"/>
      <p className='text-sm text-black dark:text-slate-500'>View all your accounts</p>

      <div className='w-full'>
        {
          data.map((items, index)=>(
            <div 
             key={index}
             className='flex flex-row justify-between mt-6 w-full'
            >
             <div className='flex items-center gap-2 w-[60%]'>
              {items.icon}
              <div>
                <p className='text-black dark:text-slate-400 text-lg'>{items.name}</p>
                <span className='text-sm text-black dark:text-slate-400'>{items.account}</span>
              </div>
             </div>

             <div className='w-[40%]'>
              <p className='text-lg text-black dark:text-slate-400'>${items.amount}</p>
              <span className='text-violet-700'>Account Balance</span>
             </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Accounts