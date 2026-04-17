import React, { useState } from 'react';
import { Toast } from './toast.types';

export const ToastItem = ({ toast, onClose }: { toast: Toast; onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Matches CSS animation duration
  };

  const bgColors = {
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    info: '#3b82f6'
  };

  const isPermanent = toast.duration === 0;

  return (
    <div
      className={`toast-item ${isClosing ? 'toast-closing' : ''}`}
      style={{
        backgroundColor: bgColors[toast.type] || bgColors.info,
        color: '#ffffff',
        padding: '12px 16px',
        paddingBottom: isPermanent ? '12px' : '16px',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-md)',
        border: isPermanent ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '250px',
        maxWidth: '350px',
        fontSize: '14px',
        fontWeight: 500,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <span>{toast.message}</span>
      <button
        onClick={handleClose}
        className="focus-ring"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.8)',
          cursor: 'pointer',
          fontSize: '18px',
          lineHeight: 1,
          marginLeft: '12px',
          padding: '0 4px',
          borderRadius: '4px'
        }}
        aria-label="Close"
      >
        &times;
      </button>
      {!isPermanent && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.3)',
          animation: `progress-shrink ${toast.duration}ms linear forwards`
        }} />
      )}
    </div>
  );
};
