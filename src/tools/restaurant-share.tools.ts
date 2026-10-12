import type { RestaurantFormData } from '@contracts';
import type { RestaurantShareData, ShareRestaurantParams } from './restaurant-share.types';

function toBase64Url(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

function fromBase64Url(value: string) {
  const base64 =
    value.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - (value.length % 4)) % 4);
  const binary = atob(base64);
  return new TextDecoder().decode(Uint8Array.from(binary, (character) => character.charCodeAt(0)));
}

export function encodeRestaurantShare({ data }: ShareRestaurantParams) {
  const shareData: RestaurantShareData = {
    name: data.name,
    locality: data.locality,
    dishes: data.dishes,
    price: data.price,
    type: data.type,
    notes: data.notes,
    recommendedBy: data.recommendedBy,
  };
  return toBase64Url(JSON.stringify(shareData));
}

export function decodeRestaurantShare(token: string): Partial<RestaurantFormData> | null {
  try {
    const data = JSON.parse(fromBase64Url(token)) as RestaurantShareData;
    if (!data || typeof data !== 'object' || typeof data.name !== 'string') return null;
    return { ...data, visited: false, opinion: '', rating: '' };
  } catch {
    return null;
  }
}

export function createRestaurantShareUrl({ data }: ShareRestaurantParams) {
  const token = encodeRestaurantShare({ data });
  return `${window.location.origin}/restaurants/new?share=${encodeURIComponent(token)}`;
}

export async function shareRestaurant({ data }: ShareRestaurantParams) {
  const url = createRestaurantShareUrl({ data });
  const title = `Restaurante recomendado: ${data.name}`;
  if (navigator.share) {
    await navigator.share({ title, text: 'Te comparto este restaurante.', url });
    return;
  }
  await navigator.clipboard.writeText(url);
  window.alert('Enlace de restaurante copiado al portapapeles.');
}
