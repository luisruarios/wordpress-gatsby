import React from 'react';

const sizes = {
  default: `py-2.5 px-5`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-gradient-to-r from-blue-600 to-blue-400 
        hover:from-blue-300 hover:blue-300
        rounded-lg   
        text-white
        font-semibold
        text-sm
    `}
    >
      {children}
    </button>
  );
};

export default Button;
