import { useCallback } from 'react';

function useAuth() {
  // No backend integration - return no-op functions
  const callbackUrl =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('callbackUrl')
      : null;

  const signInWithCredentials = useCallback(
    (options) => {
      console.log('Sign in requires backend integration');
      return Promise.reject(new Error('Authentication requires backend integration'));
    },
    [callbackUrl]
  );

  const signUpWithCredentials = useCallback(
    (options) => {
      console.log('Sign up requires backend integration');
      return Promise.reject(new Error('Authentication requires backend integration'));
    },
    [callbackUrl]
  );

  const signInWithGoogle = useCallback(
    (options) => {
      console.log('Google sign in requires backend integration');
      return Promise.reject(new Error('Authentication requires backend integration'));
    },
    [callbackUrl]
  );

  const signInWithFacebook = useCallback((options) => {
    console.log('Facebook sign in requires backend integration');
    return Promise.reject(new Error('Authentication requires backend integration'));
  }, []);

  const signInWithTwitter = useCallback((options) => {
    console.log('Twitter sign in requires backend integration');
    return Promise.reject(new Error('Authentication requires backend integration'));
  }, []);

  const signOut = useCallback((options) => {
    // Just redirect to home for sign out
    if (typeof window !== 'undefined') {
      window.location.replace(options?.callbackUrl || '/');
    }
  }, []);

  return {
    signInWithCredentials,
    signUpWithCredentials,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut,
  };
}

export default useAuth;
