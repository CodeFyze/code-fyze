'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../lib/hooks';
import { selectCurrentUser, initializeAuth } from '../lib/features/auth/authSlice';

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function WithAuth(props: P) {
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      // 1. Try to initialize from storage
      dispatch(initializeAuth());

      // 2. Check for token
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      if (!token) {
        router.push('/admin');
      } else {
        // If passed, we stop "checking" and let the component render (or the user state will update)
        setIsChecking(false);
      }
    }, [dispatch, router]);

    // While checking or if we have a token but no user yet (async/state delay), show loading
    // But initializeAuth is sync for localStorage. 
    // If token exists but user is null, initializeAuth should have set it, unless invalid.

    // If not checking, and we have a user, render.
    if (user) {
      return <Component {...props} />;
    }

    // If not checking but no user (and token existed), it might be invalid -> useEffect would redirect?
    // Actually, initializeAuth parses user from storage. If it fails, token is null?
    // Let's rely on the useEffect redirect.

    // Show loading state while checking or redirecting
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  };
}

export function withGuest<P extends object>(Component: React.ComponentType<P>) {
  return function WithGuest(props: P) {
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      dispatch(initializeAuth());
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      if (token) {
        // Already logged in
        router.push('/dashboard');
      } else {
        setIsChecking(false);
      }
    }, [dispatch, router]);

    if (isChecking) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
