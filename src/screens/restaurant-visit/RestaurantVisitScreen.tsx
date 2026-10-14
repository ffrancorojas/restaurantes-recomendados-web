import { PRICE_RANGES } from '@contracts';
import { Button } from '@components/ui/buttons';
import { RatingSelector } from '@components/restaurant-form/components';
import { Spinner } from '@components/ui/feedback/spinner';
import { TextArea } from '@components/ui/controls/standalone/text-area';
import { getErrorMessage } from '@app/app.tools';
import { useAuthenticatedSession } from '@app/router/router.context';
import { restaurantService } from '@services';
import type { Restaurant, RestaurantRating } from '@contracts';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styles } from './restaurantVisitScreen.styles';

export function RestaurantVisitScreen() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [opinion, setOpinion] = useState('');
  const [rating, setRating] = useState<RestaurantRating>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    restaurantService
      .getById({ token: session.accessToken, id: restaurantId! })
      .then((item) => {
        if (!active) return;
        setRestaurant(item);
        setOpinion(item.opinion);
        setRating(item.rating);
      })
      .catch((cause) => {
        if (active)
          setError(getErrorMessage({ cause, fallback: 'No se pudo cargar el restaurante.' }));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [restaurantId, session.accessToken]);

  const saveVisit = async () => {
    if (!restaurantId || !rating) {
      setError('Elige una valoración antes de guardar la visita.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await restaurantService.update({
        token: session.accessToken,
        id: restaurantId,
        data: { visited: true, opinion, rating },
      });
      navigate('/restaurants');
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo guardar la visita.' }));
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <main data-responsive-screen style={styles.page}>
        <Spinner label="Cargando restaurante…" />
      </main>
    );
  if (!restaurant)
    return (
      <main data-responsive-screen style={styles.page}>
        {error || 'Restaurante no encontrado.'}
      </main>
    );

  const price =
    PRICE_RANGES.find((range) => range.value === restaurant.price)?.label ?? 'Sin indicar';

  return (
    <main data-responsive-screen data-responsive-form style={styles.page}>
      <form
        style={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          void saveVisit();
        }}
      >
        <header style={styles.header}>
          <div>
            <p style={styles.eyebrow}>REGISTRAR EXPERIENCIA</p>
            <h1 style={styles.title}>Valorar visita</h1>
          </div>
          <Button.Text
            leftText="Volver"
            iconName="back"
            variant="ghost"
            type="button"
            onClick={() => navigate('/restaurants')}
          />
        </header>
        <section style={styles.summary} aria-label="Datos del restaurante">
          <h2 style={styles.name}>{restaurant.name}</h2>
          <p style={styles.row}>
            <b>Localidad</b>: {restaurant.locality || 'Sin indicar'}
          </p>
          <p style={styles.row}>
            <b>Precio</b>: {price}
          </p>
          <p style={styles.row}>
            <b>Platos recomendados</b>: {restaurant.dishes || 'Sin indicar'}
          </p>
          <p style={styles.row}>
            <b>Tipos de cocina</b>: {restaurant.type.join(', ') || 'Sin indicar'}
          </p>
          {restaurant.recommendedBy && (
            <p style={styles.row}>
              <b>Recomendado por</b>: {restaurant.recommendedBy}
            </p>
          )}
          {restaurant.notes && (
            <p style={styles.row}>
              <b>Observaciones</b>: {restaurant.notes}
            </p>
          )}
        </section>
        <TextArea label="Mi opinión" value={opinion} onChange={({ value }) => setOpinion(value)} />
        <RatingSelector value={rating} onChange={({ value }) => setRating(value)} />
        {error && (
          <p role="alert" style={styles.error}>
            {error}
          </p>
        )}
        <div style={styles.actions}>
          <Button.Text leftText="Guardar visita" disabled={!rating || saving} />
        </div>
      </form>
    </main>
  );
}
