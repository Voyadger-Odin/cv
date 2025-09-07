import { useEffect, useState } from 'react';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { TImageShow } from '@/widgets/image/types';

export const ImageShow = ({ images, children }: TImageShow) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const OnClickEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', OnClickEscape);

    return () => {
      document.removeEventListener('keydown', OnClickEscape);
    };
  }, []);

  return (
    <div className={'w-full h-full'}>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className={'cursor-pointer w-full h-fit'}
      >
        {children}
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 w-full h-full',
          'backdrop-blur-md',
          'z-[30]',
          'transition',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className={cn('w-full h-full relative')}>
          <div
            className={cn(
              'w-full h-full cursor-pointer',
              'transition',
              open ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
            onClick={() => {
              setOpen(false);
            }}
          />

          <div
            className={'absolute top-10 right-10 w-10 h-10 cursor-pointer'}
            onClick={() => {
              setOpen(false);
            }}
          >
            <XIcon size={40} />
          </div>

          <Carousel
            className={cn(
              'w-full max-w-[70%] h-[70%] text-blackest',
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'transition',
              open ? 'scale-100' : 'scale-110',
            )}
          >
            <CarouselContent className={'w-full h-full'}>
              {images.map((image, index) => (
                <CarouselItem key={index} className={cn('w-[70vw] h-[70vh]')}>
                  <div className={'w-full h-full flex items-center justify-center'}>
                    <Image src={image} alt={'img'} width={1000} height={1000} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
