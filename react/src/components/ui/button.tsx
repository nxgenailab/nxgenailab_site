import React from 'react';

import { cn } from '../../lib/utils';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
const Comp = asChild ? 'span' : 'button';
return (
  <Comp
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      variant === 'outline' &&
        'border border-input bg-transparent hover:bg-background hover:text-foreground',
      variant === 'ghost' &&
        'hover:bg-accent hover:text-accent-foreground',
      size === 'sm' && 'h-8 px-3 rounded-md',
      size === 'lg' && 'h-10 px-8 rounded-md',
      size === 'icon' && 'h-9 w-9',
      className
    )}
    {...props}
  >
    {children}
  </Comp>
);
});
Button.displayName = 'Button';

export { Button };