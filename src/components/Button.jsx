import React from 'react';

const Button = ({ color, bgColor, size, text, borderRadius, width }) => (
  <button
    type="button"
    style={{ backgroundColor: bgColor, color, borderRadius, width }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
		>
    {text}
  </button>
);

export default Button;
