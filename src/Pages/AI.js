import React, { useEffect, useRef } from 'react';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import LegendLite from 'cal-heatmap/plugins/LegendLite';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomData(startDate, endDate) {
  const data = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    data.push({
      date: currentDate.toISOString().slice(0, 10),
      value: generateRandomNumber(0, 20),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
}
const month = generateRandomNumber(4, 12);
const CalendarHeatmap = () => {
  const calRef = useRef(null);

  useEffect(() => {
    const cal = new CalHeatmap();
    const today = new Date();
    
    const endDate = new Date(today.getFullYear(), today.getMonth() + month, 0);
    const randomData = generateRandomData(today, endDate);

    cal.paint({
      data: {
        source: randomData,
        type: 'json',
        x: 'date',
        y: 'value',
      },
      theme: 'dark',
      date: {
        start: today,
      },
      range: month,
      scale: {
        color: {
          type: 'threshold',
          range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
          interpolate: 'hsl',
          domain: [10, 15, 20],
        },
      },
      domain: {
        type: 'month',
      },
      subDomain: {
        type: 'day',
        radius: 3,
      },
      itemSelector: calRef.current,
    }, [
      [
        Tooltip,
        {
          text: function (date, value, dayjsDate) {
            return (
              (value ? value : 'No') +
              ' Tasks on ' +
              dayjsDate.format('dddd, MMMM D, YYYY')
            );
          },
        },
      ],
      [
        LegendLite,
        {
          itemSelector: '#ex-ghDay-legend',
          radius: 2,
          width: 11,
          height: 11,
          gutter: 4,
        },
      ],
    ]);
  });

  return (
    <div style={{ background: '#22272d', color: '#adbac7', borderRadius: '3px', padding: '1rem', overflow: 'hidden', marginBottom: '2rem', width: '800px'}}>
      <div ref={calRef}></div>
      <div style={{ float: 'right', fontSize: 12 }}>
        <span style={{ color: '#768390' }}>Less</span>
        <div id="ex-ghDay-legend" style={{ display: 'inline-block', margin: '0 4px' }}></div>
        <span style={{ color: '#768390', fontSize: 12 }}>More</span>
      </div>
    </div>
  );
};

const LineChartComponent = () => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const today = new Date();
  const endDate = new Date(today.getFullYear(), today.getMonth() + month, 0);

  const generateLineChartData = () => {
    const data = [];
    let currentDate = new Date(today);
    let totalCost = 0;
    while (currentDate <= endDate) {
      const uv = generateRandomNumber(1000, 1500);
      totalCost += uv;
      data.push({
        name: currentDate.toISOString().slice(0, 7),
        totalCost: totalCost,
      });
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return data;
  };

  const lineChartData = generateLineChartData();

  const formatXAxis = (tickItem) => {
    const [year, month] = tickItem.split('-');
    const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
    return `${monthName} ${year}`;
  };


  const successRate = generateRandomNumber(50, 100);
  const successRateColor = successRate < 65 ? 'red' : successRate < 85 ? 'yellow' : 'green';

  return (
    <div style={{ background: '#22272d', color: '#adbac7', borderRadius: '3px', padding: '1rem', overflow: 'hidden', width: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Cumulative Costs Over Time</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '0.5rem' }}>Success Rate:</span>
          <span style={{ color: successRateColor, fontWeight: 'bold' }}>{successRate}%</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={lineChartData}>
          <XAxis dataKey="name" tickFormatter={formatXAxis} ticks={[lineChartData[0].name, lineChartData[lineChartData.length - 1].name]} />
          <YAxis />
          <Line type="monotone" dataKey="totalCost" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const AI = () => {
  return (
    <div>
      <div>
      <h1 className="title">Manufacturing Calendar Scheduling</h1>
      </div>
      <CalendarHeatmap />
      <LineChartComponent />
      <Link to="/Graph">
            <button id="submitButton">Build Automated Process</button>
          </Link>
    </div>
  );
};

export default AI;