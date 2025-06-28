import React from 'react';

export const FeaturesButton = ({ text, onClick, variant = 'primary', size = 'md', logo, className, isClicked }) => {
  // --- Base and size classes remain the same ---
  const baseClasses = 'rounded transition duration-300 font-mono';
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
  };
  const sizeClass = sizeStyles[size] || sizeStyles.md;

  // --- Refactored Variant Styles ---
  // We've defined the full set of classes for each state ("unclicked" and "clicked")
  // to prevent class conflicts. The hover effect is now part of the "unclicked" state.
  const variantStyles = {
    primary: {
      unclicked: 'bg-terminal-black text-terminal-green border-2 border-[--border] hover:border-green-600',
      // Set text to 'black' on click as requested.
      clicked: 'bg-terminal-green text-terminal-black border-2 border-[--border]',
    },
    secondary: {
      unclicked: 'bg-terminal-black text-terminal-blue border-2 border-[--border] hover:bg-blue-600 hover:border-blue-600 hover:text-terminal-black',
      // Consistent clicked state for secondary buttons
      clicked: 'bg-blue-600 text-terminal-black border-2 border-[--border]',
    },
    tertiary: {
      unclicked: 'bg-terminal-black text-terminal-purple border-2 border-[--border] hover:bg-purple-600 hover:border-purple-600 hover:text-terminal-black',
      // Consistent clicked state for tertiary buttons
      clicked: 'bg-purple-600 text-terminal-black border-2 border-[--border]',
    },
  };


  const statefulClasses = isClicked
    ? variantStyles[variant]?.clicked || variantStyles.primary.clicked
    : variantStyles[variant]?.unclicked || variantStyles.primary.unclicked;

  return (
    <button
      // The final className is much cleaner and avoids conflicts.
      className={`${baseClasses} ${sizeClass} ${statefulClasses} ${className || ''}`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {logo && <span className="w-5 h-5">{logo}</span>}
        {text || 'Button'}
      </span>
    </button>
  );
};
