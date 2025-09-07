import GitHubIcon from '@/shared/ui/icons/github.svg';
import GitLabIcon from '@/shared/ui/icons/gitlab.svg';
import HHIcon from '@/shared/ui/icons/hh_mono.png';
import MailIcon from '@/shared/ui/icons/mail.svg';
import TelegramIcon from '@/shared/ui/icons/telegram.svg';
import Axenix from '@/views/main/img/axenix.jpg';
import Cert1 from '@/views/main/img/f3dec1928f7c24ffe710367d0998633036643053.png';
import Mendeleev from '@/views/main/img/Mendeleev.png';
import SFEDU from '@/views/main/img/sfedu.png';
import { TCertificate } from '@/widgets/certificate';
import { TEducation } from '@/widgets/education';
import { TLink } from '@/widgets/links';
import { TPortfolio } from '@/widgets/portfolio';
import { TWork } from '@/widgets/work';

export const EDUCATION: TEducation[] = [
  {
    img: SFEDU,
    university: 'Южный федеральный университет',
    speciality: '09.03.03 - Прикладная информатика',
    level: 'Бакалавриат',
  },
  {
    img: SFEDU,
    university: 'Южный федеральный университет',
    speciality: '06.04.01 - Биофизика, биоинформатика и нейротехнологии',
    level: 'Магистратура',
  },
];

export const LINKS: TLink[] = [
  {
    img: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/Voyadger-Odin/',
  },
  {
    img: GitLabIcon,
    label: 'GitLab',
    href: 'https://gitlab.com/voyadgerodin',
  },
  {
    img: TelegramIcon,
    label: 'Telegram',
    href: 'https://t.me/rosetomorrow',
  },
  {
    img: MailIcon,
    label: 'Mail',
    href: 'mailto:voyadgerodin@yandex.ru',
  },
  {
    img: HHIcon,
    label: 'hh.ru',
    href: 'https://rostov.hh.ru/resume/f99e6b01ff0e39bd4f0039ed1f58676f343962',
  },
];

export const WORKS: TWork[] = [
  {
    img: Axenix,
  },
];

export const PORTFOLIO: TPortfolio[] = [
  {
    title: 'Таблица Менделеева',
    href: 'https://voyadger-odin.github.io/MendeleevTable/',
    img: Mendeleev,
    description:
      'Интерактивная таблица Менделеева — это современный веб-ресурс, сочетающий науку и технологии. Сайт позволяет детально изучать химические элементы с возможностью просмотра расширенной информации по каждому из них. Пользователи могут персонализировать отображение таблицы: выбирать стиль оформления, изменять температурные состояния элементов и переключать язык интерфейса. Удобная функция экспорта в PDF позволяет распечатать таблицу с текущими настройками — идеально для учёбы, преподавания и личного пользования.',
    links: [
      {
        img: GitHubIcon,
        label: 'GitHub',
        href: 'https://github.com/Voyadger-Odin/MendeleevTable',
      },
    ],
  },
];

type TSkillsList = {
  TECHNICAL: string[];
};
export const SKILLS: TSkillsList = {
  TECHNICAL: [
    'REACT',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
    'NextJS',
  ],
};

export const CERTIFICATES: TCertificate[] = [
  {
    img: Cert1,
    title: 'Молекулярная биология и генетика',
    href: 'https://stepik.org/cert/2925677',
  },
];
