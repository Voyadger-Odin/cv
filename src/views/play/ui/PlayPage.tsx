'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { CopyBlock } from '@/shared/ui/copy-block';

export const PlayPage = () => {
  return (
    <div className={cn('relative flex flex-col w-full', 'text-white')}>
      <div className={'bg-blackest'}>
        <div className={cn('container mt-[100px]', 'flex flex-col gap-14')}>
          {/* Начать играть */}
          <div className={'flex flex-col gap-10'}>
            <h1 className={'text-ft-desktop-h1'}>Как начать играть</h1>

            <div className={'flex flex-col gap-2'}>
              <h2 className={'text-ft-desktop-h2'}>Правила</h2>
              <p className={'text-[16px]'}>
                Перед началом игры ознакомтесь с{' '}
                <Link
                  href={'/'}
                  className={
                    'text-color-dark-blue-6-primary hover:text-color-dark-blue-4'
                  }
                >
                  правилами нашего проекта
                </Link>
                . Это сделает вашу игру комфортнее
              </p>
            </div>

            <div className={'flex flex-col gap-2'}>
              <h2 className={'text-ft-desktop-h2'}>Сервер</h2>
              <CopyBlock data={'metromine.ru'} />
              <p className={'text-[16px]'}>
                Добавьте IP адрес в список серверов.
                <br />
                Версии minecraft:{' '}
                <span className={'font-jetbrains font-bold'}>1.17.0-1.19.0</span>
              </p>
            </div>

            <div className={'flex flex-col gap-2'}>
              <h2 className={'text-ft-desktop-h2'}>Регистрация</h2>
              <p>Регистрацию можно пройти как на сайте, так и на сервере</p>
            </div>

            <div className={'flex flex-col gap-2'}>
              <h2 className={'text-ft-desktop-h2'}>Двухфакторная аутентификация</h2>
              <div className={'flex flex-row items-center'}>
                <p className={'w-[50%]'}>
                  На нашем проекте предусмотрена двухфакторная аутентификация через
                  telegram для вашей безопасности. При регистрации вам выдадут ключ,
                  который надо будет отправить в{' '}
                  <Link
                    href={'/'}
                    className={
                      'text-color-dark-blue-6-primary hover:text-color-dark-blue-4'
                    }
                  >
                    Telegram бот
                  </Link>
                </p>

                <div className={'flex-1'} />

                <div>
                  <Image
                    src={'https://static.cdnlogo.com/logos/t/57/telegram-2019.svg'}
                    alt={'telegram'}
                    width={1000}
                    height={1000}
                    className={'w-[80px] h-[80px] object-cover'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Описание проекта */}
          <div className={'flex flex-col gap-2'}>
            <span className={'text-ft-desktop-h1'}>О проекте</span>

            <p>
              Проект посвящён серии книг Metro. Ощётите на себе опасности постапокалипсиса
              московского метро.
            </p>
          </div>

          {/* Вопросы */}
          <div>
            <span className={'text-ft-desktop-h1'}>Частые вопросы</span>
          </div>
        </div>
      </div>
    </div>
  );
};
