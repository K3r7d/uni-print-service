import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EnterName_Property1Default.module.css';
import { XIconIcon } from './XIconIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    enterEmail?: ReactNode;
  };
}
/* @figmaId 1:3 */
export const EnterName_Property1Default: FC<Props> = memo(function EnterName_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      {props.text?.enterEmail != null ? props.text?.enterEmail : <div className={classes.enterEmail}>Enter Email</div>}
      <div className={classes.xIcon}>
        <XIconIcon className={classes.icon} />
      </div>
    </div>
  );
});
