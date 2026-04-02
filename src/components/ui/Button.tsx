'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

const variantStyles: Record<string, string> = {
  primary: 'bg-accent-primary text-text-inverse shadow-card hover:bg-accent-warm',
  ghost: 'border border-accent-primary bg-transparent text-accent-primary hover:bg-accent-primary/10',
  secondary: 'bg-bg-elevated text-text-primary hover:bg-bg-overlay',
  danger: 'bg-status-error text-white hover:bg-red-500',
  gold: 'bg-gradient-to-r from-accent-soft to-accent-primary text-text-inverse shadow-glow'
};

const sizeStyles: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', type = 'button', ...props },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';
