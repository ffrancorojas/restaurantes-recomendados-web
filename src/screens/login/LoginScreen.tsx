import { styles } from '@screens/login/loginScreen.styles';
import type { LoginScreenProps } from '@screens/login/loginScreen.types';
export function LoginScreen({ error, onLogin }: LoginScreenProps) {
  return (
    <main style={styles.screen}>
      <div style={styles.brand}>✦</div>
      <p style={styles.eyebrow}>TU MAPA GASTRONÓMICO</p>
      <h1 style={styles.title}>
        Restaurantes
        <br />
        <em style={styles.accent}>recomendados</em>
      </h1>
      <p style={styles.lead}>
        Guarda cada sitio que quieres probar y encuéntralo cuando lo necesites, desde cualquier
        dispositivo.
      </p>
      <button style={styles.submit} onClick={onLogin}>
        Continuar con Google
      </button>
      {error && <p style={styles.error}>{error}</p>}
      <p style={styles.hint}>También puedes usarlo desde el navegador sin instalar nada.</p>
    </main>
  );
}
