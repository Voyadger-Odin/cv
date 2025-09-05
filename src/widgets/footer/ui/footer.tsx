'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/utils';

export const Footer = () => {
  return (
    <footer className={cn('pt-32 pb-4')}>
      <div className={cn('flex flex-col gap-6', 'container')}>
        <div className={'flex flex-row'}>
          <span>© METROMINE.RU 2018-2025</span>

          <div className={'flex-1'} />

          <div className={'flex flex-col items-end text-sm'}>
            <span>ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ИВАНОВ ИВАН ИВАНОВИЧ</span>
            <span>ОГРН-123456789012345, ИНН-123456789012</span>
          </div>
        </div>

        <div className={'flex flex-row'}>
          <span className={'text-[14px]'}>Все права защищены!</span>

          <div className={'flex-1'} />

          <div
            className={cn('flex flex-row gap-4', 'text-[14px] text-color-light-gray-6')}
          >
            <Link href={'/'} className={'hover:text-color-dark-gray-8'}>
              Пользовательское соглашение
            </Link>
            <Link href={'/'} className={'hover:text-color-dark-gray-8'}>
              Политика конфиденциальности
            </Link>
            <Link href={'/'} className={'hover:text-color-dark-gray-8'}>
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
