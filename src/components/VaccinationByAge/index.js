// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

// const data = [
//   {
//     count: 809680,
//     language: "Telugu",
//   },
//   {
//     count: 4555697,
//     language: "Hindi",
//   },
//   {
//     count: 12345657,
//     language: "English",
//   },
// ]

const VaccinationByAge = props => {
  const {byAge} = props
  return (
    <div className="last">
      <h1 className="h12">Vaccination by age</h1>
      <div className="m">
        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={byAge}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="100%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#1f77b4" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
