import '@screens/login/loginScreen.styles.scss';
import { Icon } from '@components/ui/icons';
import type { LoginScreenProps } from '@screens/login/loginScreen.types';
export function LoginScreen({ error, loading, onLogin }: LoginScreenProps) {
  return (
    <main className="flex-column align-items-flex-start justify-content-center margin-auto login-screen-screen">
      <div className="flex align-items-center justify-content-center background-primary text-on-accent radius-card login-screen-brand">
        <Icon name="sparkle" size={30} />
      </div>
      <p className="margin-bottom-eyebrow text-eyebrow font-size-xs login-screen-eyebrow">TU MAPA GASTRONÓMICO</p>
      <h1 className="font-size-display login-screen-title">
        Restaurantes
        <br />
        <em className="text-primary login-screen-accent">recomendados</em>
      </h1>
      <p className="text-muted font-size-lg login-screen-lead">
        Guarda cada sitio que quieres probar y encuéntralo cuando lo necesites, desde cualquier
        dispositivo.
      </p>
      <button className="background-primary text-on-accent radius-button font-bold padding-button width-full login-screen-submit" onClick={onLogin} disabled={loading} aria-busy={loading}>
        {loading && <Icon name="spinner" size={16} className="text-on-accent login-screen-spinner" />}
        {loading ? 'Iniciando sesión…' : 'Continuar con Google'}
      </button>
      {error && <p className="background-danger-subtle text-danger radius-md padding-compact font-size-md">{error}</p>}
      <p className="text-muted font-size-md login-screen-hint">
        También puedes usarlo desde el navegador sin instalar nada.
      </p>
    </main>
  );
}
