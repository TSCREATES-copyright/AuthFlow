import React, { useState } from 'react';
import { Card } from '../../ui/components/Card';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-mesh" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      width: '100%',
      padding: 'var(--space-4)'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '420px', 
        animation: 'toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text)' }}>Welcome Back</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginTop: 'var(--space-1)' }}>
            Enter your credentials to continue
          </p>
        </div>
        <Card>
          {isLogin ? (
            <LoginForm onSwitch={() => setIsLogin(false)} />
          ) : (
            <SignupForm onSwitch={() => setIsLogin(true)} />
          )}
        </Card>
      </div>
    </div>
  );
};
