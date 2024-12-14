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
      <div className={classes.pRINTERLIST}>PRINTER LIST</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.group297}>
        <Group297Icon className={classes.icon6} />
      </div>
      <div className={classes.searchByPrintingIDLocation}>Search by PrintingID, Location</div>
      <div className={classes.frame532}>
        <Group1261153353_Property1Defau
          className={classes.group1261153353}
          classes={{ checkboxField: classes.checkboxField }}
          hide={{
            rectangle34624334: true,
          }}
          text={{
            userName: <div className={classes.userName}>PrinterID</div>,
            lastLogin: <div className={classes.lastLogin}>Location</div>,
            lastLogin2: <div className={classes.lastLogin2}>No of page </div>,
            lastLogin3: <div className={classes.lastLogin3}>Last-Modify</div>,
          }}
        />
        <div className={classes.lastLogin4}>isBusy</div>
        <Group1261153353_Property1Defau
          className={classes.group12611533532}
          classes={{ checkboxField: classes.checkboxField2 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group12611533533}
          classes={{ checkboxField: classes.checkboxField3 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group1261153354}
          classes={{ checkboxField: classes.checkboxField4 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group1261153355}
          classes={{ checkboxField: classes.checkboxField5 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group1261153356}
          classes={{ checkboxField: classes.checkboxField6 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group1261153357}
          classes={{ checkboxField: classes.checkboxField7 }}
        />
        <Group1261153353_Property1Defau
          className={classes.group1261153358}
          classes={{ checkboxField: classes.checkboxField8 }}
        />
        <div className={classes.frame531}></div>
      </div>
      <div className={classes.rectangle34624340}></div>
      <div className={classes.ChoosePrinter}>+ Choose Printer</div>
      <div className={classes.rectangle346243402}></div>
      <div className={classes.cancel}>Cancel</div>
    </div>
  );
});
