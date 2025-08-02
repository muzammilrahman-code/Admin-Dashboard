import React from 'react'
import { Link } from 'react-router-dom'
import './Chart.css'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';



const Chart = (props) => {
  return (
    <div className='chartBox'>
        <div className="boxInfo">
            <div className='main-title'>
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='/' className='viewBtn' style={{color: props.color}}>View all</Link>
        </div>

        <div className="chartInfo">
            <div className='chart1'>
                <ResponsiveContainer width="95%" height="100%">
                <LineChart  data={props.chartData}>
                    <Tooltip
                    contentStyle={{background: "transparent", border: "none"}}
                    labelStyle={{display: "none"}}
                    position={{x: 10, y: 70}}/>
                    <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className='percentage' style={{color: props.percentage<0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>
    </div>
  )
}

export default Chart