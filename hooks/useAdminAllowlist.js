import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import mockApi from '@/utils/mockApi';

export function useAdminAllowlist(user, isAdmin) {
  const queryClient = useQueryClient();

  const {
    data: allowlistData,
    isLoading: allowlistLoading,
    refetch: refetchAllowlist,
  } = useQuery({
    queryKey: ['admin-allowlist'],
    enabled: !!user && isAdmin,
    queryFn: async () => {
      return mockApi.getAdminAllowlist();
    },
  });

  const addAdmin = useMutation({
    mutationFn: async (email) => {
      // Extract userId from email for mock (in real app, backend would handle this)
      return mockApi.addToAdminAllowlist(email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-allowlist'] });
    },
  });

  const removeAdmin = useMutation({
    mutationFn: async (email) => {
      return mockApi.removeFromAdminAllowlist(email);
    },
    removeAdmin: {
      mutate: () => {},
      isPending: false,
    },
  };
}
