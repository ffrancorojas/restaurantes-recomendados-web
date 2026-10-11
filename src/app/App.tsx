import { AppLayout } from '@components/app-layout';
import { useApp } from '@app/useApp';
import { AppRouter } from '@app/router';

export function App() {
  const app = useApp();
  return (
    <AppLayout user={app.session?.user} onLogout={app.session ? app.logout : undefined}>
      <AppRouter app={app} />
    </AppLayout>
  );
}
