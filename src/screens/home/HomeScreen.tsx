import { Button } from '@components/ui/buttons';
import { useAppContext } from '@app/app.context';
import { useNavigate } from 'react-router-dom';
import { ExportDialog } from './components';
import { useHomeScreen } from './useHomeScreen';
import './homeScreen.styles.scss';

export function HomeScreen() {
  const navigate = useNavigate();
  const { logout } = useAppContext();
  const { exporting, exportNotice, setExportNotice, exportRestaurants } = useHomeScreen();

  return (
    <main className="flex-column background-app justify-content-center padding-screen-mobile home-screen-screen">
      <section className="flex-column justify-content-center width-full home-screen-content">
        <p className="margin-bottom-eyebrow text-eyebrow font-size-xs home-screen-eyebrow">
          TU MAPA GASTRONÓMICO
        </p>
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
            leftText="Ver listado"
            variant="secondary"
            className="width-full"
            onClick={() => navigate('/restaurants')}
          />
        </div>
      </section>
      <footer className="flex align-items-center justify-content-space-between home-screen-footer">
        <Button.Overlay
          id="home-screen-settings-menu"
          iconName="settings"
          iconSize={44}
          name="Configuración"
          disabled={exporting}
          className="home-screen-settings-button"
          items={[
            {
              text: exporting ? 'Exportando…' : 'Exportar a Excel',
              iconName: 'download',
              onClick: () => void exportRestaurants(),
              disabled: exporting,
            },
          ]}
        />
        <Button.Text
          leftText="Cerrar sesión"
          variant="secondary"
          className="home-screen-logout-button"
          onClick={() => void logout()}
        />
      </footer>
      <ExportDialog
        exporting={exporting}
        notice={exportNotice}
        onClose={() => setExportNotice(null)}
      />
    </main>
  );
}
