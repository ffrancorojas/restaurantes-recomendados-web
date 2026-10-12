import type { AuthSession, User } from '@contracts';
import { httpRequest } from './http.service';
import type { AuthRequestParams, ExchangeGoogleTokenParams } from './services.types';

export const authService = {
  exchangeGoogleToken: ({ idToken }: ExchangeGoogleTokenParams) =>
    httpRequest<AuthSession>({
      path: '/auth/google',
      options: { method: 'POST', body: JSON.stringify({ idToken }) },
    }),
  me: ({ token }: AuthRequestParams) => httpRequest<User>({ path: '/auth/me', token }),
  logout: ({ token }: AuthRequestParams) =>
    httpRequest<void>({ path: '/auth/logout', options: { method: 'POST' }, token }),
};
