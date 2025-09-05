'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

import ArticleImg1 from './img/ArticleImg1.png';

export const Article = () => {
  return (
    <div className={cn('flex flex-col gap-2', 'text-white')}>
      <div
        className={cn(
          'flex items-center justify-center',
          'w-full h-[300px] bg-color-dark-gray-10',
          'rounded-lg overflow-hidden',
        )}
      >
        <Image
          src={ArticleImg1}
          alt={'art'}
          width={1000}
          height={1000}
          className={'w-full h-full object-cover'}
        />
      </div>
      <span className={'text-lg'}>Title</span>
      <span>
        ✨ Сезон на GTM подходит к концу!
        <br />
        <br />
        🔥 Новый сезон начнется уже в эту пятницу (18.04) в 16:30 по МСК.
        <br />
        <br />
        🍀 Информация о наградах за топ и об обновлении будет опубликована в это же время.
        <br />
        <br />
        🎉 Приятной игры!
      </span>

      <div className={'flex flex-row items-center'}>
        <Button
          asChild
          variant={'link'}
          className={cn(
            'text-color-dark-blue-6-primary hover:text-color-dark-blue-4',
            'w-fit',
            'p-0',
          )}
        >
          <Link href={'/'}>Читать дальше →</Link>
        </Button>

        <div className={'flex-1'} />

        <span className={'font-jetbrains text-sm text-color-dark-gray-10'}>
          27.05.2025
        </span>
      </div>
    </div>
  );
};
