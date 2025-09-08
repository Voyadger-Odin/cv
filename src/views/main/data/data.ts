import GitHubIcon from '@/shared/ui/icons/github.svg';
import GitLabIcon from '@/shared/ui/icons/gitlab.svg';
import HHIcon from '@/shared/ui/icons/hh_mono.png';
import MailIcon from '@/shared/ui/icons/mail.svg';
import TelegramIcon from '@/shared/ui/icons/telegram.svg';
import Cert2 from '@/views/main/img/certificates/921e044bf8de26d19c7e74acaf933cfe0e63ad5e.png';
import BitrixDeveloper from '@/views/main/img/certificates/bitrix-developer.png';
import Cert1 from '@/views/main/img/certificates/f3dec1928f7c24ffe710367d0998633036643053.png';
import Mendeleev from '@/views/main/img/Mendeleev.png';
import SFEDU from '@/views/main/img/sfedu.png';
import Askaron from '@/views/main/img/work/askaron.png';
import Axenix from '@/views/main/img/work/axenix.jpg';
import Oggetto from '@/views/main/img/work/oggetto.png';
import Yandex from '@/views/main/img/work/yandex.png';
import { TCertificate } from '@/widgets/certificate';
import { TEducation } from '@/widgets/education';
import { TLink } from '@/widgets/links';
import { TPortfolio } from '@/widgets/portfolio';
import { TWork } from '@/widgets/work';

export const EDUCATION: TEducation[] = [
  {
    img: SFEDU,
    university: 'Южный федеральный университет',
    speciality: '06.04.01 - Биофизика, биоинформатика и нейротехнологии',
    level: 'Магистратура',
  },
  {
    img: SFEDU,
    university: 'Южный федеральный университет',
    speciality: '09.04.03 - Прикладная информатика',
    level: 'Магистратура',
  },
  {
    img: SFEDU,
    university: 'Южный федеральный университет',
    speciality: '09.03.03 - Прикладная информатика',
    level: 'Бакалавриат',
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
    jobLink: 'https://axenix.pro/',
    name: 'Axenix',
    jobTitle: 'Frontend разработчикк',
    time: 'Февраль 2024 — Настоящее',
    items: [
      'Создания сайта с нуля до продакшена для крупного ретейла косметики',
      'Техническая поддержка крупного поставщика строительных материалов',
      'Оптимизация и доработка аналитических дешбордов металлургического комбината',
      'Создание сайта агрохолдинга',
    ],
    description: '',
  },
  {
    img: Askaron,
    jobLink: 'https://askaron.ru/',
    name: 'Аскарон системс',
    jobTitle: 'Web разработчик',
    time: 'Октябрь 2022 — Июль 2023',
    items: [
      'Создания сайта с нуля до продакшена для крупного ретейла косметики',
      'Техническая поддержка крупного поставщика строительных материалов',
      'Оптимизация и доработка аналитических дешбордов металлургического комбината',
      'Создание сайта агрохолдинга',
    ],
    description: '',
  },
  {
    img: Yandex,
    jobLink: 'https://oggetto.ru/',
    name: 'Yandex',
    jobTitle: 'Web разработчик',
    time: 'Август 2022 — Октябрь 2022',
    items: [
      'Создания сайта с нуля до продакшена для крупного ретейла косметики',
      'Техническая поддержка крупного поставщика строительных материалов',
      'Оптимизация и доработка аналитических дешбордов металлургического комбината',
      'Создание сайта агрохолдинга',
    ],
    description: '',
  },
  {
    img: Oggetto,
    jobLink: 'https://oggetto.ru/',
    name: 'Oggetto',
    jobTitle: 'Web разработчик',
    time: 'Ноябрь 2021 — Август 2022',
    items: [
      'Создания сайта с нуля до продакшена для крупного ретейла косметики',
      'Техническая поддержка крупного поставщика строительных материалов',
      'Оптимизация и доработка аналитических дешбордов металлургического комбината',
      'Создание сайта агрохолдинга',
    ],
    description: '',
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
  FRONTEND: string[];
  DevOps: string[];
  DB: string[];
  SOFTSKILLS: string[];
};
export const SKILLS: TSkillsList = {
  FRONTEND: [
    'JavaScript',
    'TypeScript',
    'FSD',
    'React',
    'NextJS',
    'Redux',
    'MUI',
    'Tailwind',
    'Shad CN',
    'VueJS',
  ],
  DevOps: ['Linux', 'CI/CD', 'GitLab CI', 'Nginx', 'Docker', 'Docker-compose'],
  DB: ['SQL', 'MySQL', 'PostgreSQL', 'Redis'],
  SOFTSKILLS: ['Agile', 'SCRUM', 'Jira', 'GitHub', 'GitLab'],
};

export const CERTIFICATES: TCertificate[] = [
  {
    img: Cert1,
    title: 'Молекулярная биология и генетика',
    href: 'https://stepik.org/cert/2925677',
  },
  {
    img: Cert2,
    title: 'Введение в молекулярную биологию и биомедицину',
    href: 'https://stepik.org/cert/2867334',
  },
  {
    img: BitrixDeveloper,
    title: 'Интеграция дизайна и настройка платформы',
    href: 'https://www.1c-bitrix.ru/partners/check_cert.php',
    certificateNumber: 'CERT-EX-DEV-010-17769086-6737724-56454',
  },
];
