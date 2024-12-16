import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon } from "lucide-react";
import { useSpring, animated } from '@react-spring/web'; 
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';

import "./user.css"

const UserPage: React.FC = () => {
  const { username } = useUserContext();
  const [isVisible, setVisible] = useState<Boolean>(false);
  const logo_animate = useSpring(
    {
      from: { left: 1638 },
      to: { left: isVisible ? 1736 : 1638 },
      config: { duration: 100, tension: 250, friction: 30, ease: "easeInOut" },

    }
  )

  const navigate = useNavigate()


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

  // function vi = ()=>e{

  // }

  return (
    <div className='root'>
      <div className='circle'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>
      <div className='BKU'> </div>
      <div className='Trangchu'> TRANG CHỦ</div>
      <div className='chaomungUser'>Chào mừng, {username} </div>


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
            top: '100px',
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

      <button className='vi' onClick = {()=>navigate(`/user/${username}/payment`)}>
        <div className='viName'> Ví thanh toán </div>
        <div className='viTable'>
          <div className='viLogo'></div>
        </div>
      </button>

      <button className='in' onClick = {()=>navigate(`/printer/upload`)}>
        <div className='inName'> In Tài Liệu </div>
        <div className='inTable'>
          <div className='inLogo'></div>
        </div>
      </button>

      <button className='dan' onClick={()=>navigate("/user/help")}>
        <div className='inName'> Hướng Dẫn</div>
        <div className='danTable'>
          <div className='danLogo'></div>
        </div>
      </button>

      <button className='lichsu' onClick={()=>navigate(`/user/${username}/history`)}>
        <div className='inName'> Lịch Sử In</div>
        <div className='lichsuTable'>
          <div className='lichsuLogo'></div>
        </div>

      </button>

    </div>
  );
};

export default UserPage;

