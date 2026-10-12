import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import type { CSSProperties } from 'react';
import { Button } from '@components/buttons';
import type { RestaurantType } from '@contracts';
import { styles } from './typesFilter.styles';
import type { FiltersTypesChangeParams } from '../../filters.types';

type TypesFilterProps = {
  value: RestaurantType[];
  options: readonly RestaurantType[];
  onChange: (params: FiltersTypesChangeParams) => void;
};

export function TypesFilter({ value, options, onChange }: TypesFilterProps) {
  return (
    <Accordion disableGutters elevation={0} sx={styles.accordion}>
      <AccordionSummary expandIcon={<span aria-hidden="true">▾</span>} sx={styles.summary}>
        {value.length ? `Tipos de comida (${value.length})` : 'Todos los tipos de comida'}
      </AccordionSummary>
      <AccordionDetails sx={styles.options}>
        {value.length > 0 && (
          <Button.Text
            leftText="Limpiar selección · Mostrar todos"
            variant="ghost"
            type="button"
            onClick={() => onChange({ value: [] })}
            style={styles.clear as CSSProperties}
          />
        )}
        {options.map((type) => {
          const selected = value.includes(type);
          return (
            <FormControlLabel
              key={type}
              label={type}
              sx={styles.option}
              control={
                <Checkbox
                  size="small"
                  checked={selected}
                  sx={styles.checkbox}
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
