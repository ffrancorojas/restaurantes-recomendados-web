import { AppLayout } from '@components/ui/layout/app-layout';
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
