export type RestaurantLinkTarget = {
  name: string;
  locality: string;
};

export type OpenRestaurantLinkParams = {
  restaurant: RestaurantLinkTarget;
};

export type UseRestaurantLinksResult = {
  openMaps: (params: OpenRestaurantLinkParams) => void;
  openGoogle: (params: OpenRestaurantLinkParams) => void;
};
