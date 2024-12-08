import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { HoverDropDown_Property1Default } from '../HoverDropDown_Property1Default/HoverDropDown_Property1Default.js';
import classes from './MeniuSelectPages_optionDefault.module.css';
import { Vector2Icon } from './Vector2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 352:4674 */
export const MeniuSelectPages_optionDefault: FC<Props> = memo(function MeniuSelectPages_optionDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <HoverDropDown_Property1Default className={classes.hoverDropDown} />
      <div className={classes.desc}>
        <p className={classes.labelWrapper}>Chọn các trang để in</p>
      </div>
      <div className={classes.trangIn}>Trang in</div>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>
    </div>
  );
});
