import { createContext } from 'react';
import { Toast, ToastType } from './toast.types';

export type ToastContextType = {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
