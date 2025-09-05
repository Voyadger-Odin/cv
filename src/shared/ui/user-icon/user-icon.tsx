import { StaticRequire } from 'next/dist/shared/lib/get-img-props';
import Image, { StaticImageData } from 'next/image';

interface IUserIconProps {
  size: number;
  icon: string | StaticRequire | StaticImageData;
}

export const UserIcon = ({ icon, size }: IUserIconProps) => {
  return (
    <div
      className={'rounded-full overflow-hidden'}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={icon}
        alt={'user-icon'}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};
