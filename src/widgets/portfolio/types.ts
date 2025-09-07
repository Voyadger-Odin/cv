import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { TLink } from '@/widgets/links';

export type TPortfolio = {
  title: string;
  href: string;
  img: string | StaticImport;
  description?: string;
  links?: TLink[];
};
