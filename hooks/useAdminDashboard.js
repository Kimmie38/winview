import { useEffect, useState } from 'react';
import mockApi from '@/utils/mockApi';

export function useAdminDashboard(user, isAdmin) {
  const [metrics, setMetrics] = useState(null);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !isAdmin) return;
    fetchDashboardData();
  }, [user, isAdmin]);

  const fetchDashboardData = async () => {
    try {
      const [metricsData, trendsData] = await Promise.all([
        mockApi.getAdminMetrics(),
        mockApi.getAdminTrends(),
      ]);

      setMetrics(metricsData);
      setTrends(trendsData.trends);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };
}
