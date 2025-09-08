import Image from 'next/image';

import { TEducation } from '@/widgets/education/types';

export const Education = ({ education }: { education: TEducation }) => {
  return (
    <div className={'flex flex-row gap-4'}>
      <div className={'bg-white rounded-full w-[50px] h-[50px]'}>
        <Image src={education.img} alt={'sfedu'} width={1000} height={1000} />
      </div>
      <div className={'flex flex-col'}>
        <span className={'text-[20px]'}>{education.university}</span>
        <span>{education.speciality}</span>
        <span className={'text-gray-400 text-[14px]'}>{education.level}</span>
      </div>
    </div>
  );
};
