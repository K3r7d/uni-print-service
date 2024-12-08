import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Check_Size16 } from '../Check_Size16/Check_Size16.js';
import { Component1_Property1Default } from '../Component1_Property1Default/Component1_Property1Default.js';
import classes from './Group1261153353_Property1Defau.module.css';

interface Props {
  className?: string;
  classes?: {
    checkboxField?: string;
    root?: string;
  };
  hide?: {
    rectangle34624334?: boolean;
  };
  text?: {
    userName?: ReactNode;
    lastLogin?: ReactNode;
    lastLogin2?: ReactNode;
    lastLogin3?: ReactNode;
  };
}
/* @figmaId 239:3590 */
export const Group1261153353_Property1Defau: FC<Props> = memo(function Group1261153353_Property1Defau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle78}></div>
      {props.text?.userName != null ? props.text?.userName : <div className={classes.userName}>PRINTER#01</div>}
      {props.text?.lastLogin != null ? props.text?.lastLogin : <div className={classes.lastLogin}>CS1 - B4 - 302</div>}
      <div className={classes.lastLogin2}>952</div>
      {props.text?.lastLogin2 != null ? props.text?.lastLogin2 : <div className={classes.lastLogin3}>0/190</div>}
      {props.text?.lastLogin3 != null ? props.text?.lastLogin3 : <div className={classes.lastLogin4}>01/01/2021</div>}
      <Component1_Property1Default
        className={classes.component1}
        hide={{
          rectangle34624334: props.hide?.rectangle34624334,
        }}
      />
      <div className={`${props.classes?.checkboxField || ''} ${classes.checkboxField}`}>
        <div className={classes.checkboxAndLabel}>
          <div className={classes.checkbox}></div>
        </div>
      </div>
    </div>
  );
});
