import { LoginScreen } from '@screens/login';
import { RestaurantCreateScreen } from '@screens/restaurant-create';
import { RestaurantEditScreen } from '@screens/restaurant-edit';
import { RestaurantListScreen } from '@screens/restaurant-list';
import { useAppContext } from '@app/app.context';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route element={<AuthenticatedRoute />}>
          <Route path="/restaurants" element={<RestaurantListScreen />} />
          <Route path="/restaurants/new" element={<RestaurantCreateScreen />} />
          <Route path="/restaurants/:restaurantId/edit" element={<RestaurantEditScreen />} />
        </Route>
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function LoginRoute() {
  const { error, login, session } = useAppContext();
  return session ? (
    <Navigate to="/restaurants" replace />
  ) : (
    <LoginScreen error={error} onLogin={login} />
  );
}

function AuthenticatedRoute() {
  const { session } = useAppContext();
  return session ? <Outlet context={session} /> : <Navigate to="/login" replace />;
}

function FallbackRoute() {
  const { session } = useAppContext();
  return <Navigate to={session ? '/restaurants' : '/login'} replace />;
}
