'use client';

import { cn } from '@/shared/lib/utils';

export const Wipe = () => {
  return (
    <div className={cn('flex flex-col gap-6 items-center my-10')}>
      <span className={'text-lg text-[40px]'}>До вайпа</span>
      <span className={'font-jetbrains text-[26px]'}>10д 15ч 37м 42с</span>
    </div>
  );
};
