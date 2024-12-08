import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    rectangle34624334?: boolean;
  };
}
/* @figmaId 239:3524 */
export const Component1_Property1Default: FC<Props> = memo(function Component1_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.rectangle34624334 && <div className={classes.rectangle34624334}></div>}
      <div className={classes.rEADY}>READY</div>
    </div>
  );
});
