'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils';

export const CardHovered = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const blockRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blockRef || !blockRef.current) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const rect = blockRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // X относительно блока
      const y = e.clientY - rect.top; // Y относительно блока

      setMousePos({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        'bg-[#fff1] w-full p-10 rounded-lg cursor-pointer',
        'border border-[#333]',
        'transition',
        className,
      )}
      style={{
        background: `radial-gradient(circle 650px at ${mousePos.x}px ${mousePos.y}px,rgba(187, 134, 252, 0.1),transparent 120%)`,
      }}
      ref={blockRef}
    >
      {children}
    </div>
  );
};
