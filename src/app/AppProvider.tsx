import { useState } from 'react';
import { authService } from '@services';
import { loginWithGoogle } from '@auth';
import { AppContext } from './app.context';
import { SESSION_KEY, getErrorMessage, readSavedSession } from './app.tools';
import type { AppProviderProps } from './app.types';

export function AppProvider({ children }: AppProviderProps) {
  const [session, setSession] = useState(readSavedSession);
  const [error, setError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const login = async () => {
    setError('');
    setLoggingIn(true);
    try {
      const nextSession = await loginWithGoogle();
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
      setSession(nextSession);
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo iniciar sesión.' }));
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = async () => {
    if (session) await authService.logout({ token: session.accessToken }).catch(() => undefined);
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  return (
    <AppContext.Provider value={{ session, error, loggingIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}
