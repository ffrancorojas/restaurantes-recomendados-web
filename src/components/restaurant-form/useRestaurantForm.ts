import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Restaurant, RestaurantFormData } from '@contracts';
import { initialRestaurantForm } from '@components/restaurant-form/restaurantForm.tools';
import type {
  SetRestaurantFieldParams,
  UseRestaurantFormParams,
} from '@components/restaurant-form/restaurantForm.types';
export function useRestaurantForm({ initial, onSave }: UseRestaurantFormParams) {
  const [data, setData] = useState<RestaurantFormData>(
    initial === 'new' ? initialRestaurantForm : initial,
  );
  const [saving, setSaving] = useState(false);
  const setField = <K extends keyof RestaurantFormData>({
    key,
    value,
  }: SetRestaurantFieldParams<K>) => setData((current) => ({ ...current, [key]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    try {
      await onSave({ data });
    } finally {
      setSaving(false);
    }
  };
  return { data, saving, setField, submit };
}
