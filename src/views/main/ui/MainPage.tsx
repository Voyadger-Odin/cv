import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { EDUCATION, LINKS, PORTFOLIO, WORKS } from '@/views/main/data/data';
import Photo from '@/views/main/img/img.png';
import { Education } from '@/widgets/education';
import { SelfLink } from '@/widgets/links';
import { Portfolio } from '@/widgets/portfolio';
import { Work } from '@/widgets/work';

export const MainPage = () => {
  return (
    <div
      className={cn(
        'relative flex flex-col w-full items-center',
        'text-white font-jetbrains',
        'min-h-[100vh] p-10',
      )}
    >
      {/* Background */}
      <div
        className={cn('absolute top-0 left-0 w-[100%] h-[100%]', 'bg-red-500')}
        style={{
          background: 'radial-gradient(at center top, #094074, #000000)',
          opacity: '20%',
        }}
      />
      <div
        className={
          'fixed top-0 left-0 w-[100vw] h-[100vh] z-[0] mix-blend-overlay opacity-100'
        }
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className={'flex flex-row gap-10 relative'}>
        {/* IMG */}
        <div className={cn('flex flex-col gap-[14px] h-fit', 'sticky top-5 z-[1]')}>
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
        <div className={'flex flex-col gap-4 max-w-[600px] z-[0]'}>
          <span className={'text-[60px]'}>Обо мне</span>
          <span className={'text-[20px] text-gray-400'}>Front-end разработчик</span>

          <div className={'flex flex-row gap-2'}>
            {LINKS.map((link, index) => (
              <SelfLink key={index} link={link} />
            ))}
          </div>

          <span>
            Selene is a Jakarta-based design engineer with a passion for transforming
            complex challenges into simple, elegant design solutions. Her work spans
            digital interfaces, interactive experiences, and the convergence of design and
            technology.
          </span>

          <div className={'flex flex-col gap-10'}>
            <span className={'text-[40px]'}>Образование</span>

            {EDUCATION.map((education, index) => (
              <Education key={index} education={education} />
            ))}
          </div>

          <div>
            <span className={'text-[40px]'}>Рабочий опыт</span>

            {WORKS.map((work, index) => (
              <Work key={index} work={work} />
            ))}
          </div>

          <div>
            <span className={'text-[40px]'}>Портфолио</span>

            {PORTFOLIO.map((portfolio, index) => (
              <Portfolio key={index} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
