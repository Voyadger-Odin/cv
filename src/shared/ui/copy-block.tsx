import { cn } from '@/shared/lib/utils';

export interface CopyBlockProps {
  data: string;
}

const CopyBlock = ({ data }: CopyBlockProps) => {
  const handleClick = () => {
    navigator.clipboard.writeText(data);
    alert('IP скопирован в буфер обмена');
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'p-1 px-2 w-fit rounded-lg',
        'bg-color-dark-green-6-primary/40 hover:bg-color-dark-green-6-primary/60 cursor-pointer',
        'text-[14px] font-jetbrains',
      )}
    >
      {data}
    </div>
  );
};

export { CopyBlock };
