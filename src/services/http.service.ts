export type HttpRequestParams = { path: string; options?: RequestInit; token?: string };

const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1').replace(/\/$/, '');

export async function httpRequest<T>({ path, options = {}, token }: HttpRequestParams): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (response.status === 204) return undefined as T;

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      Array.isArray(data.message)
        ? data.message.join('\n')
        : data.message || 'No se pudo completar la solicitud.',
    );
  }

  return data as T;
}

export async function httpDownload({ path, token }: Pick<HttpRequestParams, 'path' | 'token'>) {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(
      Array.isArray(data.message)
        ? data.message.join('\n')
        : data.message || 'No se pudo descargar el archivo.',
    );
  }

  return response.blob();
}
