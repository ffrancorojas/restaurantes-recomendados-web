import { AppLayout } from '@components/app-layout';
import { AppProvider } from '@app/AppProvider';
import { useAppContext } from '@app/app.context';
import { AppRouter } from '@app/router';

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { session, logout } = useAppContext();
  return (
    <AppLayout user={session?.user} onLogout={session ? logout : undefined}>
      <AppRouter />
    </AppLayout>
  );
}
