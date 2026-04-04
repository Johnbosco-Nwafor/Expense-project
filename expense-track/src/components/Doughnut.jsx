import React from 'react'
import Title from './Title'
import {ResponsiveContainer, PieChart, Legend, Tooltip, Pie, Cell} from 'recharts'

const data = [
  {name: "Income", value: 150020},
  {name: "Expense", value: 50010},
]

const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

const Doughnut = () => {
  return (
    <div className='w-full md:w-1/3 flex flex-col items-center mb-5'>
        <Title title="Summary"/>

        <ResponsiveContainer width={"100%"} height={500}>
            <PieChart width={500} height={400}>
                <Tooltip />
                <Legend />
                <Pie 
                 innerRadius={"110"}
                 outerRadius={"180"}
                 data={data}
                 dataKey={"value"}
                 paddingAngle={5}
                >
                    {
                        data.map((items, index)=>(
                            <Cell key={"cell" + index} fill={COLORS[index % COLORS.length]}/>
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Doughnut