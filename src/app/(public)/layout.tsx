import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className={'bg-blackest text-white'}>
      <Header />
      <main className={cn('w-full h-full')}>{children}</main>
      <Footer />
    </div>
  );
}
