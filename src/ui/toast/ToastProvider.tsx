import React, { ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { ToastContext } from './ToastContext';
import { Toast, ToastType } from './toast.types';
import { ToastItem } from './ToastItem';
import { toastConfig } from '../../config/toast.config';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutsRef = useRef(new Map<string, number>());
  const lastToastRef = useRef<{ message: string; type: string; time: number } | null>(null);

  const removeToast = useCallback((id: string) => {
    const existing = timeoutsRef.current.get(id);
    if (existing) {
      clearTimeout(existing);
      timeoutsRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = toastConfig.defaultDuration) => {
    const now = Date.now();
    if (
      lastToastRef.current &&
      lastToastRef.current.message === message &&
      lastToastRef.current.type === type &&
      now - lastToastRef.current.time < 500
    ) {
      return; 
    }
    
    lastToastRef.current = { message, type, time: now };
    const id = crypto.randomUUID();
    const newToast: Toast = { id, message, type, duration };
    
    setToasts((prev) => {
      const next = [...prev, newToast];
      return next.slice(-toastConfig.maxToasts);
    });

    if (duration > 0) {
      const timeout = window.setTimeout(() => {
        removeToast(id);
      }, duration);
      timeoutsRef.current.set(id, timeout);
    }
  }, [removeToast]);

  useEffect(() => {
    const map = timeoutsRef.current;
    return () => {
      map.forEach((timeout) => clearTimeout(timeout));
      map.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      >
        {toasts.map((toast) => (
          <div key={toast.id} style={{ pointerEvents: 'auto' }}>
            <ToastItem toast={toast} onClose={() => removeToast(toast.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
