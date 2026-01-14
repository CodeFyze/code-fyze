'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { makeStore, type AppStore } from './store';
import { initializeAuth } from './features/auth/authSlice';

export default function StoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeAuth());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
