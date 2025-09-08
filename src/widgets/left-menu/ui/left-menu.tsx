import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { TLeftMenu } from '@/widgets/left-menu';

export const LeftMenu = ({ menu }: { menu: TLeftMenu }) => {
  return (
    <div className={'flex flex-col gap-4'}>
      {menu.items.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex flex-row gap-4 items-center',
              'cursor-pointer hover:translate-x-1',
              'transition duration-100',
              'text-[20px]',
            )}
          >
            <div className={'w-[20px] h-px bg-gray-600'} />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
