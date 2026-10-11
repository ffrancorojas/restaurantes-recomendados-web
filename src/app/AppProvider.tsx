import { useState } from 'react';
import { api } from '@api';
import { loginWithGoogle } from '@auth';
import { AppContext } from './app.context';
import { SESSION_KEY, getErrorMessage, readSavedSession } from './app.tools';
import type { AppProviderProps } from './app.types';

export function AppProvider({ children }: AppProviderProps) {
  const [session, setSession] = useState(readSavedSession);
  const [error, setError] = useState('');

  const login = async () => {
    setError('');
    try {
      const nextSession = await loginWithGoogle();
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
      setSession(nextSession);
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo iniciar sesión.' }));
    }
  };

  const logout = async () => {
    if (session) await api.logout({ token: session.accessToken }).catch(() => undefined);
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  return (
    <AppContext.Provider value={{ session, error, login, logout }}>{children}</AppContext.Provider>
  );
}
