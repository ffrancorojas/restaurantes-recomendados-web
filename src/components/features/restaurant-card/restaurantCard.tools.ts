import { PRICE_RANGES } from '@contracts';
import type { GetPriceLabelParams } from './restaurantCard.types';

export function getPriceLabel({ price }: GetPriceLabelParams) {
  return PRICE_RANGES.find((item) => item.value === price)?.label;
}
