import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './BarChartBox.css'

const BarChartBox = (props) => {
  return (
    <div className='barChart'>
      <h1 className='heading'>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{  background: "rgba(0, 0, 0, 0.75)", 
                                color: "#fff",
                                borderRadius: "5px",
                                fontSize: "12px",
                                padding: "5px",
                                zIndex: 9999 }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
