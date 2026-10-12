import { styles } from './appHeader.styles';
import type { AppHeaderProps } from './appHeader.types';
export function AppHeader({ user, onLogout }: AppHeaderProps) {
  return (
    <header data-responsive-header style={styles.header}>
      <div style={styles.wordmark}>
        <img src="/icon.png" alt="" style={styles.mark} />
        <b style={styles.name}>
          Restaurantes
          <br />
          <i style={styles.accent}>recomendados</i>
        </b>
      </div>
      <div data-responsive-account style={styles.account}>
        <span>{user.name}</span>
        <button style={styles.logout} onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
