import { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Component1_Property1Default } from '../Component1_Property1Default/Component1_Property1Default.js';
import classes from './printerInfo.module.css';

interface Props {
  className?: string;
  classes?: {
    checkboxField?: string;
    root?: string;
  };
  hide?: {
    rectangle34624334?: boolean;
  };
  title?: boolean;
  text?: {
    userName?: ReactNode;
    location?: ReactNode;
    numPage?: ReactNode;
    lastmodify?: ReactNode;
  };
}
/* @figmaId 239:3590 */
export const PrinterInfo: FC<Props> = memo(function Group1261153353_Property1Defau(props = {}) {
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox

  const handleCheckboxToggle = () => {
    setIsChecked((prev) => !prev); // Toggle the checked state
  };

  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle78}></div>
      {props.text?.userName != null ? props.text?.userName : <div className={classes.userName}>PRINTER#01</div>}
      {props.text?.location != null ? props.text?.location : <div className={classes.location}>CS1 - B4 - 302</div>}
      {props.text?.numPage != null ? props.text?.numPage : <div className={classes.numPage}>0/190</div>}
      {props.text?.lastmodify != null ? props.text?.lastmodify : <div className={classes.lastmodify}>01/01/2021</div>}
      <Component1_Property1Default
        className={classes.component1}
        hide={{
          rectangle34624334: props.hide?.rectangle34624334,
        }}
      />
      {!props.title && (
        <div className={`${props.classes?.checkboxField || ''} ${classes.checkboxField}`}>
          <div className={classes.checkboxAndLabel}>
            <input
              type="checkbox"
              className={classes.checkbox}
              checked={isChecked}
              onChange={handleCheckboxToggle} // Handle toggle
            />
            <label onClick={handleCheckboxToggle} style={{ cursor: 'pointer' }}>
              Select
            </label>
          </div>
        </div>
      )}
    </div>
  );
});
