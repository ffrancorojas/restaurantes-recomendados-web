import type { ReactNode } from 'react';
import type { User } from '@contracts';

export type AppLayoutProps = {
  children: ReactNode;
  user?: User;
  onLogout?: () => Promise<void>;
};
