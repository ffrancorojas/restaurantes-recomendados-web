import { AppLayout } from '@components/app-layout';
import { AppProvider } from '@app/AppProvider';
import { AppRouter } from '@app/router';

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}
