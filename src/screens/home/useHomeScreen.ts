import { useState } from 'react';
import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import { restaurantService } from '@services';
import type { ExportNotice } from './components';

export function useHomeScreen() {
  const session = useAuthenticatedSession();
  const [exporting, setExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<ExportNotice | null>(null);

  const exportRestaurants = () => {
    setExporting(true);
    setExportNotice({ message: 'Preparando el archivo Excel…', severity: 'info' });

    return restaurantService
      .exportAll({ token: session.accessToken })
      .then((file) => {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'mis-restaurantes.xlsx';
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        setExportNotice({ message: 'Archivo Excel descargado.', severity: 'success' });
      })
      .catch((cause) => {
        setExportNotice({
          message: getErrorMessage({ cause, fallback: 'No se pudo exportar la información.' }),
          severity: 'error',
        });
      })
      .finally(() => setExporting(false));
  };

  return { exporting, exportNotice, setExportNotice, exportRestaurants };
}
