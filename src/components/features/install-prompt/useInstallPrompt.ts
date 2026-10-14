import { useEffect, useState } from 'react';
export type BeforeInstallPromptEvent = Event & { prompt: () => Promise<void> };
export function useInstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);
  return {
    installEvent,
    hidden,
    hide: () => setHidden(true),
    install: async () => {
      await installEvent?.prompt();
      setHidden(true);
    },
  };
}
