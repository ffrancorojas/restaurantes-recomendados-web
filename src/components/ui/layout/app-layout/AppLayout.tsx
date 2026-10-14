import { InstallPrompt } from '@components/features/install-prompt';
import type { AppLayoutProps } from './appLayout.types';

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      {children}
      <InstallPrompt />
    </>
  );
}
