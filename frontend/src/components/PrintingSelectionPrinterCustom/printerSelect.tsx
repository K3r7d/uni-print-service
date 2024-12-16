import { memo } from 'react';
import type { FC } from 'react';

import { useState } from 'react';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon} from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';

import { Ellipse97Icon, Ellipse196Icon, VectorIcon } from '../Upload/other';
import { Group6Icon } from './Group6Icon.js';
import { Group297Icon } from './Group297Icon.js';
import { PrinterInfo } from './printerInfo/printerInfo.js';
import { Icon_TypeChevronRightSize16Col } from './Icon_TypeChevronRightSize16Col/Icon_TypeChevronRightSize16Col.js';
import classes from './PrintingSelectionPrinterCustom.module.css';


interface Props {
  className?: string;
  hide?: {
    info?: boolean;
    chevron_right?: boolean;
    info2?: boolean;
    chevron_right2?: boolean;
  };
}

export const PrinterSelect: FC<Props> = memo(function PrintingSetPropertiesAnimate1(props = {}) {
  //user table
  const {username, pageNumber, money, setMoney , setPageNumber} = useUserContext();
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility
  const logo_animate = useSpring(
    {
      from: { left: 1638 },
      to: { left: isVisible ? 1736 : 1638 },
      config: { duration: 100, tension: 250, friction: 30, ease: "easeInOut" },

    }
  )
  const navigate = useNavigate();

  const analog_animate = useSpring({
    from: { height: 0, opacity: 0, transform: 'translateY(-100%)' }, // Start above the screen
    to: {
      height: isVisible ? 245 : 0,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(100%)' : 'translateY(-100%)', // Move down to the original position
    },
    config: { tension: 150, friction: 20 },
  });

  const clickVisible = () => {
    setVisible(!isVisible)
  }
  const handleChoosePrinter = () => {
    setIsPopupVisible(true); // Show the popup when button is clicked

    // Simulate a delay for the request (e.g., API call)
    setTimeout(() => {
      setIsPopupVisible(false); // Hide the popup after 8 seconds
  
      // Show success message and navigate
      alert('Request sent successfully'); // This is just an example. You can replace it with a custom message UI.
      
      // Navigate to the user info page after success
      navigate(`/user/${username}/`);
    },2000);
  };
  

  //
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      
      <div className={classes._1_logobachkhoatoi2}></div>
      
      <div className={classes.ellipse196}>
        <Ellipse196Icon className={classes.icon3} />
      </div>
      <div className={classes.image5}></div>
      <div className={classes.ellipse97}>
        <Ellipse97Icon className={classes.icon4} />
      </div>
      {/* <div className={classes._1_logobachkhoatoi2}></div> */}
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
        <PrinterInfo
          className={classes.group1261153353}
          classes={{ checkboxField: classes.checkboxField }}
          hide={{
            rectangle34624334: true,
          }}
          title={true}
          text={{
            userName: <div className={classes.userName}>PrinterID</div>,
            location: <div className={classes.lastLogin}>Location</div>,
            numPage: <div className={classes.lastLogin2}>No of page</div>,
            lastmodify: <div className={classes.lastLogin3}>Last-Modify</div>,
          }}
        />
        <div className={classes.lastLogin4}>isBusy</div>
        <PrinterInfo className={classes.group12611533532} classes={{ checkboxField: classes.checkboxField2 }} />
        <PrinterInfo className={classes.group12611533533} classes={{ checkboxField: classes.checkboxField3 }} />
        <PrinterInfo className={classes.group1261153354} classes={{ checkboxField: classes.checkboxField4 }} />
        <PrinterInfo className={classes.group1261153355} classes={{ checkboxField: classes.checkboxField5 }} />
        <PrinterInfo className={classes.group1261153356} classes={{ checkboxField: classes.checkboxField6 }} />
        <PrinterInfo className={classes.group1261153357} classes={{ checkboxField: classes.checkboxField7 }} />
        <PrinterInfo className={classes.group1261153358} classes={{ checkboxField: classes.checkboxField8 }} />
        <div className={classes.frame531}></div>
      </div>
      <div className={classes.rectangle34624340}></div>
      <button className={classes.ChoosePrinter} onClick={handleChoosePrinter}>
        Choose Printer
      </button>
      <div className={classes.rectangle346243402}></div>
      <div className={classes.cancel}>Cancel</div>
        





       

      
      {/* User table */}
      <animated.div
        className='userLogo'
        style={logo_animate}
        onClick={clickVisible}
      />
      <div >

        {isVisible ? <ChevronDown className='userTemplateVisible' /> : <ChevronUp className='userTemplateVisible' />}

      </div>

      <animated.div
        className='userTemplateTable'
        style={{
          ...analog_animate,
          overflow: "hidden",
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div className='userTemplateLogo'></div>
        <div className='userTemplateTypo'>{username}</div>
        <div style={
          {
            position: 'absolute',
            width: '278px',
            height: '1px',
            top: '10px',
            left: '10px',
            background: '#E5E7EB',
          }} />

        <div className='gmailTemplateTypo'> minh.nguyendangchill@hcmut.edu.vn</div>


        <button className='col' style={{top: "120px"}} onClick = {()=>{navigate(`/user/${username}/info`)}}>

          <InfoIcon ></InfoIcon>
          <div className='colfont'> Hồ sơ của bạn
          </div>

        </button>

        <button
          className='col'
          style={{top: "170px"}}
          onClick={()=>{navigate("/")}}
        >

          <LogOutIcon/> 
          <div className='colfont'> Đăng xuất
          </div>
        </button>

      </animated.div>

      {isPopupVisible && (
        <div className={classes.popupOverlay}>
          <div className={classes.popupRectangle}>
            <p className={classes.popupText}>Request is sending...</p>
          </div>
        </div>
      )}
    </div>
  );
});
