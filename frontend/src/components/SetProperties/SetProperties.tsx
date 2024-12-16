import { memo } from 'react';
import type { FC } from 'react';

import { useState } from 'react';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon} from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _100_Property1Default } from './_100_Property1Default/_100_Property1Default.js';

import { ZoomIn_Size48 } from './ZoomIn_Size48/ZoomIn_Size48.js';
import { ZoomInIcon, ZoomOutIcon } from './ZoomIcon.js';
import { ZoomOut_Size48 } from './ZoomOut_Size48/ZoomOut_Size48.js';
import { ChooseColour} from './DropDown/ChooseColour.js';
import { PaperSize } from './DropDown/PaperSize';
import { PrintSide } from './DropDown/PrintSide';
import classes from './SetProperties.module.css';
import "../UserPage/user.css";

interface Props {
  className?: string;
  hide?: {
    info?: boolean;
    chevron_right?: boolean;
    info2?: boolean;
    chevron_right2?: boolean;
  };
}

export const SetProperties: FC<Props> = memo(function PrintingSetPropertiesAnimate1(props = {}) {
  //user table
  const {username,docId, pageNumber, money, setMoney , setPageNumber} = useUserContext();
  const [isVisible, setVisible] = useState<Boolean>(false);
  const [putMoney, setputMoney] = useState<String>(""); 
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

  /* SEND PROPERTIES*/
  const [numCopies, setNumCopies] = useState<number | null>(null);
  const [selectedColour, setSelectedColour] = useState<number | null>(null); // Integer state
  const [selectedSide, setSelectedSide] = useState<number | null>(null);     // Integer state
  const [selectedPaperSize, setSelectedPaperSize] = useState<number | null>(null); // Integer state
  
  // Function to handle form submission
  const handleSubmit = async () => {
    const data = {
      copies: numCopies,
      colour: selectedColour,
      side: selectedSide,
      paperSize: selectedPaperSize,
    };
    console.log("JSON Payload:", JSON.stringify(data, null, 2));

    try {
      // Send data to backend
      const response = await fetch(`http://localhost:8000/api/print-job/${docId}/settings`, {  //API POST HERE
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        // Navigate to the next page after successful submission
        navigate("print/printer");
      } else {
        console.error("Error submitting data:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
    // navigate("/print/printer");
  };

  //
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      
      <div className={classes._1_logobachkhoatoi2}></div>
      <div className={classes.setProperties}>
        <div className={classes.left}>
          <div className={classes.titleSection}>Cài đặt lựa chọn in</div>
          <div className={classes.desc}>
            <p className={classes.labelWrapper}>Điều chỉnh thuộc tính tệp trước khi in</p>
          </div>
        </div>
        
        {/*Buttons*/}
        <div className={classes.buttonsHere}>
           <div className={classes.WhiteBox}>
            <button className={classes.Cancle}>Hủy bỏ</button>
          </div>
          {/*send json*/}
          <div className={classes.BlueBox}>
            <button className={classes.Next}  onClick={handleSubmit}>Tiếp</button>
          </div>
        </div>


        {/* take copies (int) */}
        <div className={classes.soBanIn}>Số bản in:</div>
        <div className={classes.numCopiesBox}>
          <input
            type="number"
            className={classes.numInput}
            min="1"
            step="1"
            value={numCopies ?? ""}
            onChange={(e) => setNumCopies(Number(e.target.value))}
            placeholder="Nhập số bản in"
          />
        </div>

        <div className={classes.menu1}>
          <ChooseColour
            className={classes.hoverDropDown}
            selectedValue={selectedColour}
            setSelectedValue={setSelectedColour}
          />
        </div>

       <div className={classes.menu2}>
          <PrintSide 
            className={classes.hoverDropDown}
            selectedValue={selectedSide}
            setSelectedValue={setSelectedSide}/>
        </div>
  
        <div className={classes.menu3}>
          <PaperSize
            className={classes.hoverDropDown}
            selectedValue={selectedPaperSize}
            setSelectedValue={setSelectedPaperSize} />
        </div>

        <div className={classes.viewBoxIn}></div>
        <div className={classes.viewBoxOut}></div>

        <ZoomIn_Size48
          className={classes.zoomIn}
          swap={{
            icon: <ZoomInIcon className={classes.icon} />,
          }}
        />
        <ZoomOut_Size48
          className={classes.zoomOut}
          swap={{
            icon: <ZoomOutIcon className={classes.icon} />,
          }}
        />
        <_100_Property1Default className={classes._100} />
        <div className={classes._1002}>100%</div>
      </div>
      

      
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
    </div>
    
   

  );
});
