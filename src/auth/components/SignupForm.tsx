import React, { useState } from 'react';
import { Button } from '../../ui/components/Button';
import { Input } from '../../ui/components/Input';
import { Label } from '../../ui/components/Label';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../../ui/toast/useToast';
import { authConfig } from '../../config/auth.config';
import { validateEmail, validatePassword, validateUsername } from '../services/validationService';

export const SignupForm = ({ onSwitch }: { onSwitch: () => void }) => {
  const { signup } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getStrengthIndicators = () => {
    if (!password) return { label: '', segments: [0, 0, 0], color: 'transparent' };
    if (password.length < 5) return { label: 'Weak', segments: [1, 0, 0], color: 'var(--color-error)' };
    if (password.length < 8) return { label: 'Fair', segments: [1, 1, 0], color: '#eab308' }; // yellow-500
    return { label: 'Strong', segments: [1, 1, 1], color: 'var(--color-success)' };
  };

  const strength = getStrengthIndicators();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setError(null);

    // Pre-flight checks before sync freeze
    const emailErr = validateEmail(email);
    if (emailErr) return setError(emailErr);

    const userErr = validateUsername(username);
    if (userErr) return setError(userErr);

    const passErr = validatePassword(password);
    if (passErr) return setError(passErr);

    setIsLoading(true);

    // Minor delay to allow UX loader spin visualization before sync computing
    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      signup(email, password, username);
      showToast(authConfig.messages.signupSuccess, "success");
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        showToast(err.message, "error");
      } else {
        setError("Something went wrong");
        showToast("Something went wrong", "error");
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
          <Label htmlFor="signup-email">Email Address</Label>
          <Input 
            id="signup-email"
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
          <Label htmlFor="signup-username">Username <span style={{ color: 'var(--color-border)', fontWeight: 400 }}>(Optional)</span></Label>
          <Input 
            id="signup-username"
            type="text" 
            placeholder="johndoe" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            className="focus-ring"
          />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6px' }}>
            <Label htmlFor="signup-password" style={{ marginBottom: 0 }}>Password</Label>
            {password.length > 0 && (
              <span style={{ fontSize: '12px', fontWeight: 500, color: strength.color }}>{strength.label}</span>
            )}
          </div>
          <Input 
            id="signup-password"
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
            className="focus-ring"
          />
          {password.length > 0 && (
            <div style={{ display: 'flex', gap: '4px', width: '100%', marginTop: '8px' }}>
              {strength.segments.map((active, idx) => (
                <div key={idx} style={{ 
                  height: '4px', 
                  flex: 1, 
                  backgroundColor: active ? strength.color : 'var(--color-border)', 
                  borderRadius: '2px', 
                  transition: 'background-color 0.3s ease' 
                }} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Button type="submit" isLoading={isLoading} style={{ width: '100%', marginBottom: 'var(--space-4)' }} className="focus-ring">
        Create Account
      </Button>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
          Already have an account? <button type="button" className="focus-ring" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 500, cursor: isLoading ? 'default' : 'pointer', padding: '2px 4px', borderRadius: '4px' }} onClick={!isLoading ? onSwitch : undefined}>Sign in</button>
        </span>
      </div>
    </form>
  );
};
