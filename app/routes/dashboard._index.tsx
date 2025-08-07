import { json, redirect } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { getSession } from "~/utills/session.server";
import { useEffect, useState } from "react";
import { 
  FiUsers, 
  FiEye, 
  FiFileText, 
  FiDollarSign, 
  FiTrendingUp, 
  FiCalendar, 
  FiRefreshCw,
  FiExternalLink,
  FiPieChart,
  FiGlobe
} from "react-icons/fi";
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
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
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

interface AnalyticsData {
  week: TimePeriodData;
  month: TimePeriodData;
  quarter: TimePeriodData;
  halfYear: TimePeriodData;
  timestamp: string;
}

interface TimePeriodData {
  totalVisits: number;
  uniqueVisitors: number;
  leads: number;
  topPages: { _id: string; count: number }[];
  pageViewsOverTime: { _id: string; count: number }[];
  referrers: { _id: string; count: number }[];
  visitDuration: number;
}

interface User {
  id: string;
  username: string;
  token: string;
}

interface DashboardLoaderData {
  user: User;
  analytics: AnalyticsData;
}

export const meta = () => [{ title: "Analytics Dashboard" }];

export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const user = session.get("user");

  if (!token || !user) return redirect("/admin/login");

  try {
    const response = await fetch(`${process.env.API_BASE_URL}visitors/analytics`, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error("Failed to fetch analytics");
    
    const analytics = await response.json();
    
    return json<DashboardLoaderData>({ user, analytics });
  } catch (error) {
    console.error("Dashboard error:", error);
    return json<DashboardLoaderData>({ 
      user, 
      analytics: {
        week: createEmptyPeriodData(),
        month: createEmptyPeriodData(),
        quarter: createEmptyPeriodData(),
        halfYear: createEmptyPeriodData(),
        timestamp: new Date().toISOString()
      }
    });
  }
}

function createEmptyPeriodData(): TimePeriodData {
  return {
    totalVisits: 0,
    uniqueVisitors: 0,
    leads: 0,
    topPages: [],
    pageViewsOverTime: [],
    referrers: [],
    visitDuration: 0
  };
}

export default function DashboardOverview() {
  const { user, analytics } = useLoaderData<DashboardLoaderData>();
  const fetcher = useFetcher<DashboardLoaderData>();
  const [currentAnalytics, setCurrentAnalytics] = useState(analytics);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activePeriod, setActivePeriod] = useState<'week' | 'month' | 'quarter' | 'halfYear'>('week');

  useEffect(() => {
    if (fetcher.data) {
      setCurrentAnalytics(fetcher.data.analytics);
      setIsRefreshing(false);
    }
  }, [fetcher.data]);

  const refreshData = () => {
    setIsRefreshing(true);
    fetcher.load("/dashboard?index");
  };

  const activeData = currentAnalytics[activePeriod];
  const lastUpdated = new Date(currentAnalytics.timestamp).toLocaleString();

  // Chart.js data configuration
  const trafficChartData = {
    labels: activeData.pageViewsOverTime.map(item => 
      activePeriod === 'week' || activePeriod === 'month' ? 
      item._id : `Week ${item._id.split('-')[1]}`
    ),
    datasets: [
      {
        label: 'Page Views',
        data: activeData.pageViewsOverTime.map(item => item.count),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.1,
        fill: true
      }
    ]
  };

  const topPagesChartData = {
    labels: activeData.topPages.map(page => page._id === '/' ? 'Homepage' : page._id),
    datasets: [
      {
        label: 'Views',
        data: activeData.topPages.map(page => page.count),
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(244, 63, 94, 0.7)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(244, 63, 94, 1)',
        ],
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const lineChartOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Last updated: {lastUpdated}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <PeriodSelector 
            activePeriod={activePeriod}
            onChange={setActivePeriod}
          />
          
          <button
            onClick={refreshData}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            disabled={isRefreshing}
          >
            <FiRefreshCw className={`${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-medium">Welcome back, {user.username}!</h2>
        <p className="opacity-90 mt-1">
          Here's your {activePeriod === 'week' ? 'weekly' : 
                      activePeriod === 'month' ? 'monthly' : 
                      activePeriod === 'quarter' ? 'quarterly' : 'half-yearly'} analytics overview
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard 
          icon={<FiUsers className="text-blue-500" size={20} />}
          title="Total Visits"
          value={activeData.totalVisits}
          change={calculateChange(currentAnalytics, 'totalVisits', activePeriod)}
        />
        <MetricCard 
          icon={<FiEye className="text-purple-500" size={20} />}
          title="Unique Visitors"
          value={activeData.uniqueVisitors}
          change={calculateChange(currentAnalytics, 'uniqueVisitors', activePeriod)}
        />
        <MetricCard 
          icon={<FiDollarSign className="text-green-500" size={20} />}
          title="Leads"
          value={activeData.leads}
          change={calculateChange(currentAnalytics, 'leads', activePeriod)}
        />
        <MetricCard 
          icon={<FiPieChart className="text-amber-500" size={20} />}
          title="Avg. Duration"
          value={`${Math.round(activeData.visitDuration)}s`}
          change={calculateChange(currentAnalytics, 'visitDuration', activePeriod)}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Traffic Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FiTrendingUp className="text-blue-500" />
              Traffic Overview
            </h3>
            <span className="text-sm text-gray-500">
              {activePeriod === 'week' ? 'Daily' : 'Weekly'} views
            </span>
          </div>
          <div className="h-64">
            <Line 
              data={trafficChartData} 
              options={lineChartOptions} 
            />
          </div>
        </div>

        {/* Top Pages Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FiFileText className="text-green-500" />
              Top Pages
            </h3>
            <span className="text-sm text-gray-500">
              {activeData.topPages.length} pages
            </span>
          </div>
          <div className="h-64">
            <Bar 
              data={topPagesChartData} 
              options={chartOptions} 
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Referrers */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FiGlobe className="text-purple-500" />
              Top Referrers
            </h3>
          </div>
          <div className="space-y-3">
            {activeData.referrers.length > 0 ? (
              activeData.referrers.map((referrer, index) => (
                <div key={index} className="flex justify-between items-center">
                  <a 
                    href={`https://${referrer._id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {referrer._id}
                    <FiExternalLink size={14} />
                  </a>
                  <span className="font-medium">{referrer.count}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-4">No referrer data available</p>
            )}
          </div>
        </div>

        {/* Page Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <FiFileText className="text-blue-500" />
            Page Performance Details
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeData.topPages.map((page, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {page._id === '/' ? 'Homepage' : page._id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {page.count}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {((page.count / activeData.totalVisits) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeriodSelector({
  activePeriod,
  onChange
}: {
  activePeriod: 'week' | 'month' | 'quarter' | 'halfYear';
  onChange: (period: 'week' | 'month' | 'quarter' | 'halfYear') => void;
}) {
  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
      {[
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'quarter', label: 'Quarter' },
        { value: 'halfYear', label: '6 Months' }
      ].map((period) => (
        <button
          key={period.value}
          onClick={() => onChange(period.value as any)}
          className={`px-3 py-2 text-sm font-medium transition-colors ${
            activePeriod === period.value
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

function MetricCard({
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

function calculateChange(
  analytics: AnalyticsData, 
  metric: keyof TimePeriodData,
  currentPeriod: 'week' | 'month' | 'quarter' | 'halfYear'
): number {
  // Get the previous period based on current period
  let previousPeriod: typeof currentPeriod;
  if (currentPeriod === 'week') previousPeriod = 'month';
  else if (currentPeriod === 'month') previousPeriod = 'quarter';
  else previousPeriod = 'halfYear';

  const currentValue = analytics[currentPeriod][metric] as number;
  const previousValue = analytics[previousPeriod][metric] as number;

  if (previousValue === 0) return 0;
  
  return Math.round(((currentValue - previousValue) / previousValue) * 100);
}