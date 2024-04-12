import React, { useEffect, useRef } from 'react';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import LegendLite from 'cal-heatmap/plugins/Legend';
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomData(startDate, endDate) {
  const data = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    data.push({
      date: currentDate.toISOString().slice(0, 10),
      value: generateRandomNumber(0, 2),
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
          type: 'quantize',
          range: ['green', 'yellow', 'red'],
          interpolate: 'hsl',
          domain: [0, 1, 2],
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
            let taskDifficulty = '';
            if (value === 0) {
              taskDifficulty = 'No task';
            } else if (value === 1) {
              taskDifficulty = 'Easy task';
            } else if (value === 2) {
              taskDifficulty = 'Hard task';
            }
            return taskDifficulty + ' on ' + dayjsDate.format('LL');
          },
        },
      ],
     ,
    ]);
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      <div ref={calRef}></div>
      <div id="ex-wind-legend" style={{ float: 'right' }}></div>
    </div>
  );
};

export default App;