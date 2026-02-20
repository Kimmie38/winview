import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useIppisApplications(user, isAdmin, filters) {
  const queryString = useMemo(() => {
    const sp = new URLSearchParams();
    if (filters.search?.trim()) sp.set('search', filters.search.trim());
    if (filters.rank) sp.set('rank', filters.rank);
    if (filters.payPoint) sp.set('payPoint', filters.payPoint);
    if (filters.stateFilter) sp.set('state', filters.stateFilter);
    if (filters.hasPoliceId) sp.set('hasPoliceId', filters.hasPoliceId);
    if (filters.sortBy) sp.set('sortBy', filters.sortBy);
    if (filters.sortDir) sp.set('sortDir', filters.sortDir);
    sp.set('limit', '200');
    return sp.toString();
  }, [
    filters.search,
    filters.rank,
    filters.payPoint,
    filters.stateFilter,
    filters.hasPoliceId,
    filters.sortBy,
    filters.sortDir,
  ]);

  // Return empty data - no backend integration
  const data = { applications: [] };
  const applications = [];
  const isLoading = false;
  const isError = false;
  const error = null;
  const refetch = () => {};

  return { applications, isLoading, isError, error, refetch };
}
