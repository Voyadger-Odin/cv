import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TLink = {
  label: string;
  src: string;
  img: string | StaticImport;
};
