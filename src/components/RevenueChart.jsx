import React from 'react';

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
  } from 'recharts';


const data = [
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Jun",
      "uv": 3490,
      "pv": 4300
    },
    {
        "name": "Jul",
        "uv": 4000,
        "pv": 2400
      },
      {
        "name": "Aug",
        "uv": 3000,
        "pv": 1398
      },
      {
        "name": "Sep",
        "uv": 3490,
        "pv": 4300
      },

  ]


const RevenueChart = () => {
    return (
        <div>
            <BarChart width={700} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#4F46E5" radius={[10, 10, 10, 10]} />
                <Bar dataKey="uv" fill="#d6d4d0" radius={[10, 10, 10, 10]} />
            </BarChart>
        </div>
    );
};

export default RevenueChart;