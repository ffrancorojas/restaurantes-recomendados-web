import { RestaurantForm } from '@components/restaurant-form';
import { useAuthenticatedSession } from '@app/router/router.context';
import { api } from '@api';
import { getErrorMessage } from '@app/app.tools';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RestaurantCreateHeader } from './components';

export function RestaurantCreateScreen() {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [error, setError] = useState('');
  return (
    <main data-responsive-screen>
      <RestaurantCreateHeader />
      <RestaurantForm
        error={error}
        initial="new"
        variant="page"
        onCancel={() => navigate('/restaurants')}
        onSave={async ({ data }) => {
          try {
            await api.create({ token: session.accessToken, data });
            navigate('/restaurants');
          } catch (cause) {
            setError(getErrorMessage({ cause, fallback: 'No se pudo crear el restaurante.' }));
          }
        }}
      />
    </main>
  );
}
