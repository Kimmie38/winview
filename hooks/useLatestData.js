import { useQuery } from '@tanstack/react-query';
import mockApi from '@/utils/mockApi';

export function useLatestIppis(user, isAdmin) {
  return useQuery({
    queryKey: ['latest-ippis'],
    enabled: !!user && isAdmin,
    queryFn: async () => {
      return mockApi.getIppisApplications(5, 'created_at', 'desc');
    },
  });
}

export function useLatestAccounts(user, isAdmin) {
  return useQuery({
    queryKey: ['latest-accounts'],
    enabled: !!user && isAdmin,
    queryFn: async () => {
      return mockApi.getAccounts();
    },
  });
}

export function useLatestComplaints(user, isAdmin) {
  return useQuery({
    queryKey: ['latest-complaints'],
    enabled: !!user && isAdmin,
    queryFn: async () => {
      return mockApi.getComplaints();
    },
  });
}
