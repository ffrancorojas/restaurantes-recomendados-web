import { LoginScreen } from '@screens/login';
import { RestaurantCreateScreen } from '@screens/restaurant-create';
import { RestaurantEditScreen } from '@screens/restaurant-edit';
import { RestaurantListScreen } from '@screens/restaurant-list';
import { RestaurantVisitScreen } from '@screens/restaurant-visit';
import { useAppContext } from '@app/app.context';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route element={<AuthenticatedRoute />}>
          <Route path="/restaurants" element={<RestaurantListScreen />} />
          <Route path="/restaurants/new" element={<RestaurantCreateScreen />} />
          <Route path="/restaurants/:restaurantId/edit" element={<RestaurantEditScreen />} />
          <Route path="/restaurants/:restaurantId/visit" element={<RestaurantVisitScreen />} />
        </Route>
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function LoginRoute() {
  const { error, login, loggingIn, session } = useAppContext();
  const location = useLocation();
  const from = location.state?.from?.pathname
    ? `${location.state.from.pathname}${location.state.from.search ?? ''}${location.state.from.hash ?? ''}`
    : '/restaurants';
  return session ? (
    <Navigate to={from} replace />
  ) : (
    <LoginScreen error={error} loading={loggingIn} onLogin={login} />
  );
}

function AuthenticatedRoute() {
  const { session } = useAppContext();
  const location = useLocation();
  return session ? (
    <Outlet context={session} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function FallbackRoute() {
  const { session } = useAppContext();
  return <Navigate to={session ? '/restaurants' : '/login'} replace />;
}
