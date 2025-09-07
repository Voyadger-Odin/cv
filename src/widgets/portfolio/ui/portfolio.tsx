import { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { ImageShow } from '@/widgets/image';
import { SelfLink } from '@/widgets/links';
import { TPortfolio } from '@/widgets/portfolio/types';

interface ImagesGroupProps {
  img: string | StaticImport;
}
const ImagesGroup = ({ img }: ImagesGroupProps) => {
  const [hovered, setHovered] = useState(false);
  const count = 3;

  const getRotate = (index: number) => {
    if (index === count - 1) {
      return hovered ? 2 : 0;
    }
    return -(hovered ? 4 : 2) * (count - index - 1);
  };

  const getTranslateX = (index: number) => {
    return -(hovered ? 100 : 40) * (count - index - 1);
  };

  const getTranslateY = (index: number) => {
    return -(hovered ? 50 : 30) * (count - index - 1);
  };

  const getSale = () => {
    return hovered ? 1.05 : 1;
  };

  return (
    <div
      className={'relative w-full h-full'}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {Array.from({ length: count }, (_, index) => index + 1).map((_, index) => {
        return (
          <Image
            key={index}
            src={img}
            alt={'img'}
            width={1000}
            height={1000}
            className={cn(
              `absolute right-0 bottom-0`,
              'transition duration-300',
              'w-[70%]',
              'border border-[#fff5] rounded-lg',
            )}
            style={{
              transform: `rotate(${getRotate(index)}deg) translate(${getTranslateX(index)}px,${getTranslateY(index)}px) scale(${getSale()})`,
            }}
          />
        );
      })}
    </div>
  );
};

export const Portfolio = ({ portfolio }: { portfolio: TPortfolio }) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <span className={'text-[25px]'}>{portfolio.title}</span>

      <ImageShow images={[portfolio.img, portfolio.img, portfolio.img]}>
        <div className={'flex flex-row w-full h-[400px] relative'}>
          <ImagesGroup img={portfolio.img} />
        </div>
      </ImageShow>

      <span>{portfolio.description}</span>

      <Link
        href={portfolio.href}
        target={'_blank'}
        className={cn(
          'flex flex-row gap-1 bg-white text-blackest w-fit h-fit rounded-lg px-4 py-2',
        )}
      >
        <span>View demo</span>

        <ArrowUpRight />
      </Link>
    </div>
  );
};
