import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HoverDropDown_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    state?: string;
    root?: string;
  };
}
/* @figmaId 352:4596 */
export const HoverDropDown_Property1Default: FC<Props> = memo(function HoverDropDown_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.state || ''} ${classes.state}`}>
        <div className={classes.rectangle34624331}></div>
      </div>
    </div>
  );
});
