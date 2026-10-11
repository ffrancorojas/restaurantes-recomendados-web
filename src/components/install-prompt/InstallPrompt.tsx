import { useInstallPrompt } from './useInstallPrompt';
import { IconButton, TextButton } from '@components/buttons';
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
      <TextButton text="Instalar" variant="secondary" style={styles.install} onClick={install} />
      <IconButton icon={<span aria-hidden="true">×</span>} name="Cerrar" onClick={hide} />
    </aside>
  );
}
