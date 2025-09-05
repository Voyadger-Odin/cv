import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Article } from '@/widgets/article';
import { Wipe } from '@/widgets/wipe';

export const MainPage = () => {
  return (
    <div className={cn('relative flex flex-col w-full', 'text-white')}>
      <div
        className={cn(
          'relative',
          'w-full h-[100vh] overflow-hidden',
          'bg-black',
          'flex items-center justify-center',
        )}
      >
        <Image
          src={'/imgs/main.png'}
          alt={'art'}
          width={2000}
          height={1000}
          className={'object-cover w-full h-full'}
        />

        <div className={'absolute container'}>
          <div
            className={
              'absolute top-1/2 -translate-y-1/2 flex flex-col gap-10 max-w-[50%]'
            }
          >
            <span className={'text-lg !text-[40pt]/[1.1]'}>
              Легендарный сервер Mineсraft по вселенной Metro
            </span>

            <span className={'text-md !text-[18pt] font-jetbrains'}>
              Погрузись в лор вселенной Metro на нашем сервере Minecraft!
            </span>
            <div className={'flex flex-row gap-4'}>
              <Button
                className={cn(
                  'bg-color-dark-green-6-primary/50 hover:bg-color-dark-green-4',
                  'px-20',
                  'font-bold font-jetbrains text-[20pt]',
                )}
                asChild
              >
                <Link href={'/play'}>Играть</Link>
              </Button>

              <Button
                variant={'ghost'}
                className={cn(
                  'hover:bg-color-dark-blue-4',
                  'px-20',
                  'font-bold font-jetbrains !text-[20pt]',
                )}
              >
                Правила !
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={'bg-blackest'}>
        <div className={cn('container mt-4', 'flex flex-col gap-4')}>
          {/* ВАЙП */}
          <Wipe />

          {/* Статьи */}
          <div className={'flex flex-col gap-6 w-[60%]'}>
            <Article />
            <Article />
            <Article />

            <Button className={'mt-4'} asChild>
              <Link href={'/articles'}>Все статьи</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
