import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEnvironment(): 'development' | 'github' | 'production' | string {
  // Client
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'development';
    }
    if (hostname.endsWith('github.io')) {
      return 'github';
    }
    return 'production';
  }

  // Server / Production
  return process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
}
