'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils';

export const Header = () => {
  const pathname = usePathname();

  const HeaderButton = ({
    name,
    href,
    isOpen,
  }: {
    name: string;
    href: string;
    isOpen?: boolean;
  }) => {
    return (
      <div className={'relative'}>
        <Link
          href={href}
          className={cn(
            'text-white hover:text-color-light-gray-8',
            'transition-all duration-100',
            'text-[18px]',
          )}
        >
          {name}
        </Link>

        {isOpen && (
          <div
            className={cn(
              'absolute -bottom-2 left-1/2 -translate-x-1/2',
              'w-[70%] h-[2px] bg-white rounded-full ',
            )}
          />
        )}
      </div>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2',
        'w-full h-16',
        'z-fixed',
        'font-jetbrains container',
      )}
    >
      <div
        className={cn(
          'bg-white/10 text-white',
          'rounded-lg backdrop-blur-[20px]',
          'p-4 px-8',
          'flex flex-row items-center',
        )}
      >
        <div className={'flex flex-row gap-8'}>
          <HeaderButton name={'MetroMine'} href={'/'} />
          <HeaderButton name={'Играть'} href={'/play'} isOpen={pathname === '/play'} />
          <HeaderButton name={'Правила'} href={'/'} isOpen={pathname === '/rule'} />
          <HeaderButton
            name={'Миниигры'}
            href={'/mini-games'}
            isOpen={pathname === '/mini-games'}
          />
          <HeaderButton name={'Донат'} href={'/donate'} isOpen={pathname === '/donate'} />
          <HeaderButton name={'Помощь'} href={'/'} isOpen={pathname === '/help'} />
          <HeaderButton name={'BugReport'} href={'/'} isOpen={pathname === '/help'} />
        </div>

        <div className={'flex-1'} />

        <div className={'flex flex-row gap-4'}>
          <HeaderButton name={'Войти'} href={'/'} />
        </div>
      </div>
    </header>
  );
};
