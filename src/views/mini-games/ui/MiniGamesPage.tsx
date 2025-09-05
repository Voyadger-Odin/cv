'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';

import MiniGamesImg1 from './img/MiniGamesImg1.png';
import MiniGamesImg2 from './img/MiniGamesImg2.png';

export const MiniGamesPage = () => {
  const games = [
    {
      id: 1,
      title: 'Анархия',
    },
    {
      id: 2,
      title: 'BedWars',
    },
    {
      id: 2,
      title: '🔥 Захват станции',
    },
    {
      id: 2,
      title: 'Выход наружу',
    },
    {
      id: 2,
      title: 'Волна монстров',
    },
  ];

  return (
    <div className={cn('relative flex flex-col w-full', 'text-white')}>
      <div
        className={cn(
          'relative',
          'w-full h-[100vh] overflow-hidden',
          'bg-blackest',
          'flex items-center justify-center',
        )}
      >
        <Image
          src={MiniGamesImg1}
          alt={'art'}
          width={2000}
          height={1000}
          className={'object-cover w-full h-full opacity-50'}
        />

        <div className={'absolute container top-[30%]'}>
          <div className={'flex flex-col gap-6 max-w-[50%]'}>
            <span className={'text-lg !text-[50pt]/[1.1]'}>BedWars</span>

            <span className={'text-md !text-[18pt] font-jetbrains'}>
              Эпичная битва за кровати
            </span>
          </div>
        </div>
      </div>

      <div className={'container relative mt-10 flex flex-row gap-[100px]'}>
        {/* Описание */}
        <div className={cn('flex flex-col gap-10', 'flex-1', 'text-[15pt]')}>
          <p>
            Получи уникальный и увлекательный опыт выживания, где каждый шаг требует
            внимательного планирования и креативного подхода. На старте каждый игрок
            оказывается на небольшом острове в небе с минимальным набором ресурсов, такими
            как несколько блоков земли, корова, дерево и небольшой ящик с начальными
            припасами. С этих скромных начал ты должен будешь создавать и расширять свой
            остров, находя умные способы экономии и использования ресурсов для выживания и
            процветания. Твоей задачей будет создание ферм для еды, сбор ценных материалов
            и развитие инфраструктуры, чтобы превратить крошечный остров в плодородный и
            процветающий мир.
          </p>

          <Image
            src={MiniGamesImg2}
            alt={''}
            width={1000}
            height={1000}
            className={'w-full h-[300px] object-cover rounded-lg'}
          />

          <p>
            При желании можно отправиться на арену, чтобы помериться силами с другими
            игроками. Чем больше и лучше станет твой остров, тем выше ты поднимешься в
            рейтинге, привлекая внимание к своему умению управлять ограниченными ресурсами
            и стратегически развиваться. Твой успех зависит от способности мыслить
            нестандартно и эффективно использовать каждый доступный блок — это отличный
            способ проявить своё мастерство и творческий потенциал.
          </p>
        </div>

        {/* Список миниигр */}
        <div className={cn('w-[20%] h-fit', 'sticky top-[100px]', 'flex flex-col gap-4')}>
          <span className={'text-lg'}>Миниигры</span>

          {games.map((value) => {
            return (
              <Link
                key={value.id}
                href={'/mini-games'}
                className={'hover:text-color-dark-blue-6-primary'}
              >
                <span className={'font-jetbrains text-[14pt]'}>{value.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
