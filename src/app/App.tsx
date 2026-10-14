import { AppLayout } from '@components/ui/layout/app-layout';
import { AppProvider } from '@app/AppProvider';
import { AppRouter } from '@app/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-family)',
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}
