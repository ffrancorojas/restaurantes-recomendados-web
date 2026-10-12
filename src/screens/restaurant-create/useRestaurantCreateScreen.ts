import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import { restaurantService } from '@services';
import type { SaveRestaurantFormParams } from '@components/restaurant-form';
import { initialRestaurantForm } from '@components/restaurant-form/restaurantForm.tools';
import { decodeRestaurantShare } from '@tools';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { CreateRestaurantParams } from '@services';
import type { Restaurant } from '@contracts';

async function createRestaurant({ token, data }: CreateRestaurantParams): Promise<Restaurant> {
  return restaurantService.create({ token, data });
}

export function useRestaurantCreateScreen() {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const shareToken = searchParams.get('share');
  const prefill = useMemo(
    () => (shareToken ? (decodeRestaurantShare(shareToken) ?? undefined) : undefined),
    [shareToken],
  );
  const isShared = Boolean(shareToken && prefill);
  const initial = useMemo(
    () => ({
      ...initialRestaurantForm,
      ...prefill,
      ...(isShared ? { source: 'shared' as const } : {}),
    }),
    [isShared, prefill],
  );

  useEffect(() => {
    if (shareToken && !prefill) setError('El enlace compartido no es válido.');
  }, [prefill, shareToken]);

  const saveRestaurant = async ({ data }: SaveRestaurantFormParams): Promise<void> => {
    return createRestaurant({ token: session.accessToken, data })
      .then(() => navigate('/restaurants'))
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudo crear el restaurante.' })),
      );
  };

  return {
    error,
    initial,
    isShared,
    onSave: saveRestaurant,
  };
}
