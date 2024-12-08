import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Check_Size16.module.css';
import { Size16Icon } from './Size16Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 32:862 */
export const Check_Size16: FC<Props> = memo(function Check_Size16(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <Size16Icon className={classes.icon2} />
      </div>
    </div>
  );
});
