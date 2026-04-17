import React, { useState } from 'react';
import { Button } from '../../ui/components/Button';
import { Input } from '../../ui/components/Input';
import { Label } from '../../ui/components/Label';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../../ui/toast/useToast';
import { authConfig } from '../../config/auth.config';
import { validateEmail, validatePassword } from '../services/validationService';

export const LoginForm = ({ onSwitch }: { onSwitch: () => void }) => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    
    setError(null);

    // Pre-flight validation rules before loading state freeze
    const emailErr = validateEmail(email);
    if (emailErr) return setError(emailErr);

    const passErr = validatePassword(password);
    if (passErr) return setError(passErr);

    setIsLoading(true);
    
    // Slight artificial delay to allow UX transitions to register before sync freeze
    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      login(email, password);
      showToast(authConfig.messages.loginSuccess, "success");
      setEmail('');
      setPassword('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        showToast(err.message, "error");
      } else {
        setError(authConfig.messages.invalidCredentials || "Something went wrong");
        showToast(authConfig.messages.invalidCredentials || "Something went wrong", "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ minHeight: '24px', marginBottom: '16px' }}>
        {error && <span style={{ color: 'var(--color-error)', fontSize: '14px', fontWeight: 500 }}>{error}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
        <div>
          <Label htmlFor="login-email">Email Address</Label>
          <Input 
            id="login-email"
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
            className="focus-ring"
          />
        </div>
        <div>
          <Label htmlFor="login-password">Password</Label>
          <Input 
            id="login-password"
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
            className="focus-ring"
          />
        </div>
      </div>
      <Button type="submit" isLoading={isLoading} style={{ width: '100%', marginBottom: 'var(--space-4)' }} className="focus-ring">
        Sign In
      </Button>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
          Don't have an account? <button type="button" className="focus-ring" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 500, cursor: isLoading ? 'default' : 'pointer', padding: '2px 4px', borderRadius: '4px' }} onClick={!isLoading ? onSwitch : undefined}>Sign up</button>
        </span>
      </div>
    </form>
  );
};
