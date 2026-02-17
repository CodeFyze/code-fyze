"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MetricCard from "@/components/admin/MetricCard";
import PeriodSelector from "@/components/admin/PeriodSelector";
import { LineChart, BarChart } from "@/components/admin/Charts";
import Loader from "@/components/ui/loader";
import { FiUsers, FiEye, FiDollarSign, FiPieChart, FiRefreshCw } from "react-icons/fi";

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

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [activePeriod, setActivePeriod] = useState<'week' | 'month' | 'quarter' | 'halfYear'>('week');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Check auth and fetch analytics
  useEffect(() => {
    const fetchData = async () => {
      // Check session storage
      const token = sessionStorage.getItem("token");
      const savedUser = sessionStorage.getItem("user");
      console.log("Token: "+token);
      // Check if user data exists
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error("Failed to parse user data", e);
        }
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}visitors/analytics`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          if (res.status === 401) {
            // Token expired or invalid
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            router.push("/admin/login");
            return;
          }
          throw new Error(`Failed to fetch analytics: ${res.statusText}`);
        }

        const data = await res.json();
        setAnalytics(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    };

    fetchData();
  }, [router]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Re-run fetch logic or manually call api again. 
    // Simpler here to just reload page or extract fetch logic. 
    // I'll reload window or re-trigger effect. Ideally extract fetch function.
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Loader className="w-10 h-10 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4">
        <p className="text-red-500 font-medium">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  // Ensure data exists before rendering
  if (!analytics) return null;

  const activeData = analytics[activePeriod];

  if (!activeData) {
    return (
      <div className="p-6 text-center text-gray-500">
        No data available for this period.
      </div>
    );
  }

  const trafficChartData = {
    labels: activeData.pageViewsOverTime.map(p => p._id),
    datasets: [
      {
        label: 'Page Views',
        data: activeData.pageViewsOverTime.map(p => p.count),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.1
      }
    ]
  };

  const topPagesChartData = {
    labels: activeData.topPages.map(p => p._id),
    datasets: [
      {
        label: 'Views',
        data: activeData.topPages.map(p => p.count),
        backgroundColor: ['rgba(16, 185, 129, 0.7)', 'rgba(59, 130, 246, 0.7)', 'rgba(245, 158, 11, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(244, 63, 94, 0.7)']
      }
    ]
  };

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">CodeFyze</span></h2>
        <p className="text-gray-500">Here's what's happening today.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <PeriodSelector activePeriod={activePeriod} onChange={setActivePeriod} />
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 w-full sm:w-auto justify-center"
          disabled={isRefreshing}
          onClick={handleRefresh}
        >
          <FiRefreshCw className={`${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard icon={<FiUsers />} title="Total Visits" value={activeData.totalVisits} />
        <MetricCard icon={<FiEye />} title="Unique Visitors" value={activeData.uniqueVisitors} />
        <MetricCard icon={<FiDollarSign />} title="Leads" value={activeData.leads} />
        <MetricCard icon={<FiPieChart />} title="Avg. Duration" value={`${Math.round(activeData.visitDuration)}s`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow border border-gray-200 h-64">
          <LineChart data={trafficChartData} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow border border-gray-200 h-64">
          <BarChart data={topPagesChartData} />
        </div>
      </div>
    </>
  );
}
