import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { TWork } from '@/widgets/work/types';

export const Work = ({ work }: { work: TWork }) => {
  return (
    <div className={cn('flex flex-col gap-1')}>
      <div className={'flex flex-row'}>
        <Link href={'https://axenix.pro/'} target={'_blank'}>
          <div className={'flex flex-row gap-2 items-center'}>
            <Image
              src={work.img}
              alt={''}
              width={1000}
              height={1000}
              className={'rounded-full w-[50px] h-[50px]'}
            />
            <div className={'flex flex-col'}>
              <span className={'text-[30px]'}>Axenix</span>
              <span className={'text-[#17C0FD]'}>Frontend разработчикк</span>
            </div>
          </div>
        </Link>

        <div className={'flex-1'} />

        <span className={'text-gray-400'}>2024 - Настоящее</span>
      </div>

      <ul className={'list-dash ml-[75px]'}>
        <li>Создания сайта с нуля до продакшена для крупного ретейла косметики</li>
        <li>Техническая поддержка крупного поставщика строительных материалов</li>
        <li>
          Оптимизация и доработка аналитических дешбордов металлургического комбината
        </li>
        <li>Создание сайта агрохолдинга</li>
      </ul>
    </div>
  );
};
