import { useInstallPrompt } from './useInstallPrompt';
import { Button } from '@components/ui/buttons';
import './installPrompt.styles.scss';
export function InstallPrompt() {
  const { installEvent, hidden, hide, install } = useInstallPrompt();
  if (!installEvent || hidden) return null;
  return (
    <aside className="flex align-items-center gap-large background-surface radius-button border-default install-prompt-container">
      <span className="flex-column install-prompt-copy">
        <b>Instala Restaurantes</b>
        <small>Accede más rápido desde tu dispositivo.</small>
      </span>
      <Button.Text
        leftText="Instalar"
        variant="secondary"
        className="text-surface radius-sm font-semibold padding-compact install-prompt-install"
        onClick={install}
      />
      <Button.Icon iconName="close" name="Cerrar" onClick={hide} />
    </aside>
  );
}
