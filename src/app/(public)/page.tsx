import Link from 'next/link';

import { CVS } from '@/shared/data/data';
import { cn } from '@/shared/lib/utils';
import { CardHovered } from '@/widgets/card-hovered';

export default function Home() {
  return (
    <div className={'w-full h-full flex flex-col gap-10 items-center'}>
      <span
        className={
          'w-[80%] text-[60px] font-bold  mt-[100px] text-center animate-element-up'
        }
      >
        Инженер, программист, биолог
      </span>

      <span
        className={
          'w-[70%] text-[25px] text-[#fffa] font-light text-center animate-element-up'
        }
      >
        Моя цель сделать мир лучше, проще и удобнее. Поэтому у меня комплексное мышление,
        затрагивающие разные области, для получения наибольшего результата
      </span>

      <div className={'animate-element-up flex flex-col gap-4 w-full'}>
        {CVS.filter((cv) => !cv.disable).map((CV, index) => (
          <Link key={index} href={CV.href} className={'w-full'}>
            <CardHovered className={'flex flex-col gap-4'}>
              <span className={'text-[30px] font-bold'}>{CV.title}</span>
              <span className={'text-[20px] font-[400] text-[#fffa]'}>
                {CV.description}
              </span>
            </CardHovered>
          </Link>
        ))}
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 w-full h-full z-[5] opacity-100 backdrop-blur-ultra',
          'pointer-events-none',
          'transition animate-page-load-blur',
        )}
        style={{
          opacity: '0%',
        }}
      />

      <div
        className={cn(
          'fixed top-0 left-0 w-full h-full z-[5] opacity-100',
          'pointer-events-none',
          'bg-blackest',
          'transition animate-page-load',
        )}
        style={{
          opacity: '100%',
          maskImage: 'radial-gradient(circle at 0% 0%, transparent 10%, black 50%)',
          maskSize: '100% 100%',
        }}
      />
    </div>
  );
}
