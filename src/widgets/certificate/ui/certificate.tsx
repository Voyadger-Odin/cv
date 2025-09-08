import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { toast } from 'sonner';

import { cn } from '@/shared/lib/utils';
import { TCertificate } from '@/widgets/certificate';
import { ImageShow } from '@/widgets/image';

export const Certificate = ({ certificate }: { certificate: TCertificate }) => {
  return (
    <div className={cn('flex flex-col gap-4 w-full')}>
      <ImageShow images={[certificate.img]}>
        <div className={'group overflow-hidden rounded-lg relative'}>
          <Image
            src={certificate.img}
            alt={'cert'}
            width={1000}
            height={1000}
            className={'group-hover:scale-110 transition'}
          />

          <div
            className={cn(
              'absolute top-0 left-0 w-full h-full bg-[#0007]',
              'flex items-center justify-center',
              'opacity-0 group-hover:opacity-100 transition',
            )}
          >
            <Eye size={60} />
          </div>
        </div>
      </ImageShow>

      <div className={'flex flex-col gap-1'}>
        <Link
          href={certificate.href}
          target={'_blank'}
          className={'text-[18px] hover:text-color-dark-blue-9'}
        >
          {certificate.title}
        </Link>

        {!!certificate.certificateNumber && (
          <span
            className={'text-sm text-gray-300 cursor-pointer'}
            onClick={() => {
              navigator.clipboard
                .writeText(certificate.certificateNumber as string)
                .then(() => toast('Номер сертификата скопирован в буфер обмена'))
                .catch((err) => toast('Произошла ошибка при копировании'));
            }}
          >
            {certificate.certificateNumber}
          </span>
        )}
      </div>
    </div>
  );
};
