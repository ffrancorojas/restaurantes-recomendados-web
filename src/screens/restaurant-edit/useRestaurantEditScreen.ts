import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { restaurantService } from '@services';
import { getErrorMessage } from '@app/app.tools';
import { useAuthenticatedSession } from '@app/router/router.context';
import type { SaveRestaurantFormParams } from '@components/restaurant-form';
import type { Restaurant } from '@contracts';

export function useRestaurantEditScreen() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getRestaurant = async (): Promise<void> => {
    restaurantService
      .getById({ token: session.accessToken, id: restaurantId! })
      .then(setRestaurant)
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudo cargar el restaurante.' })),
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getRestaurant();
  }, [restaurantId, session.accessToken]);

  const updateRestaurant = async ({ data }: SaveRestaurantFormParams): Promise<void> => {
    return restaurantService
      .update({ token: session.accessToken, id: restaurantId!, data })
      .then(() => navigate('/restaurants'))
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudo editar el restaurante.' })),
      );
  };

  return {
    restaurant,
    loading,
    error,
    onSave: updateRestaurant,
  };
}
