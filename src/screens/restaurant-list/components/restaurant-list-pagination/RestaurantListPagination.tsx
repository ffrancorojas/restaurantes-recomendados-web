import { useEffect, useState } from 'react';
import { Button } from '@components/ui/buttons';
import { SelectField } from '@components/ui/controls/standalone/select-field';
import {
  RESTAURANT_PAGE_SIZES,
  type RestaurantPageSize,
} from '@screens/restaurant-list/restaurantListScreen.types';
import type { RestaurantListPaginationProps } from './restaurantListPagination.types';
import './restaurantListPagination.styles.scss';

export function RestaurantListPagination({
  totalItems,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: RestaurantListPaginationProps) {
  const [pageInput, setPageInput] = useState(String(page));
  const pageCount = Math.ceil(totalItems / pageSize);

  useEffect(() => setPageInput(String(page)), [page]);

  if (totalItems <= RESTAURANT_PAGE_SIZES[0]) return null;

  const commitPageInput = () => {
    const parsedPage = Number(pageInput);
    if (!pageInput.trim() || !Number.isFinite(parsedPage)) {
      setPageInput(String(page));
      return;
    }

    const nextPage = Math.min(pageCount, Math.max(1, Math.floor(parsedPage)));
    setPageInput(String(nextPage));
    onPageChange(nextPage);
  };

  const handlePageSizeChange = ({ value }: { value: string }) => {
    const nextPageSize = Number(value) as RestaurantPageSize;
    if (RESTAURANT_PAGE_SIZES.includes(nextPageSize)) onPageSizeChange(nextPageSize);
  };

  return (
    <nav
      className="flex align-items-center justify-content-space-between restaurant-list-pagination"
      aria-label="Paginación de restaurantes"
    >
      {pageCount > 1 && (
        <div className="flex align-items-center gap-small restaurant-list-pagination-navigation">
          <Button.Icon
            iconName="chevronLeft"
            name="Página anterior"
            aria-label="Página anterior"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="restaurant-list-pagination-arrow"
          />
          <label className="flex align-items-center gap-small">
            <input
              aria-label="Número de página"
              className="restaurant-list-pagination-page-input"
              type="number"
              min={1}
              max={pageCount}
              step={1}
              value={pageInput}
              onChange={(event) => setPageInput(event.target.value)}
              onBlur={commitPageInput}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  commitPageInput();
                  event.currentTarget.blur();
                }
              }}
            />
          </label>
          <span>de {pageCount}</span>
          <Button.Icon
            iconName="chevronRight"
            name="Página siguiente"
            aria-label="Página siguiente"
            disabled={page >= pageCount}
            onClick={() => onPageChange(page + 1)}
            className="restaurant-list-pagination-arrow"
          />
        </div>
      )}
      <div className="flex align-items-center gap-small restaurant-list-pagination-page-size">
        <SelectField
          label="Restaurantes por página"
          value={String(pageSize)}
          options={RESTAURANT_PAGE_SIZES.map((size) => ({
            value: String(size),
            label: String(size),
          }))}
          onChange={handlePageSizeChange}
          className="restaurant-list-pagination-page-size-select"
        />
        <span>por página</span>
      </div>
    </nav>
  );
}
