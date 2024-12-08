import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Chevron_right_StyleOutlined } from '../Chevron_right_StyleOutlined/Chevron_right_StyleOutlined.js';
import { Info_StyleOutlined } from '../Info_StyleOutlined/Info_StyleOutlined.js';
import classes from './MasterOutlineButton_SizeMedium.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    info?: boolean;
    chevron_right?: boolean;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 146:2573 */
export const MasterOutlineButton_SizeMedium: FC<Props> = memo(function MasterOutlineButton_SizeMedium(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.info && (
        <Info_StyleOutlined
          className={classes.info}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      {!props.hide?.chevron_right && (
        <Chevron_right_StyleOutlined
          className={classes.chevron_right}
          swap={{
            vector: <VectorIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
