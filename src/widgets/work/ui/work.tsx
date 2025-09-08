import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { TWork } from '@/widgets/work/types';

export const Work = ({ work }: { work: TWork }) => {
  return (
    <div className={cn('flex flex-col gap-1')}>
      <div className={'flex flex-row'}>
        <Link href={work.jobLink} target={'_blank'}>
          <div className={'flex flex-row gap-2 items-center'}>
            <Image
              src={work.img}
              alt={''}
              width={1000}
              height={1000}
              className={'rounded-full w-[50px] h-[50px]'}
            />
            <div className={'flex flex-col'}>
              <span className={'text-[30px]'}>{work.name}</span>
              <span className={'text-[#17C0FD]'}>{work.jobTitle}</span>
            </div>
          </div>
        </Link>

        <div className={'flex-1'} />

        <span className={'text-gray-400'}>{work.time}</span>
      </div>

      <ul className={'list-dash ml-[75px]'}>
        {work.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <span>{work.description}</span>
    </div>
  );
};
