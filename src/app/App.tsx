import React from 'react';
import { AuthContainer } from '../auth/components/AuthContainer';
import { useAuth } from '../auth/hooks/useAuth';
import { useToast } from '../ui/toast/useToast';
import { authConfig } from '../config/auth.config';
import { Card } from '../ui/components/Card';
import { Button } from '../ui/components/Button';

export const App = () => {
  const { isAuthenticated, loading, logout, user } = useAuth();
  const { showToast } = useToast();

  const handleLogout = () => {
    logout();
    showToast(authConfig.messages.logout, "info");
  };

  if (loading) {
    return (
      <div className="bg-mesh" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
        <svg className="spinner" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="var(--color-text-muted)" strokeWidth="3" strokeOpacity="0.2" />
          <path d="M12 2v0a10 10 0 0 1 10 10v0" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="animate-fade-in" style={{ marginTop: 'var(--space-4)', color: 'var(--color-text-muted)', fontSize: '14px', fontWeight: 500 }}>
          Initializing session...
        </span>
      </div>
    );
  }

  return (
    <div className={isAuthenticated ? "bg-mesh" : ""} style={{ display: 'flex', minHeight: '100vh', width: '100%', flexDirection: 'column' }}>
      {isAuthenticated ? (
        <>
          <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: 'var(--space-4) var(--space-6)', 
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: 'rgba(24, 24, 27, 0.7)',
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{ fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: 'var(--color-primary)' }} />
              AuthSystem
            </div>
            <Button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text)' }} className="focus-ring">
              Sign Out
            </Button>
          </header>
          
          <main className="animate-fade-in" style={{ flex: 1, padding: 'var(--space-6)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ width: '100%', maxWidth: '800px', marginTop: '40px' }}>
              <Card>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-5)' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--color-text)'
                  }}>
                    {user?.email?.[0].toUpperCase()}
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '20px' }}>Welcome back{user?.username ? `, ${user.username}` : ''}</h2>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '4px' }}>
                      {user?.email}
                    </p>
                  </div>
                </div>
                
                <div style={{ padding: 'var(--space-4)', backgroundColor: '#111113', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: '14px', margin: '0 0 var(--space-2) 0', color: 'var(--color-text-muted)' }}>Session Details</h3>
                  <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>User ID</span>
                      <span style={{ fontFamily: 'monospace', color: 'var(--color-text)' }}>{user?.id}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Account Created</span>
                      <span style={{ color: 'var(--color-text)' }}>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </main>
        </>
      ) : (
        <div style={{ width: '100%', position: 'relative', flex: 1, display: 'flex' }}>
          <AuthContainer />
        </div>
      )}
    </div>
  );
};
