import type { AuthSession } from '@contracts';
import type { GetErrorMessageParams } from '@app/app.types';
export const SESSION_KEY = 'restaurantes.web.session';
export function readSavedSession(): AuthSession | null {
  try {
    const saved = localStorage.getItem(SESSION_KEY);
    return saved ? (JSON.parse(saved) as AuthSession) : null;
  } catch {
    return null;
  }
}
export function getErrorMessage({ cause, fallback }: GetErrorMessageParams) {
  return cause instanceof Error ? cause.message : fallback;
}
