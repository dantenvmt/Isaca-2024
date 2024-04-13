// Graph.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './graph.css';

const data = [
  {
    name: 'Milestone 1 - Deployment Tasks',
    value: 580,
    total: 783,
    beats: 99.96,
    color: '#4caf50',
  },
  {
    name: 'Milestone 2 - Testing Tasks',
    value: 1170,
    total: 1624,
    beats: 99.98,
    color: '#ffa500',
  },
  {
    name: 'Milestone 3 - Monitoring Tasks',
    value: 250,
    total: 687,
    beats: 99.8,
    color: '#f44336',
  },
];

const Graph = () => {
  const totalSolved = data.reduce((sum, item) => sum + item.value, 0);
  const totalProblems = data.reduce((sum, item) => sum + item.total, 0);
  const percentage = (totalSolved / totalProblems) * 100;

  const bellCurveData = [2, 3,4,5,10,12,13,15,12,9,7,5,4, 3,2, 1,1, 1];
  const highlightedColumn = 12;

  const graphWidth = bellCurveData.length * 10;
  const graphHeight = Math.max(...bellCurveData) * 2;

  return (
    <div>
      <h1 className="title">Controlling and Monitoring Production Dashboards</h1>
      <div className="graph-container">
        <div className="problems-solved-text">Tasks Completed</div>
        <div className="graphs">
          <div className="circular-progress-container">
            <CircularProgressbar
              value={percentage}
              text={`${totalSolved}`}
              strokeWidth={5}
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#0088FE',
                textColor: '#fff',
                trailColor: '#00447f',
                backgroundColor: '#1c1c1c',
              })}
            />
          </div>
          <div className="horizontal-progress-container">
            {data.map((item, index) => (
              <div key={index} className="task-progress">
                <div className="task-name">{item.name}</div>
                <div className={`progress-bar progress-bar-milestone-${index + 1}`}>
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(item.value / item.total) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                  <div className="progress-text">
                    {item.value} / {item.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bell-curve-container">
      <h1 className="title">Current Task Completed</h1>
        <div className="bell-curve-graph">
          <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
            {bellCurveData.map((value, index) => (
              <rect
                key={index}
                x={index * 10}
                y={graphHeight - value * 2}
                width="10"
                height={value * 2}
                fill={index === highlightedColumn ? '#ff9800' : '#888'}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Graph;