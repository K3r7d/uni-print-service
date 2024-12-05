import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon, Newspaper, GraduationCap, FileUser, Menu, HandCoins, PiggyBank, Logs } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import "./user.css";

const History: React.FC = () => {
  const { username, pageNumber, money, setMoney , setPageNumber} = useUserContext();
  const [isVisible, setVisible] = useState<Boolean>(false);
  const [putMoney, setputMoney] = useState<String>(""); 

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

  return (
    <div className='root'>

    <div className='Lichsuin'>
      Lịch sử in
    </div>


    <div className="rectangle">
     


    </div>



      {/* USER LOGO HERE */}
      <Menu
        style={
          {
            position: "absolute",
            left: "1800px",
            top: "100px",
            cursor: "pointer",
          }
        }
        onClick={clickVisible} />
      <animated.div
        className='userTemplateTable'
        style={{
          ...analog_animate,
          overflow: "hidden",
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >

        <button className='col' style={{ top: "30px" }} onClick={() => { navigate(`/user/${username}`) }}>

          <InfoIcon ></InfoIcon>
          <div className='colfont'> Trang chủ
          </div>
        </button>


        <button className='col' style={{ top: "100px" }} onClick={() => { navigate(`/user/${username}/info`) }}>

          <Logs /> 
          <div className='colfont'> Thông tin người dùng </div>
        </button>

        <button
          className='col'
          style={{ top: "170px" }}
          onClick={() => { navigate("/") }}
        >
          <LogOutIcon />
          <div className='colfont'> Đăng xuất
          </div>
        </button>

      </animated.div>

      {/* OUT OF USER LOGO */}

    </div>
  );
};

export default History;