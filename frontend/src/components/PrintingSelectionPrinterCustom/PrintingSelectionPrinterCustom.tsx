import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse97Icon, Ellipse196Icon, VectorIcon } from '../PrintingUploadCustomer/other';
import { Group6Icon } from './Group6Icon.js';
import { Group297Icon } from './Group297Icon.js';
import { Group1261153353_Property1Defau } from './Group1261153353_Property1Defau/Group1261153353_Property1Defau.js';
import { Icon_TypeChevronRightSize16Col } from './Icon_TypeChevronRightSize16Col/Icon_TypeChevronRightSize16Col.js';
import classes from './PrintingSelectionPrinterCustom.module.css';

interface Props {
  className?: string;
  hide?: {
    rectangle34624334?: boolean;
  };
}
/* @figmaId 34:1275 */
export const PrintingSelectionPrinterCustom: FC<Props> = memo(function PrintingSelectionPrinterCustom(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Icon_TypeChevronRightSize16Col
        className={classes.icon2}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.ellipse196}>
        <Ellipse196Icon className={classes.icon3} />
      </div>
      <div className={classes.image5}></div>
      <div className={classes.ellipse97}>
        <Ellipse97Icon className={classes.icon4} />
      </div>
      <div className={classes._1_logobachkhoatoi2}></div>
      <div className={classes.group6}>
        <Group6Icon className={classes.icon5} />
      </div>
    </div>
  );
});
