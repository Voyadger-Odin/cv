'use client';

import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux';

import { ReactNode } from 'react';

export function AppProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
