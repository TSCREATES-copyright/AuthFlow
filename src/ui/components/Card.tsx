import React, { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      borderRadius: 'var(--radius)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--color-border)',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {children}
    </div>
  );
};
