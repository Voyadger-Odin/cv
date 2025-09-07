import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import GitHubIcon from '@/shared/ui/icons/github.svg';
import { ImageShow } from '@/widgets/image';
import { SelfLink } from '@/widgets/links';
import { TPortfolio } from '@/widgets/portfolio/types';

export const Portfolio = ({ portfolio }: { portfolio: TPortfolio }) => {
  return (
    <div className={cn('flex flex-col gap-2')}>
      <Link
        className={'text-[20px] hover:text-color-dark-blue-9 duration-100'}
        href={portfolio.href}
        target={'_blank'}
      >
        {portfolio.title}
      </Link>
      <ImageShow img={portfolio.img}>
        <Image
          src={portfolio.img}
          alt={'portfolio'}
          width={1000}
          height={1000}
          className={cn('w-[300px] rounded-lg', 'border border-[#fff5]')}
        />
      </ImageShow>

      {!!portfolio.description && <span>{portfolio.description}</span>}

      {!!portfolio.links &&
        portfolio.links.map((link, index) => {
          return (
            <SelfLink
              key={index}
              link={{
                img: link.img,
                href: link.href,
                label: link.label,
              }}
            />
          );
        })}
    </div>
  );
};
