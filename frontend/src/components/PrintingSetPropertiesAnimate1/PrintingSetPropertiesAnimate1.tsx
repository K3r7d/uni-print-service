import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse97Icon, Ellipse196Icon} from '../PrintingUploadCustomer/other';
import { _100_Property1Default } from './_100_Property1Default/_100_Property1Default.js';
import { Down } from './Down/Down.js';
import { Filled_StyleStandardTypePrimar } from './Filled_StyleStandardTypePrimar/Filled_StyleStandardTypePrimar.js';
import { HoverDropDown_Property1Default } from './HoverDropDown_Property1Default/HoverDropDown_Property1Default.js';
import { IconInfo } from './IconInfo/IconInfo.js';
import { MeniuSelectPages_optionDefault } from './MeniuSelectPages_optionDefault/MeniuSelectPages_optionDefault.js';
import { Outline_StyleStandardTypeNeutr } from './Outline_StyleStandardTypeNeutr/Outline_StyleStandardTypeNeutr.js';
import classes from './PrintingSetPropertiesAnimate1.module.css';
import { Vector2Icon } from './Vector2Icon.js';
import { ZoomIn_Size48 } from './ZoomIn_Size48/ZoomIn_Size48.js';
import { ZoomInIcon } from './ZoomInIcon.js';
import { ZoomOut_Size48 } from './ZoomOut_Size48/ZoomOut_Size48.js';
import { ZoomOutIcon } from './ZoomOutIcon.js';

interface Props {
  className?: string;
  hide?: {
    info?: boolean;
    chevron_right?: boolean;
    info2?: boolean;
    chevron_right2?: boolean;
  };
}
/* @figmaId 165:3014 */
export const PrintingSetPropertiesAnimate1: FC<Props> = memo(function PrintingSetPropertiesAnimate1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Down />
      <div className={classes.ellipse196}>
        <Ellipse196Icon className={classes.icon3} />
      </div>
      <div className={classes.image5}></div>
      <div className={classes.ellipse97}>
        <Ellipse97Icon className={classes.icon4} />
      </div>
      <div className={classes._1_logobachkhoatoi1}></div>
      <div className={classes.setProperties}>
        <div className={classes.left}>
          <div className={classes.titleSection}>Cài đặt lựa chọn in</div>
          <div className={classes.desc}>
            <p className={classes.labelWrapper}>Điều chỉnh thuộc tính tệp trước khi in</p>
          </div>
        </div>
        <div className={classes.buttonsHere}>
          <Outline_StyleStandardTypeNeutr
            text={{
              button: <div className={classes.button}>Hủy bỏ</div>,
            }}
          />
          <Filled_StyleStandardTypePrimar
            text={{
              button: <div className={classes.button2}>Tiếp</div>,
            }}
          />
        </div>
        <div className={classes.trang}>Trang:</div>
        <div className={classes.soBanIn}>Số bản in:</div>
        <div className={classes.indexOfPrintPages}></div>
        <div className={classes.indexOfPrintPages2}></div>
        <IconInfo />
        <div className={classes.meniuSelectPages2}>
          <HoverDropDown_Property1Default className={classes.hoverDropDown} classes={{ state: classes.state }} />
          <div className={classes.desc2}>
            <p className={classes.labelWrapper2}>In một mặt hoặc hai mặt</p>
          </div>
          <div className={classes.tuyChonIn}>Tùy chọn in</div>
          <div className={classes.vector2}>
            <Vector2Icon className={classes.icon5} />
          </div>
        </div>
        <div className={classes.meniuSelectPages3}>
          <HoverDropDown_Property1Default className={classes.hoverDropDown2} classes={{ state: classes.state2 }} />
          <div className={classes.desc3}>
            <p className={classes.labelWrapper3}>Chọn khổ giấy in</p>
          </div>
          <div className={classes.khoGiay}>Khổ giấy</div>
          <div className={classes.vector22}>
            <Vector2Icon className={classes.icon6} />
          </div>
        </div>
        <div className={classes.meniuSelectPages4}>
          <HoverDropDown_Property1Default className={classes.hoverDropDown3} classes={{ state: classes.state3 }} />
          <div className={classes.desc4}>
            <p className={classes.labelWrapper4}>Số lượng trang in trên một mặt giấy</p>
          </div>
          <div className={classes.soTrangTrenMotTo}>Số trang trên một tờ</div>
          <div className={classes.vector23}>
            <Vector2Icon className={classes.icon7} />
          </div>
        </div>
        <div className={classes.meniuSelectPages5}>
          <HoverDropDown_Property1Default className={classes.hoverDropDown4} classes={{ state: classes.state4 }} />
          <div className={classes.desc5}>
            <p className={classes.labelWrapper5}>Lề trên, dưới, trái, phải</p>
          </div>
          <div className={classes.caiAtLe}>Cài đặt lề</div>
          <div className={classes.vector24}>
            <Vector2Icon className={classes.icon8} />
          </div>
        </div>
        <div className={classes.rectangle34624341}></div>
        <div className={classes.rectangle34624342}></div>
        <ZoomIn_Size48
          className={classes.zoomIn}
          swap={{
            icon: <ZoomInIcon className={classes.icon} />,
          }}
        />
        <ZoomOut_Size48
          className={classes.zoomOut}
          swap={{
            icon: <ZoomOutIcon className={classes.icon2} />,
          }}
        />
        <_100_Property1Default className={classes._100} />
        <div className={classes._1002}>100%</div>
      </div>
      <MeniuSelectPages_optionDefault className={classes.meniuSelectPages} />
    </div>
  );
});
