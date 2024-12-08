import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Size48Icon } from './Size48Icon.js';
import classes from './ZoomIn_Size48.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 673:3916 */
export const ZoomIn_Size48: FC<Props> = memo(function ZoomIn_Size48(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Size48Icon className={classes.icon2} />}</div>
    </div>
  );
});
