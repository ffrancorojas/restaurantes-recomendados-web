import { useInstallPrompt } from './useInstallPrompt';
import { Button } from '@components/ui/buttons';
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
      <Button.Text
        leftText="Instalar"
        variant="secondary"
        style={styles.install}
        onClick={install}
      />
      <Button.Icon iconName="close" name="Cerrar" onClick={hide} />
    </aside>
  );
}
