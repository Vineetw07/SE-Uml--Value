import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'critical';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  disabled,
  className = '',
  ...props
}) => (
  <button
    disabled={disabled || isLoading}
    className={`btn btn--${variant} ${isLoading ? 'btn--loading' : ''} ${className}`}
    aria-busy={isLoading}
    {...props}
  >
    {isLoading && <span className="btn-spinner" aria-hidden="true" />}
    <span>{children}</span>
  </button>
);
