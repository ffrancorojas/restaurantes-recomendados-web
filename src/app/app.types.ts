import type { ReactNode } from 'react';
import type { RestaurantFormData } from '@contracts';
export type AppProviderProps = { children: ReactNode };
export type SaveRestaurantParams = { data: RestaurantFormData; id?: string };
export type RemoveRestaurantParams = { id: string };
export type GetErrorMessageParams = { cause: unknown; fallback: string };
