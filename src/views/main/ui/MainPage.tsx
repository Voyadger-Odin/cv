'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

import {
  CERTIFICATES,
  EDUCATION,
  LINKS,
  PORTFOLIO,
  SKILLS,
  WORKS,
} from '@/shared/data/data';
import { cn } from '@/shared/lib/utils';
import Photo from '@/shared/ui/img/me.png';
import { Certificate } from '@/widgets/certificate';
import { Education } from '@/widgets/education';
import { LeftMenu } from '@/widgets/left-menu';
import { SelfLink } from '@/widgets/links';
import { Portfolio } from '@/widgets/portfolio';
import { SkillList } from '@/widgets/skills';
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
  return (
    <>
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
            className={cn('rounded-full w-[150px] h-[150px] min-w-[150px]')}
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
                чистый и поддерживаемый код на JavaScript и TypeScript, активно использую
                ESLint, Prettier, Tailwind CSS, SCSS и CSS3. Опыт внедрения i18n для
                мультиязычных решений. Участвовал в полном цикле разработки — от старта
                проекта с нуля до оптимизации и поддержки крупных сервисов. Имею успешные
                кейсы интеграции платёжных систем, рефакторинга и ускорения существующих
                сайтов.
              </p>
              <p>
                Благодаря бэкенд-опыту (Laravel, Node.js, Python) эффективно
                взаимодействую с серверной частью, понимаю архитектуру приложений и
                особенности интеграций. Владею настройкой CI/CD, Docker, серверов и
                доменов — это позволяет быстро запускать и доставлять решения в продакшн.
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
    </>
  );
};
