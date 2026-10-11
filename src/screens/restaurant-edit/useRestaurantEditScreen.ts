import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '@api';
import { getErrorMessage } from '@app/app.tools';
import { useAuthenticatedSession } from '@app/router/router.context';
import type { SaveRestaurantFormParams } from '@components/restaurant-form';
import type { Restaurant } from '@contracts';

export function useRestaurantEditScreen() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    if (!restaurantId) {
      setLoading(false);
      return () => {
        active = false;
      };
    }

    setLoading(true);
    setError('');
    api
      .getById({ token: session.accessToken, id: restaurantId })
      .then((data) => {
        if (active) setRestaurant(data);
      })
      .catch((cause) => {
        if (active) {
          setError(getErrorMessage({ cause, fallback: 'No se pudo cargar el restaurante.' }));
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [restaurantId, session.accessToken]);

  const save = async ({ data }: SaveRestaurantFormParams) => {
    if (!restaurantId) return;

    setError('');
    try {
      await api.update({ token: session.accessToken, id: restaurantId, data });
      navigate('/restaurants');
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo editar el restaurante.' }));
    }
  };

  return {
    restaurant,
    loading,
    error,
    onCancel: () => navigate('/restaurants'),
    onSave: save,
  };
}
