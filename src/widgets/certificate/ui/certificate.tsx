import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { TCertificate } from '@/widgets/certificate';
import { ImageShow } from '@/widgets/image';

export const Certificate = ({ certificate }: { certificate: TCertificate }) => {
  return (
    <div className={cn('flex flex-col gap-4 w-[400px]')}>
      <ImageShow images={[certificate.img]}>
        <div className={'overflow-hidden rounded-lg'}>
          <Image
            src={certificate.img}
            alt={'cert'}
            width={1000}
            height={1000}
            className={'hover:scale-110 transition'}
          />
        </div>
      </ImageShow>

      <Link
        href={certificate.href}
        target={'_blank'}
        className={'text-[18px] hover:text-color-dark-blue-9'}
      >
        {certificate.title}
      </Link>
    </div>
  );
};
