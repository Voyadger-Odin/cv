import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { TLink } from '@/widgets/links/types';

export const SelfLink = ({ link }: { link: TLink }) => {
  return (
    <Link
      href={link.src}
      target={'_blank'}
      className={cn(
        'flex flex-row gap-1 items-center w-fit',
        'border border-[#fff5] rounded-full text-[14px]',
        'cursor-pointer hover:bg-[#fff3]',
        'p-1 px-2',
        link.img && 'pl-1',
      )}
    >
      {link.img && <Image src={link.img} alt={'GitHubIcon'} className={'max-w-[20px]'} />}
      {link.label}
    </Link>
  );
};
