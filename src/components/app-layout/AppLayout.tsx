import { AppHeader } from '@components/app-header';
import { InstallPrompt } from '@components/install-prompt';
import type { AppLayoutProps } from './appLayout.types';

export function AppLayout({ children, user, onLogout }: AppLayoutProps) {
  return (
    <>
      {user && onLogout && <AppHeader user={user} onLogout={onLogout} />}
      {children}
      <InstallPrompt />
    </>
  );
}
