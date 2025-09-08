import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import HomeIcon from '@/shared/ui/icons/home.svg';
import MarkIcon from '@/shared/ui/icons/mark.svg';
import PersonIcon from '@/shared/ui/icons/person.svg';
import SunIcon from '@/shared/ui/icons/sun.svg';
import WorkIcon from '@/shared/ui/icons/work.svg';

const TopMenuButton = ({
  label,
  img,
  active,
}: {
  label?: string;
  img?: string | StaticImport;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center justify-center gap-1 border border-[#0000] px-2 p-1 cursor-pointer rounded-full',
        'text-[14px]',
        label && 'px-2',
        !label && 'w-[31px] h-[31px]',
        !active && 'hover:border hover:border-[#fff3] hover:bg-[#fff2]',
        'transition duration-300',
        active && 'border border-[#fff3] bg-[#fff3]',
      )}
    >
      {img && <Image src={img} alt={'icon'} />}
      {label && <span>{label}</span>}
    </div>
  );
};

const Separator = () => {
  return <div className={cn('h-[25px] w-[1px] bg-[#fff3]')} />;
};

export const TopMenu = () => {
  return (
    <div className={cn('flex items-center justify-center p-2 w-full')}>
      <div
        className={cn(
          'flex flex-row gap-1 items-center',
          'bg-blackest p-1 rounded-full',
          'border border-[#fff3]',
        )}
      >
        <TopMenuButton img={HomeIcon} />
        <Separator />
        <TopMenuButton label={'Обо мне'} img={PersonIcon} active={true} />
        <TopMenuButton label={'Работы'} img={WorkIcon} />
        <TopMenuButton label={'Достижения'} img={MarkIcon} />
        <Separator />
        <TopMenuButton img={SunIcon} />
      </div>
    </div>
  );
};
