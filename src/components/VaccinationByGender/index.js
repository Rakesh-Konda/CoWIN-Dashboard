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

const VaccinationByGender = props => {
  const {byGender} = props
  return (
    <div className="last">
      <h1 className="h12">Vaccination by gender</h1>
      <div className="mm">
        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={byGender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#1f77b4" />
            <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
