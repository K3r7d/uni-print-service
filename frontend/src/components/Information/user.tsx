import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon, Newspaper, GraduationCap, FileUser, Menu, HandCoins } from "lucide-react";
import { useSpring, animated } from '@react-spring/web'; 
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import "./user.css"

const Information: React.FC = () => {
  const { username } = useUserContext();
  const [isVisible, setVisible] = useState<Boolean>(false);
  const {pageNumber} = useUserContext(); 

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
  return (
    <div className='root'>

      {/* BACKGROUND */}
      <div className='circle'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>
      <div className='BKU'> </div>
      <div className='Trangchu'> THÔNG TIN CÁ NHÂN </div>
      <div className='chaomungUser'>Chào mừng, {username} </div>


      {/* USER INFOMATION */}
      <div className='userTables'>
        <div className='userTableLogo'></div>
        <div className='userTablefont'>{username}</div>
        <div className='gmailTablefont'>minh.nguyendangchill@hcmut.edu.vn</div> 
        <div 
          style={
            {
                position: "absolute", 
                width: "100%", 
                height: "1px", 
                top: "100px", 
                background: "#E5E7EB",
            }
          }
        />

    <div className='tableCol' style={{top: "120px"}}> 
    <FileUser />  
            <div className='tableColFont'> MSSV: </div>
            <div className='tableColFontnumber'> 2252481 </div>
        </div>
            
        <div className='tableCol' style={{top: "180px"}}> 
        <Newspaper />  
            <div className='tableColFont'> Luong giay: </div>
            <div className='tableColFontnumber'> {pageNumber} </div>
        </div>

        <div className='tableCol' style={{top: "240px"}}> 
        <GraduationCap />
            <div className='tableColFont'> Khoa: </div>
            <div className='tableColFontnumber'> Khoa học và Kỹ thuật Máy tính </div>
        </div>
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
      onClick = {clickVisible} />
      <animated.div
        className='userTemplateTable'
        style={{
          ...analog_animate,
          overflow: "hidden",
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
    
        <button className='col' style={{top: "30px"}} onClick = {()=>{navigate(`/user/${username}`)}}>

          <InfoIcon ></InfoIcon>
          <div className='colfont'> Trang chủ
          </div>
        </button>


        <button className='col' style={{top: "100px"}} onClick = {()=>{navigate(`/user/${username}/payment`)}}>

        <HandCoins />
          <div className='colfont'> Thanh toán </div>
        </button>

        <button
          className='col'
          style={{top: "170px"}}
          onClick={()=>{navigate(`/`)}}
        >
          <LogOutIcon/> 
          <div className='colfont'> Đăng xuất
          </div>
        </button>

      </animated.div>

        {/* OUT OF USER LOGO */}

      </div> 
  );
};

export default Information;