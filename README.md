# Restaurantes recomendados — PWA web

Aplicación web instalable construida con React, TypeScript y Vite. Usa el mismo backend NestJS, PostgreSQL, Firebase Authentication y sesiones que el proyecto móvil.

## Desarrollo

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Completa las variables de Firebase Web en `.env`. En Firebase Authentication añade `localhost` y el dominio público en Authorized domains. Configura el backend para aceptar `http://localhost:5173` en `CORS_ORIGINS`.

## Producción

```powershell
npm run build
```

Publica `dist` mediante HTTPS. El manifest, service worker y prompt de instalación están incluidos.

## Backend reutilizado

Este repositorio no contiene una copia del backend: consume `http://localhost:3000/api/v1` o la URL configurada en `VITE_API_URL`. Por tanto, los datos, usuarios, autenticación Google y sesiones son los mismos que en la app móvil.
