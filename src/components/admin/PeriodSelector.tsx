import React from "react";

export default function PeriodSelector({
  activePeriod,
  onChange
}: {
  activePeriod: 'week' | 'month' | 'quarter' | 'halfYear';
  onChange: (period: 'week' | 'month' | 'quarter' | 'halfYear') => void;
}) {
  const periods = [
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'halfYear', label: '6 Months' }
  ];

  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
      {periods.map(period => (
        <button
          key={period.value}
          onClick={() => onChange(period.value as any)}
          className={`px-3 py-2 text-sm font-medium transition-colors ${activePeriod === period.value
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-50'
            }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
