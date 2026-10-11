import { useOutletContext } from 'react-router-dom';
import type { AuthSession } from '@contracts';

export function useAuthenticatedSession() {
  const session = useOutletContext<AuthSession | undefined>();

  if (!session) {
    throw new Error('useAuthenticatedSession debe utilizarse dentro de AuthenticatedRoute.');
  }

  return session;
}
