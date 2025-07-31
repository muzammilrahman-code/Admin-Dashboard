import React from 'react'
import './Home.css'
import TopBox from '../../components/TopBox/TopBox'
import Chart from '../../components/ChartBox/Chart'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarChartBox from '../../components/BarChartBox/BarChartBox.jsx'
import PieChartBox from '../../components/PieChartBox/PieChartBox.jsx'
import BigChartBox from '../../components/BigChartBox/BigChartBox.jsx'
const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopBox/>
      </div>
      <div className='box box2'><Chart {...chartBoxUser }/></div>
      <div className='box box3'><Chart {...chartBoxProduct}/></div>
      <div className='box box4'><PieChartBox/></div>
      <div className='box box5'><Chart {...chartBoxRevenue}/></div>
      <div className='box box6'><Chart {...chartBoxConversion}/></div>
      <div className='box box7'><BigChartBox/></div>
      <div className='box box8'><BarChartBox {...barChartBoxVisit}/></div>
      <div className='box box9'><BarChartBox {...barChartBoxRevenue}/></div>

        
    </div>
  )
}

export default Home