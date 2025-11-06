import React from 'react'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

    const variants = {
      primary: 'bg-accent-600 text-primary-900 hover:bg-accent-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg focus-visible:outline-accent-600',
      secondary: 'bg-primary-600 text-white hover:bg-primary-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg focus-visible:outline-primary-600',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5 focus-visible:outline-primary-600',
      ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-primary-600',
    }

    const sizes = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-5 py-2.5',
      lg: 'text-lg px-6 py-3',
      xl: 'text-xl px-8 py-4',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
