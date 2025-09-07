import { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TImageShow = {
  images: (string | StaticImport)[];
  children: ReactNode;
};
