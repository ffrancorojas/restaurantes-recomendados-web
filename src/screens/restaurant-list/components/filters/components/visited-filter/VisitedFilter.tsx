import { FormControlLabel } from '@mui/material';
import { Switch } from '@components/ui/controls/standalone/switch';
import { styles } from './visitedFilter.styles';
import type { VisitedFilterProps } from './visitedFilter.types';
export function VisitedFilter({ value, onChange }: VisitedFilterProps) {
  return (
    <div style={styles.container}>
      <FormControlLabel
        label="Solo visitados"
        labelPlacement="start"
        control={<Switch checked={value} onChange={({ checked }) => onChange({ checked })} />}
      />
    </div>
  );
}
