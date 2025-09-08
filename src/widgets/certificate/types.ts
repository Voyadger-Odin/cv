import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TCertificate = {
  img: string | StaticImport;
  title: string;
  href: string;
  certificateNumber?: string;
};
