'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';

import DonateImg1 from './img/DonateImg1.png';

export const DonatePage = () => {
  const donates = [
    {
      id: 1,
      title: 'Рядовой',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 2,
      title: 'Сержант',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/ec29e1d0-a070-432f-b042-04c719bb7348/57ec2b4c-652f-4c8d-9288-f597140ede9e.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiI1N2VjMmI0Yy02NTJmLTRjOGQtOTI4OC1mNTk3MTQwZWRlOWUiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.DChrCGWWgHaKT8oyTiZXgJzd52d12UFaTlBHaiVnrVY',
    },
    {
      id: 3,
      title: 'Прапорщик',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 4,
      title: 'Лейтенант',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 5,
      title: 'Капитан',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 6,
      title: 'Майор',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 7,
      title: 'Подполковник',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 8,
      title: 'Полковник',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
    {
      id: 9,
      title: 'Генерал',
      img: 'https://cdn.qwenlm.ai/output/8a195025-0718-42be-b429-45854e298615/t2i/d71e88e9-b1b3-4b37-bc58-0ab9b350e508/d0a87cf6-db98-402c-a101-069790c19afc.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiOGExOTUwMjUtMDcxOC00MmJlLWI0MjktNDU4NTRlMjk4NjE1IiwicmVzb3VyY2VfaWQiOiJkMGE4N2NmNi1kYjk4LTQwMmMtYTEwMS0wNjk3OTBjMTlhZmMiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.9DJogXaW--AJuQcZggJS7t5kEsQX3AhUslpAjB_nUQ8',
    },
  ];

  return (
    <div className={cn('relative flex flex-col w-full', 'text-white')}>
      <div
        className={cn(
          'relative',
          'w-full h-[70vh] overflow-hidden',
          'bg-blackest',
          'flex items-center justify-center',
        )}
      >
        <Image
          src={DonateImg1}
          alt={'art'}
          width={2000}
          height={1000}
          className={'object-cover w-full h-full rounded-b-[100px]'}
        />

        <div className={'absolute container top-[30%]'}>
          <div className={'flex flex-col gap-6 max-w-[50%]'}>
            <span className={'text-lg !text-[40pt]/[1.1]'}>
              Стань лучшей версией себя
            </span>
          </div>
        </div>
      </div>

      <div className={'bg-blackest'}>
        <div className={cn('container mt-[100px]', 'flex flex-col gap-14')}>
          {/* Донат */}
          <div className={'flex flex-col gap-10'}>
            <h1 className={'text-ft-desktop-h1'}>Покупка доната</h1>

            <div className={cn('grid grid-cols-4 gap-4')}>
              {donates.map((value) => {
                return (
                  <div
                    key={value.id}
                    className={cn(
                      'flex flex-col gap-2 p-4',
                      'rounded-lg',
                      'cursor-pointer hover:bg-color-dark-yellow-1 duration-300',
                    )}
                  >
                    <Image
                      src={value.img}
                      alt={value.title}
                      width={1000}
                      height={1000}
                      className={'rounded-[8px]'}
                    />

                    <span className={'text-lg'}>{value.title}</span>
                    <span className={'text-[14pt] font-jetbrains'}>от 150 ₽</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
