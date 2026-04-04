import React from 'react'
import Title from './Title'
import { RiProgress3Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

const data = [
  {
    date: "2024-01-05",
    name: "Online Store",
    contact: "+1234567890",
    status: "Completed",
    source: "Credit Card",
    amount: 150,
  },
  {
    date: "2024-01-12",
    name: "Grocery Store",
    contact: "+1987654321",
    status: "Rejected",
    source: "Debit Card",
    amount: 75,
  },
  {
    date: "2024-01-20",
    name: "Utility Bill",
    contact: "+1122334455",
    status: "Pending",
    source: "Bank Transfer",
    amount: 100,
  },
  {
    date: "2024-02-03",
    name: "Restaurant",
    contact: "+1555666777",
    status: "Completed",
    source: "Cash",
    amount: 50,
  },
  {
    date: "2024-02-10",
    name: "Online Subscription",
    contact: "+1444333222",
    status: "Completed",
    source: "Credit Card",
    amount: 25,
  },
  {
    date: "2024-02-18",
    name: "Gas Station",
    contact: "+1777888999",
    status: "Completed",
    source: "Debit Card",
    amount: 40,
  },
  {
    date: "2024-03-07",
    name: "Electronics Store",
    contact: "+1987654321",
    status: "Completed",
    source: "Credit Card",
    amount: 200,
  },
  {
    date: "2024-03-15",
    name: "Online Service",
    contact: "+1122334455",
    status: "Pending",
    source: "Bank Transfer",
    amount: 120,
  },
  {
    date: "2024-03-22",
    name: "Coffee Shop",
    contact: "+1234567890",
    status: "Rejected",
    source: "Cash",
    amount: 10,
  },
  {
    date: "2024-04-01",
    name: "Grocery Store",
    contact: "+1555666777",
    status: "Completed",
    source: "Debit Card",
    amount: 90,
  },
  {
    date: "2024-04-08",
    name: "Online Shopping",
    contact: "+1444333222",
    status: "Completed",
    source: "Credit Card",
    amount: 180,
  },
  {
    date: "2024-04-15",
    name: "Car Maintenance",
    contact: "+1777888999",
    status: "Completed",
    source: "Cash",
    amount: 300,
  },
];

const Transactions = () => {
  return (
    <div className='w-full md:w-2/3' id='transaction'>
        <Title title="Latest Transactions"/>

        <div className='mt-5 overflow-x-auto'>
            <table className='min-w-max w-full'>
                <thead className='w-full border-b border-slate-300 dark:border-slate-700'>
                    <tr className='w-full text-left text-slate-900 dark:text-slate-700'>
                        <th className='py-2 px-4'>Date</th>
                        <th className='py-2 px-4'>Name</th>
                        <th className='py-2 px-4'>Status</th>
                        <th className='py-2 px-4'>Source</th>
                        <th className='py-2 px-4'>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {data.slice(0, 5).map((items, index)=>(
                        <tr key={index} className='border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-500 hover:bg-gray-300/10'>
                            <td className='py-2 px-4'>{items.date}</td>
                            <td className='py-2 px-4'>
                              <div>
                                <p className='text-lg text-black dark:text-slate-300'>{items.name}</p>
                                <span className='text-sm'>{items.contact}</span>
                              </div>
                            </td>
                            <td className='py-2 px-4'>
                              <p className='flex items-center gap-2'>
                                {items.status === "Completed" && <IoCheckmarkDoneCircle size={24} className='text-emerald-700'/>}

                                {items.status === "Pending" && <RiProgress3Line size={24} className='text-amber-700'/>}

                                {items.status === "Rejected" && <TiWarning size={24} className='text-red-700'/>}
                                {items.status}
                              </p>
                            </td>
                            <td className='py-2 px-4'>{items.source}</td>
                            <td className='py-2 px-4'>${items.amount}.00</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Transactions 