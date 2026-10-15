import { PRICE_RANGES, type Restaurant, type RestaurantRating } from '@contracts';
import { Button } from '@components/ui/buttons';
import { RatingSelector } from '@components/restaurant-form/components';
import { Spinner } from '@components/ui/feedback/spinner';
import { TextArea } from '@components/ui/controls/standalone/text-area';
import { getErrorMessage } from '@app/app.tools';
import { useAuthenticatedSession } from '@app/router/router.context';
import { restaurantService } from '@services';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './restaurantVisitScreen.styles.scss';

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
      <main className="background-app padding-none-mobile restaurant-visit-screen-page">
        <Spinner label="Cargando restaurante…" />
      </main>
    );
  if (!restaurant)
    return <main className="background-app padding-none-mobile restaurant-visit-screen-page">{error || 'Restaurante no encontrado.'}</main>;

  const price =
    PRICE_RANGES.find((range) => range.value === restaurant.price)?.label ?? 'Sin indicar';

  return (
    <main className="background-app padding-none-mobile restaurant-visit-screen-page">
      <form
        className="flex-column gap-medium background-surface radius-card border-default margin-auto padding-form padding-form-mobile width-full restaurant-visit-screen-form"
        onSubmit={(event) => {
          event.preventDefault();
          void saveVisit();
        }}
      >
        <header className="flex align-items-flex-start justify-content-space-between gap-large">
          <div>
            <p className="margin-bottom-small text-muted font-extrabold font-size-xs restaurant-visit-screen-eyebrow">REGISTRAR EXPERIENCIA</p>
            <h1 className="margin-none font-black font-size-xl restaurant-visit-screen-title">Valorar visita</h1>
          </div>
          <Button.Text
            leftText="Volver"
            iconName="back"
            variant="ghost"
            type="button"
            onClick={() => navigate('/restaurants')}
          />
        </header>
        <section className="background-soft-sand radius-md restaurant-visit-screen-summary" aria-label="Datos del restaurante">
          <h2 className="font-size-lg restaurant-visit-screen-name">{restaurant.name}</h2>
          <p className="text-muted font-size-sm restaurant-visit-screen-row">
            <b>Localidad</b>: {restaurant.locality || 'Sin indicar'}
          </p>
          <p className="text-muted font-size-sm restaurant-visit-screen-row">
            <b>Precio</b>: {price}
          </p>
          <p className="text-muted font-size-sm restaurant-visit-screen-row">
            <b>Platos recomendados</b>: {restaurant.dishes || 'Sin indicar'}
          </p>
          <p className="text-muted font-size-sm restaurant-visit-screen-row">
            <b>Tipos de cocina</b>: {restaurant.type.join(', ') || 'Sin indicar'}
          </p>
          {restaurant.recommendedBy && (
            <p className="text-muted font-size-sm restaurant-visit-screen-row">
              <b>Recomendado por</b>: {restaurant.recommendedBy}
            </p>
          )}
          {restaurant.notes && (
            <p className="text-muted font-size-sm restaurant-visit-screen-row">
              <b>Observaciones</b>: {restaurant.notes}
            </p>
          )}
        </section>
        <TextArea label="Mi opinión" value={opinion} onChange={({ value }) => setOpinion(value)} />
        <RatingSelector value={rating} onChange={({ value }) => setRating(value)} />
        {error && (
          <p role="alert" className="text-danger font-size-sm">
            {error}
          </p>
        )}
        <div className="flex justify-content-flex-end">
          <Button.Text leftText="Guardar visita" disabled={!rating || saving} />
        </div>
      </form>
    </main>
  );
}
