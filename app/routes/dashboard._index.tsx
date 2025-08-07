import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData, useFetcher } from "@remix-run/react";
import { getSession } from "~/utills/session.server";
import { useEffect, useState } from "react";
import { FiUsers, FiFileText, FiEye, FiDollarSign, FiTrendingUp, FiCalendar, FiRefreshCw } from "react-icons/fi";

interface User {
  id: string;
  username: string;
  token: string;
}

interface TopPage {
  _id: string;
  count: number;
}

interface Device {
  _id: string | null;
  count: number;
}

interface RecentLead {
  _id: string;
  path: string;
  visitedAt: string;
  deviceType: string;
}

interface DashboardStats {
  totalVisits: number;
  uniqueVisitors: number;
  leads: number;
  topPages: TopPage[];
  devices: Device[];
  recentLeads: RecentLead[];
}

interface DashboardLoaderData {
  user: User;
  stats: DashboardStats | null;
}

export const meta = () => [{ title: "Admin Dashboard" }];

export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const user = session.get("user");

  if (!token || !user) return redirect("/admin/login");

  try {
    const statsResponse = await fetch(`${process.env.API_BASE_URL}visitors/analytics/dashboard`, {
      headers: { 
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    });

    if (!statsResponse.ok) throw new Error("Failed to fetch stats");
    
    const stats = await statsResponse.json();
    
    // Ensure stats has all required fields with defaults
    const safeStats = {
      totalVisits: stats.totalVisits || 0,
      uniqueVisitors: stats.uniqueVisitors || 0,
      leads: stats.leads || 0,
      topPages: stats.topPages || [],
      devices: stats.devices || [],
      recentLeads: stats.recentLeads || []
    };

    return json<DashboardLoaderData>({ user, stats: safeStats });
  } catch (error) {
    console.error("Error loading dashboard stats:", error);
    return json<DashboardLoaderData>({ 
      user, 
      stats: {
        totalVisits: 0,
        uniqueVisitors: 0,
        leads: 0,
        topPages: [],
        devices: [],
        recentLeads: []
      } 
    });
  }
}

export default function DashboardOverview() {
  const { user, stats } = useLoaderData<DashboardLoaderData>();
  const fetcher = useFetcher<DashboardLoaderData>();
  const [currentStats, setCurrentStats] = useState(stats);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (fetcher.data) {
      setCurrentStats(fetcher.data.stats);
      setIsRefreshing(false);
    }
  }, [fetcher.data]);

  const refreshData = () => {
    setIsRefreshing(true);
    fetcher.load("/dashboard?index");
  };

  if (!currentStats) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          Failed to load analytics data. Please try refreshing the page.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
        <button
          onClick={refreshData}
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <FiRefreshCw className={`${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Data
        </button>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-medium">Welcome back, {user.username}!</h3>
        <p className="opacity-90 mt-1">Here's what's happening with your site today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FiUsers className="text-blue-500" size={24} />}
          title="Total Visits"
          value={currentStats.totalVisits}
          change="+0%"
          isPositive={true}
        />
        <StatCard 
          icon={<FiEye className="text-purple-500" size={24} />}
          title="Unique Visitors"
          value={currentStats.uniqueVisitors}
          change="+0%"
          isPositive={true}
        />
        <StatCard 
          icon={<FiFileText className="text-green-500" size={24} />}
          title="Top Pages"
          value={currentStats.topPages.length}
          change="+0%"
          isPositive={true}
        />
        <StatCard 
          icon={<FiDollarSign className="text-yellow-500" size={24} />}
          title="Leads"
          value={currentStats.leads}
          change="+0%"
          isPositive={true}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Pages */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-blue-500" />
            Popular Pages
          </h3>
          <div className="space-y-4">
            {currentStats.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{page._id}</span>
                <span className="font-medium">{page.count} views</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <FiCalendar className="text-purple-500" />
            Recent Leads
          </h3>
          <div className="space-y-4">
            {currentStats.recentLeads.map((lead, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">{lead.path}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(lead.visitedAt).toLocaleString()}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {lead.deviceType || 'Unknown'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg mb-4">Device Distribution</h3>
          <div className="space-y-3">
            {currentStats.devices.map((device, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-24 text-gray-600">
                  {device._id || 'Unknown'}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-4">
                  <div 
                    className="bg-blue-500 h-4 rounded-full" 
                    style={{ width: `${(device.count / currentStats.totalVisits) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 w-10 text-right">
                  {device.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// StatCard component remains the same
function StatCard({ icon, title, value, change, isPositive }: { 
  icon: React.ReactNode; 
  title: string; 
  value: number; 
  change: string; 
  isPositive: boolean 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value.toLocaleString()}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className={`text-sm mt-3 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change} from yesterday
      </p>
    </div>
  );
}