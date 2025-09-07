import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { TImageShow } from '@/widgets/image/types';

export const ImageShow = ({ img, children }: TImageShow) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={''}>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className={'cursor-pointer w-fit h-fit'}
      >
        {children}
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 w-full h-full',
          'flex items-center justify-center',
          'backdrop-blur-md',
          'z-[30]',
          'cursor-pointer transition',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => {
          setOpen(false);
        }}
      >
        <Image
          src={img}
          alt={'img'}
          width={1000}
          height={1000}
          className={cn('transition', open ? 'scale-100' : 'scale-110')}
        />
      </div>
    </div>
  );
};
