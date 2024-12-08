import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icon_TypeChevronRightSize16Col } from '../Icon_TypeChevronRightSize16Col/Icon_TypeChevronRightSize16Col.js';
import classes from './Down.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 182:3068 */
export const Down: FC<Props> = memo(function Down(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Icon_TypeChevronRightSize16Col
        className={classes.icon2}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
