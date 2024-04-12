import React, { useEffect, useRef } from 'react';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import LegendLite from 'cal-heatmap/plugins/LegendLite';
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

const App = () => {
  const calRef = useRef(null);

  useEffect(() => {
    const cal = new CalHeatmap();
    const today = new Date();
    const month = generateRandomNumber(4, 12);
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
  }, []);

  return (
    <div
    style={{
      background: '#22272d',
      color: '#adbac7',
      borderRadius: '3px',
      padding: '1rem',
      overflow: 'hidden',
    }}
  >
    <div ref={calRef}></div>
    <div style={{ float: 'right', fontSize: 12 }}>
      <span style={{ color: '#768390' }}>Less</span>
      <div
        id="ex-ghDay-legend"
        style={{ display: 'inline-block', margin: '0 4px' }}
      ></div>
      <span style={{ color: '#768390', fontSize: 12 }}>More</span>
    </div>
  </div>
  );
};

export default App;