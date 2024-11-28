import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

import './chart.css'

const Char = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { day: 'Monday', count: 10 },
      { day: "Tuesday", count: 20 },
      { day: "Wednesday", count: 15 },
      { day: 'Thirsday', count: 25 },
      { day: 'Friday', count: 22 },
      { day: 'Saturday', count: 30 },
      { day: 'Sunday', count: 28 },
    ];
  
    const myChart = new Chart(
      chartRef.current,
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.day),
          datasets: [
            {
              label: 'Learned words by day',
              data: data.map(row => row.count),
              backgroundColor: '#9966FF'
            }
          ]
        }
      }
    );

    return () => {
      myChart.destroy();
    };
  }, []);

  

  return(
    <canvas className="chart" ref={chartRef}></canvas>
  );
}

export default Char;