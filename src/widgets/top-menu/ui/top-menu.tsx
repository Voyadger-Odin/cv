import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import PersonIcon from '@/shared/ui/icons/person.svg';
import WorkIcon from '@/shared/ui/icons/work.svg';

const TopMenuButton = ({
  label,
  img,
  active,
}: {
  label: string;
  img?: string | StaticImport;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex flex-row gap-1 border border-[#0000] px-2 py-1 cursor-pointer rounded-full',
        'text-[14px]',
        !active && 'hover:border hover:border-[#fff5] hover:bg-[#fff2]',
        'transition duration-300',
        active && 'border border-[#fff5] bg-[#fff3]',
      )}
    >
      {img && <Image src={img} alt={'icon'} />}
      <span>{label}</span>
    </div>
  );
};

export const TopMenu = () => {
  return (
    <div className={cn('flex items-center justify-center p-2 w-full')}>
      <div
        className={cn(
          'flex flex-row gap-1',
          'bg-blackest p-1 rounded-full',
          'border border-[#fff5]',
        )}
      >
        <TopMenuButton label={'Обо мне'} img={PersonIcon} active={true} />
        <TopMenuButton label={'Работы'} img={WorkIcon} />
        <TopMenuButton label={'Обо мне'} />
      </div>
    </div>
  );
};
