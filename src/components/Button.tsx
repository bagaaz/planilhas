"use client";

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

// Define allowed sizes
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  size?: ButtonSize;
  color?: string;
  hoverColor?: string;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseButtonProps & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  );

const sizeClassesMap: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
                                 size = 'md',
                                 color = 'bg-blue-500',
                                 hoverColor = 'hover:bg-blue-600',
                                 children,
                                 className = '',
                                 href,
                                 ...rest
                               }: ButtonProps) {
  const sizeClasses = sizeClassesMap[size] || sizeClassesMap.md;

  // Determine background class
  const bgClass = color.startsWith('bg-')
    ? color
    : `bg-[${color}]`;

  // Determine hover background class
  const hoverClass = hoverColor.startsWith('hover:')
    ? hoverColor
    : `hover:bg-[${hoverColor}]`;

  const classes = `text-white font-medium rounded ${sizeClasses} ${bgClass} ${hoverClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
