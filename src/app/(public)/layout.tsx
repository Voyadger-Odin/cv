import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';
import HomeIcon from '@/shared/ui/icons/home.svg';
import MarkIcon from '@/shared/ui/icons/mark.svg';
import SunIcon from '@/shared/ui/icons/sun.svg';
import WorkIcon from '@/shared/ui/icons/work.svg';
import { Toaster } from '@/shared/ui/sonner';
import { Separator, TopMenu, TopMenuButton } from '@/widgets/top-menu';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className={'bg-blackest text-white'}>
      <main className={cn('w-full h-full')}>
        <div
          className={cn(
            'relative flex flex-col w-full items-center',
            'text-white font-sanFrancisco',
            'min-h-[100vh] p-10',
          )}
        >
          {/* Background */}
          <div
            className={cn('absolute top-0 left-0 w-[100%] h-[100vh] z-[1]')}
            style={{
              maskImage: 'radial-gradient(100vh at 50% 0%,black 0,transparent 100%)',
              maskSize: '100% 100%',
            }}
          >
            <div
              className={'w-full h-full'}
              style={{
                backgroundImage: 'radial-gradient(#094074 1px, #000000 1px)',
                backgroundSize: '0.125rem 0.125rem',
                opacity: '60%',
              }}
            />
          </div>

          <div className={'w-full flex flex-col items-center z-[10]'}>
            <div
              className={'fixed top-0 left-0 w-full h-[5rem] z-[1]'}
              style={{
                backdropFilter: 'blur(.9rem)',
                background: 'linear-gradient(180deg,#000000,transparent)',
                maskImage: 'linear-gradient(180deg,black 30%,transparent 100%)',
              }}
            />

            <div className={'sticky top-0 z-[10] w-full'}>
              <TopMenu>
                <TopMenuButton img={HomeIcon} href={'/'} active={true} />
                <Separator />
                <TopMenuButton label={'Работы'} img={WorkIcon} />
                <TopMenuButton label={'Достижения'} img={MarkIcon} />
                <Separator />
                <TopMenuButton img={SunIcon} />
              </TopMenu>
            </div>

            <div className={'max-w-[1200px]'}>{children}</div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
