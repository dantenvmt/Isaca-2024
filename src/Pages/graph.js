import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './graph.css';
import { Link } from "react-router-dom";

const generateRandomData = () => {
  return [
    {
      name: 'Milestone 1 - Deployment Tasks',
      value: Math.floor(Math.random() * 501) + 500,
      total: Math.floor(Math.random() * 1001) + 1000,
      beats: 99.96,
      color: '#4caf50',
    },
    {
      name: 'Milestone 2 - Testing Tasks',
      value: Math.floor(Math.random() * 501) + 500,
      total: Math.floor(Math.random() * 1001) + 1000,
      beats: 99.98,
      color: '#ffa500',
    },
    {
      name: 'Milestone 3 - Monitoring Tasks',
      value: Math.floor(Math.random() * 501) + 500,
      total: Math.floor(Math.random() * 1001) + 1000,
      beats: 99.8,
      color: '#f44336',
    },
  ];
};

const generateBellCurveData = () => {
  const mean = 10;
  const stdDev = 3;
  const dataPoints = 18;
  const data = [];

  for (let i = 0; i < dataPoints; i++) {
    const x = i - dataPoints / 2;
    const exponent = -0.5 * Math.pow(x / stdDev, 2);
    const y = Math.exp(exponent) / (stdDev * Math.sqrt(2 * Math.PI));
    data.push(Math.round(y * 100));
  }

  return data;
};

const Graph = () => {
  const data = generateRandomData();

  const totalSolved = data.reduce((sum, item) => sum + item.value, 0);
  const totalProblems = data.reduce((sum, item) => sum + item.total, 0);
  const percentage = (totalSolved / totalProblems) * 100;

  const bellCurveData = generateBellCurveData();
  const highlightedColumn = Math.floor((percentage / 100) * bellCurveData.length);

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
              text={`${Math.round(percentage)}%`}
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
        <h1 className="title">Current Task Progress</h1>
        <div className="bell-curve-content">
          <div className="bell-curve-label">
            Completed
            <h2>{Math.round(percentage)}%</h2>
          </div>
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
      <br></br>
      <Link to="/">
            <button id="submitButton">Try out different build</button>
          </Link>
    </div>
  );
};

export default Graph;