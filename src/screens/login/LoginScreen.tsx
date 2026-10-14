import { styles } from '@screens/login/loginScreen.styles';
import { Icon } from '@components/ui/icons';
import type { LoginScreenProps } from '@screens/login/loginScreen.types';
export function LoginScreen({ error, loading, onLogin }: LoginScreenProps) {
  return (
    <main style={styles.screen}>
      <div style={styles.brand}>
        <Icon name="sparkle" size={30} />
      </div>
      <p className="text-eyebrow" style={styles.eyebrow}>
        TU MAPA GASTRONÓMICO
      </p>
      <h1 style={styles.title}>
        Restaurantes
        <br />
        <em className="text-primary" style={styles.accent}>
          recomendados
        </em>
      </h1>
      <p className="text-muted" style={styles.lead}>
        Guarda cada sitio que quieres probar y encuéntralo cuando lo necesites, desde cualquier
        dispositivo.
      </p>
      <button style={styles.submit} onClick={onLogin} disabled={loading} aria-busy={loading}>
        {loading && <Icon name="spinner" size={16} style={styles.spinner} />}
        {loading ? 'Iniciando sesión…' : 'Continuar con Google'}
      </button>
      {error && (
        <p className="text-danger" style={styles.error}>
          {error}
        </p>
      )}
      <p className="text-muted" style={styles.hint}>
        También puedes usarlo desde el navegador sin instalar nada.
      </p>
    </main>
  );
}
