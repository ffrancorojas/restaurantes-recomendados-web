import { useState } from 'react';
import classNames from 'classnames';
import { Menu, MenuItem } from '@mui/material';
import { Button } from '../Button';
import { Icon } from '@components/ui/icons';
import type { OverlayButtonProps } from './overlayButton.types';
import './overlayButton.styles.scss';

export function OverlayButton({
  id,
  iconName,
  iconSize = 22,
  name,
  disabled = false,
  className,
  menuClassName,
  items,
}: OverlayButtonProps) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const close = () => setAnchor(null);

  return (
    <>
      <Button.Icon
        iconName={iconName}
        iconSize={iconSize}
        name={name}
        aria-controls={anchor ? id : undefined}
        aria-haspopup="menu"
        aria-expanded={Boolean(anchor)}
        disabled={disabled}
        onClick={(event) => setAnchor(event.currentTarget)}
        className={className}
      />
      <Menu
        id={id}
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={close}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{ paper: { className: classNames('button-overlay-menu', menuClassName) } }}
      >
        {items.map(({ text, onClick, iconName, disabled: itemDisabled }, index) => (
          <MenuItem
            key={`${text}-${index}`}
            onClick={() => {
              close();
              onClick();
            }}
            disabled={itemDisabled}
          >
            {iconName && <Icon name={iconName} size={18} className="button-overlay-menu-icon" />}
            {text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
