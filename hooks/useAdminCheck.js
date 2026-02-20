import { useQuery } from '@tanstack/react-query';
import mockApi from '@/utils/mockApi';

export function useAdminCheck(user) {
  const { data: me, isLoading: meLoading } = useQuery({
    queryKey: ['admin-me'],
    enabled: !!user,
    queryFn: async () => {
      return mockApi.getAdminAllowlist(user?.id);
    },
  });

  const isAdmin = !!me?.isAdmin;

  return { isAdmin, meLoading };
}
