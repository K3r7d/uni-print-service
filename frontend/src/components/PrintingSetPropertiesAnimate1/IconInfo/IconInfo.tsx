import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse200Icon } from './Ellipse200Icon.js';
import classes from './IconInfo.module.css';
import { SubtractIcon } from './SubtractIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 212:3433 */
export const IconInfo: FC<Props> = memo(function IconInfo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.subtract}>
        <SubtractIcon className={classes.icon} />
      </div>
      <div className={classes.ellipse200}>
        <Ellipse200Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle34624333}></div>
    </div>
  );
});
