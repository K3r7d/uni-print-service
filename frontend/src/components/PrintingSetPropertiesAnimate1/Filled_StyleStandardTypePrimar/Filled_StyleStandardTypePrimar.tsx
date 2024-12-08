import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MasterButton_SizeMedium } from '../MasterButton_SizeMedium/MasterButton_SizeMedium.js';
import classes from './Filled_StyleStandardTypePrimar.module.css';

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
/* @figmaId 146:3103 */
export const Filled_StyleStandardTypePrimar: FC<Props> = memo(function Filled_StyleStandardTypePrimar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MasterButton_SizeMedium
        className={classes.masterButton}
        hide={{
          info: true,
          chevron_right: true,
        }}
        text={{
          button: props.text?.button,
        }}
      />
    </div>
  );
});
