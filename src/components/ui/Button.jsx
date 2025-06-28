import React from 'react';

export const Button = ({ text, onClick, variant = 'primary', size = 'md', logo, className, Element }) => {
  const variantStyles = {
    primary: {
      base: 'bg-terminal-gray-700 text-terminal-green border-terminal-green',
      hover: 'hover:bg-green-600 hover:border-green-600 hover:text-terminal-black',
    },
    secondary: {
      base: 'bg-terminal-gray-700 text-terminal-blue border-terminal-blue',
      hover: 'hover:bg-[var(--info)] hover:border-blue-600 hover:text-terminal-black',
    },
    tertiary: {
      base: 'bg-terminal-gray-700 text-terminal-purple border-terminal-purple',
      hover: 'hover:bg-purple-400 hover:border-purple-600 hover:text-terminal-black',
    },
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  };

  const baseClasses = 'transition duration-300 font-mono border px-3 py-1 h-10'; // Added default padding and height
  const variantClass = variantStyles[variant]?.base || variantStyles.primary.base;
  const hoverClass = variantStyles[variant]?.hover || variantStyles.primary.hover;
  const sizeClass = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      className={`${baseClasses} ${variantClass} ${hoverClass} ${sizeClass} ${className || ''}`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {logo && <span className="w-5 h-5 flex items-center justify-center">{logo}</span>}
        {text || 'Button'}
      </span>
    </button>
  );
};