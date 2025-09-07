import GitHubIcon from '@/shared/ui/icons/github.svg';
import Axenix from '@/views/main/img/axenix.jpg';
import Mendeleev from '@/views/main/img/Mendeleev.png';
import SFEDU from '@/views/main/img/sfedu.png';
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
    src: '',
  },
  {
    img: GitHubIcon,
    label: 'GitLab',
    src: '',
  },
  {
    img: GitHubIcon,
    label: 'Telegram',
    src: '',
  },
  {
    img: GitHubIcon,
    label: 'Mail',
    src: '',
  },
  {
    img: GitHubIcon,
    label: 'hh.ru',
    src: '',
  },
];

export const WORKS: TWork[] = [
  {
    img: Axenix,
  },
];

export const PORTFOLIO: TPortfolio[] = [
  {
    img: Mendeleev,
  },
];
