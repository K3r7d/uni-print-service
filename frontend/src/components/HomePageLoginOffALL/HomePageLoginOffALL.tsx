import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackgroundIcon } from './BackgroundIcon.js';
import { EnterName_Property1Default } from './EnterName_Property1Default/EnterName_Property1Default.js';
import classes from './HomePageLoginOffALL.module.css';
import { Icon } from './Icon.js';
import { Password_Property1Default } from './Password_Property1Default/Password_Property1Default.js';

interface Props {
  className?: string;
}
/* @figmaId 1:50 */
export const HomePageLoginOffALL: FC<Props> = memo(function HomePageLoginOffALL(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.unnamed}>
        <div className={classes.background}>
          <BackgroundIcon className={classes.icon} />
        </div>
        <div className={classes.rectangle4}></div>
        <div className={classes.signIn}>Sign In</div>
        <div className={classes.forgotPassword}>Forgot Password ?</div>
        <div className={classes.icon2}>
          <Icon className={classes.icon3} />
        </div>
        <div className={classes.english}>English</div>
        <div className={classes.line3}></div>
        <div className={classes.signIn2}>Sign in</div>
        <div className={classes.signInSPSOHCMUTPrintSystem}>Sign in SPSO HCMUT Print System</div>
        <div className={classes.ifYouDonTHaveAnAccountYouCanCo}>
          if you don’t have an account you can Contact with the Student Office
        </div>
        <EnterName_Property1Default
          className={classes.enterName}
          text={{
            enterEmail: <div className={classes.enterEmail}>Enter Email</div>,
          }}
        />
        <Password_Property1Default className={classes.password} />
        <div className={classes._1_logobachkhoatoi2}></div>
      </div>
    </div>
  );
});
