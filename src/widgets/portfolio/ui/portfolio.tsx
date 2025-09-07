import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import GitHubIcon from '@/shared/ui/icons/github.svg';
import { SelfLink } from '@/widgets/links';
import { TPortfolio } from '@/widgets/portfolio/types';

export const Portfolio = ({ portfolio }: { portfolio: TPortfolio }) => {
  return (
    <div className={cn('flex flex-col gap-1')}>
      <Link
        className={'text-[20px] hover:text-color-dark-blue-9 duration-100'}
        href={'https://voyadger-odin.github.io/MendeleevTable/'}
        target={'_blank'}
      >
        Таблица Менделеева
      </Link>
      <Image
        src={portfolio.img}
        alt={'portfolio'}
        width={1000}
        height={1000}
        className={cn('w-[300px] rounded-lg', 'border border-[#fff5]')}
      />
      <SelfLink
        link={{
          img: GitHubIcon,
          src: 'https://github.com/Voyadger-Odin/MendeleevTable',
          label: 'GitHub',
        }}
      />
    </div>
  );
};
