import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

import type { VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rectangle?: boolean;
  loading?: boolean;
}

interface SpinnerProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}
function Spinner({ style, ...others }: SpinnerProps) {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          ...style,
          width: '1.5rem',
          height: '1.5rem',
          '--svg-stroke-width': 0.8,
        } as React.CSSProperties
      }
      {...others}
    >
      <path
        d="M19.5711 4.92893C21.2547 6.61258 22.2824 8.84172 22.4692 11.2154C22.656 13.5891 21.9897 15.9516 20.5902 17.8779C19.1906 19.8041 17.1497 21.1679 14.8345 21.7237C12.5192 22.2795 10.0816 21.991 7.96009 20.9101C5.83858 19.8291 4.17239 18.0266 3.26121 15.8268C2.35002 13.627 2.25366 11.1743 2.98944 8.90983C3.72522 6.64533 5.24485 4.71768 7.27502 3.4736C9.30518 2.22951 11.7126 1.75064 14.0643 2.12312"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const buttonVariants = cva(
  // Initally it was: disabled:pointer-events-none disabled:opacity-50
  cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded ring-offset-white',
    'text-ft-controls-basic',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    'data-[loading]:cursor-auto',
    'transition-all',
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-color-dark-gray-2 text-white data-[loading=true]:bg-fc-bg-dark',
          'hover:bg-color-dark-gray-1-primary disabled:opacity-50 disabled:bg-color-dark-gray-2',
        ),
        secondary: cn(
          'bg-color-dark-gray-13 text-fc-text-dark',
          'hover:bg-color-dark-gray-12',
          'disabled:opacity-50 disabled:bg-color-dark-gray-13  disabled:text-fc-text-light-muted',
        ),
        outline: cn(
          'border border-color-dark-gray-11 bg-white text-fc-text-dark',
          'hover:border-color-dark-gray-9',
          'disabled:border-color-dark-gray-11 disabled:opacity-50',
        ),
        link: cn(
          'text-color-dark-gray-1-primary underline-offset-4',
          'disabled:text-color-dark-gray-1-primary disabled:no-underline disabled:opacity-50',
        ),
        ghost: cn(
          'hover:bg-color-dark-gray-13 hover:text-fc-text-dark',
          'disabled:bg-transparent disabled:opacity-50',
        ),
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-10 px-3',
        lg: 'h-14',
        icon: 'h-10 w-10 shrink-0',
      },
      shape: {
        default: 'rounded',
        rectangle: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default',
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      asChild = false,
      rectangle,
      loading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    if (rectangle) {
      shape = 'rectangle';
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        data-loading={loading ? true : undefined}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? <Spinner className="animate-spin" /> : props.children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
