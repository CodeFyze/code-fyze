"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ data }: { data: any }) => {
  return <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export const BarChart = ({ data }: { data: any }) => {
  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
};
