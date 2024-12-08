import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MasterOutlineButton_SizeMedium } from '../MasterOutlineButton_SizeMedium/MasterOutlineButton_SizeMedium.js';
import classes from './Outline_StyleStandardTypeNeutr.module.css';

interface Props {
  className?: string;
  hide?: {
    info?: boolean;
    chevron_right?: boolean;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 146:2464 */
export const Outline_StyleStandardTypeNeutr: FC<Props> = memo(function Outline_StyleStandardTypeNeutr(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MasterOutlineButton_SizeMedium
        className={classes.masterOutlineButton}
        hide={{
          info: true,
          chevron_right: true,
        }}
        text={{
          button: props.text?.button || <div className={classes.button}>Button</div>,
        }}
      />
    </div>
  );
});
