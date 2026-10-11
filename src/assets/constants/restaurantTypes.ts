export const RESTAURANT_TYPES = [
  'Hamburguesería',
  'Sushi',
  'Carne',
  'Pescado',
  'Italiano',
  'Mexicano',
  'Tapas',
  'Vegetariano',
  'Mediterráneo',
  'Japonés',
  'Chino',
  'Turco',
  'Otro',
] as const;

export type RestaurantType = (typeof RESTAURANT_TYPES)[number];
