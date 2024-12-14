import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon} from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import "./user.css";


interface Log {
  document_id: string;
  file_name: string;
  printer_name: string;
  location: string;
  printer_status: string;
}

interface LogInfoProps {
  searchReal: string;
  searchResult: Log[];
  setSearch: (value: string) => void;
}

const History: React.FC<LogInfoProps> = ({ searchReal, searchResult = [], setSearch }) => {
  const [page, setPage] = useState<number>(1);
  //calculate pages
  const pageNums = Math.ceil(searchResult.length / 10);
  // Paginated results
  const pageResult = searchResult?.slice((page - 1) * 10, page * 10);

  //user table
  const {username, pageNumber, money, setMoney , setPageNumber} = useUserContext();
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
  ///



  return (
    <div className='root'>


    <div className="rectangle">
    <div className='Lichsuin'>
      Lịch sử in
    </div>
      <div className='search_section'>
      <input 
        type="text"
        placeholder='Search by ...'
        className='search_bar'
        value={searchReal}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <table className = 'log_table'>
      <thead>
        <tr>
          <th>No</th>
          <th>file_name</th>
          <th>printer_name</th>
          <th>location</th>
          <th>printer_status</th>
        </tr>
      </thead>
      <tbody>
        {pageResult.map((log, index)=>(
          <tr key = {log.document_id}>
            <td>{(page - 1) * 10 + index + 1}</td>
            <td>{log.document_id}</td>
            <td>{log.file_name}</td>
            <td>{log.printer_name}</td>
            <td>{log.location}</td>
            <td>{log.printer_status}</td>
          </tr>
        ))}
      </tbody>
      </table>
      <div className='pagination'>
        <button
          className='pagination_button'
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {Array.from({ length: pageNums }, (_, i) => i + 1).map((each) => (
          <button
            key={each}
            className={`$''pagination_button' ${
              page === each ? 'active' : ""
            }`}
            onClick={() => setPage(each)}
          >
            {each}
          </button>
        ))}
        <button
          className='pagination_button'
          onClick={() => setPage(page + 1)}
          disabled={page === pageNums}
        >
          Next
        </button>
      </div>

      
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
    </div>

    



    

    </div>
  );
};

export default History;