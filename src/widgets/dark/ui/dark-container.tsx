import { cn } from '@/shared/lib/utils';

export const DarkContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isDark = false;

  return (
    <div
      className={cn('h-full', isDark && cn('dark', 'text-white'), className)}
      {...props}
    >
      {children}
    </div>
  );
};
