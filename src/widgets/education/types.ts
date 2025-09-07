import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TEducation = {
  university: string;
  speciality: string;
  level: string;
  img: string | StaticImport;
};
