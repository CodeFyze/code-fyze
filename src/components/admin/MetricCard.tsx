import React from "react";

export default function MetricCard({
  icon,
  title,
  value,
  change
}: {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  change?: number;
}) {
  const isPositive = change === undefined ? true : change >= 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      {change !== undefined && (
        <p className={`text-sm mt-3 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}% from previous period
        </p>
      )}
    </div>
  );
}
