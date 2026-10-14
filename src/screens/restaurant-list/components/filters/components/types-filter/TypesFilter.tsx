import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Button } from '@components/ui/buttons';
import { Icon } from '@components/ui/icons';
import type { RestaurantType } from '@contracts';
import './typesFilter.styles.scss';
import type { FiltersTypesChangeParams } from '../../filters.types';

type TypesFilterProps = {
  value: RestaurantType[];
  options: readonly RestaurantType[];
  onChange: (params: FiltersTypesChangeParams) => void;
};

export function TypesFilter({ value, options, onChange }: TypesFilterProps) {
  return (
    <Accordion disableGutters elevation={0} className="background-surface radius-md margin-bottom-regular border-default types-filter-accordion">
      <AccordionSummary
        expandIcon={<Icon name="chevronDown" size={16} />}
        className="flex filter-row text-color justify-content-space-between padding-inline-small font-semibold font-size-sm types-filter-summary"
      >
        {value.length ? `Tipos de comida (${value.length})` : 'Todos los tipos de comida'}
      </AccordionSummary>
      <AccordionDetails className="flex flex-wrap gap-small types-filter-options">
        {value.length > 0 && (
        <Button.Text
            leftText="Limpiar selección · Mostrar todos"
            variant="ghost"
            type="button"
            onClick={() => onChange({ value: [] })}
            className="font-size-xs justify-content-flex-start types-filter-clear"
          />
        )}
        {options.map((type) => {
          const selected = value.includes(type);
          return (
            <FormControlLabel
              key={type}
              label={type}
              className="min-width-zero text-muted font-size-sm types-filter-option"
              control={
                <Checkbox
                  size="small"
                  checked={selected}
                  icon={<Icon name="checkbox" size={18} />}
                  checkedIcon={<Icon name="checkboxChecked" size={18} />}
                  className="text-border"
                  onChange={() =>
                    onChange({
                      value: selected ? value.filter((item) => item !== type) : [...value, type],
                    })
                  }
                />
              }
            />
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}
