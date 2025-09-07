import { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TImageShow = {
  img: string | StaticImport;
  children: ReactNode;
};
