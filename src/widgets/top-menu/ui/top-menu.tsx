import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';

import type { ReactNode } from 'react';

export const TopMenuButton = ({
  label,
  img,
  active,
  href,
}: {
  label?: string;
  img?: string | StaticImport;
  active?: boolean;
  href?: string;
}) => {
  return (
    <Link href={href ?? ''}>
      <div
        className={cn(
          'flex flex-row items-center justify-center gap-1 border border-[#0000] px-2 p-1 cursor-pointer rounded-full',
          'text-[14px]',
          label && 'px-2',
          !label && 'w-[31px] h-[31px]',
          !active && 'hover:border hover:border-[#fff3] hover:bg-[#fff2]',
          'transition duration-300',
          active && 'border border-[#fff3] bg-[#fff3]',
        )}
      >
        {img && <Image src={img} alt={'icon'} />}
        {label && <span>{label}</span>}
      </div>
    </Link>
  );
};

export const Separator = () => {
  return <div className={cn('h-[25px] w-[1px] bg-[#fff3]')} />;
};

export const TopMenu = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn('flex items-center justify-center p-2 w-full')}>
      <div
        className={cn(
          'flex flex-row gap-1 items-center',
          'bg-blackest p-1 rounded-full',
          'border border-[#fff3]',
          'shadow-[#000f] shadow-md',
        )}
      >
        {children}
      </div>
    </div>
  );
};
