import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className={'bg-blackest text-white'}>
      <main className={cn('w-full h-full')}>{children}</main>
    </div>
  );
}
