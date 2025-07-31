import React from 'react'
import './pieChartBox.css'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const pieChartBox = () => {
    const data = [
        { name: 'Mobile', value: 400, color: "#0088FE" },
        { name: 'Desktop', value: 300, color: "#00C49F" },
        { name: 'Laptop', value: 300, color: "#FFBB28" },
        { name: 'Tablet', value: 200, color: "#FF8042" },
    ];

    return (
        <div className='pieChartBox'>
            <h1 className='source'>Leads By Source</h1>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: "white", 
                                borderRadius: "5px",
                                color: "#333"
                            }}
                        />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={95}
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {data.map((item, index) => (
                                <Cell key={`cell-${index}`} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='options'>
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor: item.color}}></div>
                            <span>{item.name}</span>
                        </div>
                        <span className="value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default pieChartBox