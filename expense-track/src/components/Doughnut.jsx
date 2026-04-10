import React from 'react'
import Title from './Title'
import {
  ResponsiveContainer,
  PieChart,
  Legend,
  Tooltip,
  Pie,
  Cell
} from 'recharts'

const data = [
  { name: "Income", value: 150020 },
  { name: "Expense", value: 50010 },
]

const COLORS = ['#0088FE', '#FFBB28']

const Doughnut = () => {
  return (
    <div className='w-full md:w-1/3 flex flex-col items-center mb-5'>
      <Title title="Summary" />

      {/* ✅ Responsive height */}
      <div className="w-full h-[250px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Legend />

            <Pie
              data={data}
              dataKey="value"
              paddingAngle={5}
              innerRadius="50%"   // ✅ percentage = responsive
              outerRadius="80%"   // ✅ percentage = responsive
            >
              {data.map((item, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Doughnut