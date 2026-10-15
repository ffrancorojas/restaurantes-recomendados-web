import type { RestaurantPageSize } from '@screens/restaurant-list/restaurantListScreen.types';

export type RestaurantListPaginationProps = {
  totalItems: number;
  page: number;
  pageSize: RestaurantPageSize;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: RestaurantPageSize) => void;
};
