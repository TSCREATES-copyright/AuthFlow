import React from 'react';

export const Label = ({ children, htmlFor, style }: { children: React.ReactNode; htmlFor?: string; style?: React.CSSProperties }) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: '13px',
        fontWeight: 500,
        color: 'var(--color-text-muted)',
        marginBottom: '6px',
        ...style
      }}
    >
      {children}
    </label>
  );
};
