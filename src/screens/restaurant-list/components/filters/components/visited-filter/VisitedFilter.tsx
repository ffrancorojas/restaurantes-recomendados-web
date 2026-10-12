import { Switch } from '@components/switch';
import { styles } from './visitedFilter.styles';
import type { VisitedFilterProps } from './visitedFilter.types';
export function VisitedFilter({ value, onChange }: VisitedFilterProps) {
  return (
    <div style={styles.container}>
      <Switch
        label="Solo visitados"
        checked={value}
        onChange={({ checked }) => onChange({ checked })}
      />
    </div>
  );
}
