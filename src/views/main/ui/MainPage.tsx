'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

import { cn, getEnvironment } from '@/shared/lib/utils';
import {
  CERTIFICATES,
  EDUCATION,
  LINKS,
  PORTFOLIO,
  SKILLS,
  WORKS,
} from '@/views/main/data/data';
import Photo from '@/views/main/img/me.png';
import { Certificate } from '@/widgets/certificate';
import { Education } from '@/widgets/education';
import { LeftMenu } from '@/widgets/left-menu';
import { SelfLink } from '@/widgets/links';
import { Portfolio } from '@/widgets/portfolio';
import { SkillList } from '@/widgets/skills';
import { TopMenu } from '@/widgets/top-menu';
import { Work } from '@/widgets/work';

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <div id={id} className={'flex flex-col gap-4 scroll-mt-16'}>
      <span className={'text-[40px]'}>{title}</span>

      {children}
    </div>
  );
};

export const MainPage = () => {
  const env = getEnvironment();

  return (
    <div
      className={cn(
        'relative flex flex-col w-full items-center',
        'text-white font-sanFrancisco',
        'min-h-[100vh] p-10',
      )}
    >
      {/* Background */}
      <div
        className={cn('absolute top-0 left-0 w-[100%] h-[100vh] z-[1]')}
        style={{
          maskImage: 'radial-gradient(100vh at 50% 0%,black 0,transparent 100%)',
          maskSize: '100% 100%',
        }}
      >
        <div
          className={'w-full h-full'}
          style={{
            backgroundImage: 'radial-gradient(#094074 1px, #000000 1px)',
            backgroundSize: '0.125rem 0.125rem',
            opacity: '30%',
          }}
        />
      </div>

      <div className={'w-full flex flex-col items-center z-[10]'}>
        <div
          className={'fixed top-0 left-0 w-full h-[5rem] z-[1]'}
          style={{
            backdropFilter: 'blur(.9rem)',
            background: 'linear-gradient(180deg,#000000,transparent)',
            maskImage: 'linear-gradient(180deg,black 30%,transparent 100%)',
          }}
        />

        {env === 'development' && (
          <div className={'sticky top-0 z-[1] w-full'}>
            <TopMenu />
          </div>
        )}

        <div className={'fixed left-10 top-1/2 -translate-y-1/2'}>
          <LeftMenu
            menu={{
              items: [
                { label: 'Обо мне', href: '#about' },
                { label: 'Образование', href: '#education' },
                { label: 'Рабочий опыт', href: '#work_experience' },
                { label: 'Портфолио', href: '#portfolio' },
                { label: 'Технологии', href: '#technologies' },
                { label: 'Сертификаты', href: '#certificates' },
              ],
            }}
          />
        </div>

        <div className={'relative flex flex-row gap-10'}>
          {/* IMG */}
          <div className={cn('flex flex-col gap-[14px] h-fit', 'sticky top-[40px]')}>
            <Image
              src={Photo}
              alt={'Photo'}
              width={1000}
              height={1000}
              className={cn('rounded-full w-[150px] h-[150px]')}
            />
            <span className={''}>Кучеренко Алексей</span>
          </div>

          {/* About */}
          <div className={'flex flex-col gap-10 max-w-[900px] scroll-mt-10'}>
            {/* About */}
            <Section title={'Обо мне'} id={'about'}>
              <span className={'text-[30px] text-gray-200'}>Front-end разработчик</span>

              <div className={'flex flex-row gap-2'}>
                {LINKS.map((link, index) => (
                  <SelfLink key={index} link={link} />
                ))}
              </div>

              <div className={'flex flex-col gap-4'}>
                <p>
                  Frontend-разработчик с многолетним опытом коммерческой разработки и
                  фриланса, обладающий глубокой экспертизой в создании масштабируемых и
                  производительных веб-приложений. Уверенно работаю с React и Vue.js, пишу
                  чистый и поддерживаемый код на JavaScript и TypeScript, активно
                  использую ESLint, Prettier, Tailwind CSS, SCSS и CSS3. Опыт внедрения
                  i18n для мультиязычных решений. Участвовал в полном цикле разработки —
                  от старта проекта с нуля до оптимизации и поддержки крупных сервисов.
                  Имею успешные кейсы интеграции платёжных систем, рефакторинга и
                  ускорения существующих сайтов.
                </p>
                <p>
                  Благодаря бэкенд-опыту (Laravel, Node.js, Python) эффективно
                  взаимодействую с серверной частью, понимаю архитектуру приложений и
                  особенности интеграций. Владею настройкой CI/CD, Docker, серверов и
                  доменов — это позволяет быстро запускать и доставлять решения в
                  продакшн.
                </p>
                <p>
                  Активно выступаю с докладами на внутренних митапах, делюсь знаниями с
                  командой, а также принимаю участие в различных спортивных мероприятиях.
                </p>
              </div>
            </Section>

            {/* Образование */}
            <Section title={'Образование'} id={'education'}>
              {EDUCATION.map((education, index) => (
                <Education key={index} education={education} />
              ))}
            </Section>

            {/* Рабочий опыт */}
            <Section title={'Рабочий опыт'} id={'work_experience'}>
              {WORKS.map((work, index) => (
                <Work key={index} work={work} />
              ))}
            </Section>

            {/* Портфолио */}
            <Section title={'Портфолио'} id={'portfolio'}>
              {PORTFOLIO.map((portfolio, index) => (
                <Portfolio key={index} portfolio={portfolio} />
              ))}
            </Section>

            {/* Технологии */}
            <Section title={'Технологии'} id={'technologies'}>
              <SkillList label={'FrontEnd'} skills={SKILLS.FRONTEND} />
              <SkillList label={'DevOps'} skills={SKILLS.DevOps} />
              <SkillList label={'Базы данных'} skills={SKILLS.DB} />
              <SkillList label={'Софт скилы'} skills={SKILLS.SOFTSKILLS} />
            </Section>

            {/* Сертификаты */}
            <Section title={'Сертификаты'} id={'certificates'}>
              <div className={'grid grid-cols-2 gap-4'}>
                {CERTIFICATES.map((certificate, index) => {
                  return <Certificate key={index} certificate={certificate} />;
                })}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};
