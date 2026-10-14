import { Button } from '@components/buttons';
import { useAppContext } from '@app/app.context';
import { useAuthenticatedSession } from '@app/router/router.context';
import { restaurantService } from '@services';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './homeScreen.styles';

export function HomeScreen() {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const { logout } = useAppContext();
  const [restaurantCount, setRestaurantCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    restaurantService
      .list({ token: session.accessToken })
      .then(({ items }) => {
        if (active) setRestaurantCount(items.length);
      })
      .catch(() => {
        if (active) setRestaurantCount(null);
      });
    return () => {
      active = false;
    };
  }, [session.accessToken]);

  return (
    <main data-responsive-screen style={styles.screen}>
      <section style={styles.content}>
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
        <p className="text-muted" style={styles.subtitle}>
          Guarda cada sitio que quieres probar y encuéntralo cuando lo necesites.
        </p>
        <div style={styles.actions}>
          <Button.Text
            rightText="Nueva entrada"
            iconName="add"
            style={styles.actionButton}
            onClick={() => navigate('/restaurants/new')}
          />
          <Button.Text
            leftText={restaurantCount === null ? 'Ver listado' : `Ver listado (${restaurantCount})`}
            variant="secondary"
            style={styles.actionButton}
            onClick={() => navigate('/restaurants')}
          />
        </div>
      </section>
      <footer style={styles.footer}>
        <Button.Text leftText="Cerrar sesión" variant="secondary" onClick={() => void logout()} />
      </footer>
    </main>
  );
}
