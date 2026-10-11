import type { AppActions, AppState } from '@app/app.types';

export type AppRouterProps = {
  app: AppState & AppActions;
};
