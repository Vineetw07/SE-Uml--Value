import React, { useId } from 'react';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  hasError?: boolean;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  helperText,
  hasError = false,
  className = '',
  ...props
}) => {
  const id = useId();
  const helpId = `${id}-help`;

  return (
    <div className={`field ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        aria-invalid={hasError}
        aria-describedby={helperText ? helpId : undefined}
        {...props}
      />
      {helperText && (
        <span id={helpId} className={hasError ? 'field-help field-help--error' : 'field-help'}>
          {helperText}
        </span>
      )}
    </div>
  );
};
