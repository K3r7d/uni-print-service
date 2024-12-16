import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon, Newspaper, GraduationCap, FileUser, Menu, HandCoins, PiggyBank, Logs } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import "./user.css";

const Payment: React.FC = () => {
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

  const buyAction = ()  => {
    let tmp = 0

    while (Number(putMoney) > money + tmp){
        const isConfirmed = window.confirm("Bạn hiện không đủ tiền trong tài khoản, bạn có muốn nạp thêm không ?");

        if  (isConfirmed){
          let get = prompt(`xin hãy nạp thêm tiền để sử dụng dịch vụ này \n Hiện tại bạn đang có ${money + tmp} Vui lòng nhập số tiền`)
          tmp += Number(get)
          console.log(Number(get))
        }
        else{ 
          break 
        }

    } 
    setMoney(money + tmp - Number(putMoney))
    setPageNumber(pageNumber + Number(putMoney))

  }
  return (
    <div className='root'>

      {/* BACKGROUND */}
      <div className='circle'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>


      {/* PAYBOX
      <div className='paybox'>
        <div style={
          {
            position: 'absolute', 

          } 
        }></div>
        <div className='rectangle2'>
          <div className= 'enterMoney'>
            <input
              type="number"
              placeholder="Enter Money" 
              onChange={(e) => setputMoney(e.target.value)}
            />
          </div>
        </div>
        <div className="rectangle4">
          <div className='sure'> Buy paper</div>

        </div>

      </div> */}


      {/* USER INFOMATION */}
      <div className='userTable'>
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

        <div className='tableCol' style={{ top: "120px" }}>
          <FileUser />
          <div className='tableColFont'> MSSV: </div>
          <div className='tableColFontnumber'> 2252481 </div>
        </div>

        <div className='tableCol' style={{ top: "180px" }}>
          <Newspaper />
          <div className='tableColFont'> Lượng giấy: </div>
          <div className='tableColFontnumber'> {pageNumber} </div>
        </div>

        <div className='tableCol' style={{ top: "240px" }}>
          <GraduationCap />
          <div className='tableColFont'> Khoa: </div>
          <div className='tableColFontnumber'> Khoa học và Kỹ thuật Máy tính </div>
        </div>

        <div className='tableCol' style={{ top: "300px" }}>
          <PiggyBank />
          <div className='tableColFont'> Số tiền: </div>
          <div className='tableColFontnumber'> {money}</div>
        </div>
      </div>

          {/* PAYBOX */}
      <div className='paybox'>
        <div style={
          {
            position: 'absolute', 

          } 
        }></div>
        <div className='rectangle2'>
          <div className= 'enterMoney'>
            <input
              type="number"
              placeholder="Điền số lượng giấy bạn muốn mua" 
              onChange={(e) => setputMoney(e.target.value)}
            />
          </div>
        </div>
        <div className="rectangle4">
          <button className='sure' onClick = {buyAction}> Mua giấy</button>


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

export default Payment;