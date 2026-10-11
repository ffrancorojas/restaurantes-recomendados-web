import { createContext, useContext } from 'react';
import type { AuthSession } from '@contracts';

export type AppContextValue = {
  session: AuthSession | null;
  error: string;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

export const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe utilizarse dentro de AppProvider.');
  return context;
}
