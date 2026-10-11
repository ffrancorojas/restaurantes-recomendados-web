import { useInstallPrompt } from './useInstallPrompt';
import { IconButton } from '@components/icon-button';
import { styles } from './installPrompt.styles';
export function InstallPrompt() {
  const { installEvent, hidden, hide, install } = useInstallPrompt();
  if (!installEvent || hidden) return null;
  return (
    <aside data-responsive-install style={styles.container}>
      <span style={styles.copy}>
        <b>Instala Restaurantes</b>
        <small>Accede más rápido desde tu dispositivo.</small>
      </span>
      <button style={styles.install} onClick={install}>
        Instalar
      </button>
      <IconButton icon="close" label="Cerrar" onClick={hide} />
    </aside>
  );
}
