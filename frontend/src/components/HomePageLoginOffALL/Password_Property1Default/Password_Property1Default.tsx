import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Password_Property1Default.module.css';
import { XIconIcon } from './XIconIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:20 */
export const Password_Property1Default: FC<Props> = memo(function Password_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.unnamed}>••••••••</div>
      <div className={classes.xIcon}>
        <XIconIcon className={classes.icon} />
      </div>
    </div>
  );
});
