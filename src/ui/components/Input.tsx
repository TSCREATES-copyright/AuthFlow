import React, { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = props.type === 'password';
  const displayType = isPasswordType && showPassword ? 'text' : props.type;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        style={{
          borderRadius: 'var(--radius-sm)',
          padding: '10px 14px',
          paddingRight: isPasswordType ? '40px' : '14px',
          border: '1px solid var(--color-border)',
          backgroundColor: '#1c1c1f',
          color: 'var(--color-text)',
          width: '100%',
          fontSize: '14px',
          outline: 'none',
          transition: 'var(--transition-fast)',
          boxShadow: 'var(--shadow-sm)'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--color-primary-text)';
          e.target.style.boxShadow = '0 0 0 2px var(--color-ring)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--color-border)';
          e.target.style.boxShadow = 'var(--shadow-sm)';
        }}
        {...props}
        type={displayType}
      />
      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          )}
        </button>
      )}
    </div>
  );
};
