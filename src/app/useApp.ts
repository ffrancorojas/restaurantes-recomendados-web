import { useEffect, useState } from 'react';
import type {
  AppActions,
  AppState,
  RemoveRestaurantParams,
  SaveRestaurantParams,
} from '@app/app.types';
import type { Restaurant, RestaurantFormData } from '@contracts';
import { api } from '@api';
import { loginWithGoogle } from '@auth';
import { SESSION_KEY, getErrorMessage, readSavedSession } from '@app/app.tools';

export function useApp(): AppState & AppActions {
  const [session, setSession] = useState<AppState['session']>(readSavedSession);
  const [view, setView] = useState<AppState['view']>('list');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(Boolean(session));
  const [error, setError] = useState('');
  const [editing, setEditing] = useState<AppState['editing']>(null);
  useEffect(() => {
    if (!session) return;
    setLoading(true);
    api
      .restaurants({ token: session.accessToken })
      .then((page) => setRestaurants(page.items))
      .catch((cause) => {
        setError(getErrorMessage({ cause, fallback: 'No se pudieron cargar tus restaurantes.' }));
        setSession(null);
      })
      .finally(() => setLoading(false));
  }, [session]);
  const login = async () => {
    setError('');
    try {
      const nextSession = await loginWithGoogle();
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
      setSession(nextSession);
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo iniciar sesión.' }));
    }
  };
  const logout = async () => {
    if (session) await api.logout({ token: session.accessToken }).catch(() => undefined);
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
    setView('list');
    setRestaurants([]);
  };
  const saveRestaurant = async ({ data, id }: SaveRestaurantParams) => {
    if (!session) return;
    const isNew = editing === 'new';
    const restaurantId = id ?? (editing && !isNew ? editing.id : undefined);
    if (!isNew && !restaurantId) return;
    setError('');
    try {
      const saved = isNew
        ? await api.create({ token: session.accessToken, data })
        : await api.update({ token: session.accessToken, id: restaurantId!, data });
      setRestaurants((current) =>
        isNew ? [saved, ...current] : current.map((item) => (item.id === saved.id ? saved : item)),
      );
      setEditing(null);
      setView('list');
    } catch (cause) {
      setError(getErrorMessage({ cause, fallback: 'No se pudo guardar el restaurante.' }));
    }
  };
  const removeRestaurant = async ({ id }: RemoveRestaurantParams) => {
    if (!session || !window.confirm('¿Quieres eliminar esta entrada?')) return;
    await api.remove({ token: session.accessToken, id });
    setRestaurants((current) => current.filter((item) => item.id !== id));
  };
  return {
    session,
    restaurants,
    loading,
    error,
    editing,
    login,
    logout,
    view,
    startCreating: () => {
      setEditing('new');
      setView('create');
    },
    startEditing: ({ restaurant }) => setEditing(restaurant),
    cancelEditing: () => {
      setEditing(null);
      setView('list');
    },
    saveRestaurant,
    removeRestaurant,
  };
}
