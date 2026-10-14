import { Button } from '@components/ui/buttons';
import { useAppContext } from '@app/app.context';
import { useAuthenticatedSession } from '@app/router/router.context';
import { restaurantService } from '@services';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homeScreen.styles.scss';

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
    <main className="flex-column background-app justify-content-center padding-screen-mobile home-screen-screen">
      <section className="flex-column justify-content-center width-full home-screen-content">
        <p className="margin-bottom-eyebrow text-eyebrow font-size-xs home-screen-eyebrow">TU MAPA GASTRONÓMICO</p>
        <h1 className="margin-none text-color font-size-display home-screen-title">
          Restaurantes
          <br />
          <em className="text-primary home-screen-accent">recomendados</em>
        </h1>
        <p className="text-muted font-size-lg home-screen-subtitle">
          Guarda cada sitio que quieres probar y encuéntralo cuando lo necesites.
        </p>
      <div className="flex-column gap-large width-full home-screen-actions">
          <Button.Text
            rightText="Nueva entrada"
            iconName="add"
            className="width-full"
            onClick={() => navigate('/restaurants/new')}
          />
          <Button.Text
            leftText={restaurantCount === null ? 'Ver listado' : `Ver listado (${restaurantCount})`}
            variant="secondary"
            className="width-full"
            onClick={() => navigate('/restaurants')}
          />
        </div>
      </section>
      <footer className="flex justify-content-center home-screen-footer">
        <Button.Text leftText="Cerrar sesión" variant="secondary" onClick={() => void logout()} />
      </footer>
    </main>
  );
}
