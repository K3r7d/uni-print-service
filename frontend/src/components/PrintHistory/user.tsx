import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon} from "lucide-react";
import { useSpring, animated } from '@react-spring/web';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import "./user.css";


import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



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

  interface Column {
    id: keyof Person;
    label: string;
  }
  
  const columns: readonly Column[] = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email address' },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
    },
    {
      id: 'age',
      label: 'Age',
    },
  ];


  interface Person {
    name: string;
    email: string;
    age: number;
    phoneNumber: string;
  }
  
  const rows: Person[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 25,
      phoneNumber: '+1234567890',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 30,
      phoneNumber: '+1987654321',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 35,
      phoneNumber: '+1122334455',
    },
    {
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      age: 40,
      phoneNumber: '+1555666777',
    },
    {
      name: 'Sarah Lee',
      email: 'sarah.lee@example.com',
      age: 45,
      phoneNumber: '+1444333222',
    },
    {
      name: 'Michael Smith',
      email: 'michael.smith@example.com',
      age: 50,
      phoneNumber: '+1666777888',
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      age: 55,
      phoneNumber: '+1999888777',
    },
    {
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      age: 60,
      phoneNumber: '+1888777666',
    },
    {
      name: 'Lisa Brown',
      email: 'lisa.brown@example.com',
      age: 65,
      phoneNumber: '+1777666555',
    },
    {
      name: 'Matthew Taylor',
      email: 'matthew.taylor@example.com',
      age: 70,
      phoneNumber: '+1666555444',
    },
    {
      name: 'Laura Miller',
      email: 'laura.miller@example.com',
      age: 75,
      phoneNumber: '+1555444333',
    },
    {
      name: 'James Martinez',
      email: 'james.martinez@example.com',
      age: 80,
      phoneNumber: '+1444333222',
    },
    {
      name: 'Jessica Jones',
      email: 'jessica.jones@example.com',
      age: 85,
      phoneNumber: '+1333222111',
    },
    {
      name: 'Ryan Clark',
      email: 'ryan.clark@example.com',
      age: 90,
      phoneNumber: '+1222111000',
    },
    {
      name: 'Sophia Lewis',
      email: 'sophia.lewis@example.com',
      age: 95,
      phoneNumber: '+1111000999',
    },
  ];
  
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

    <TableContainer className='table' sx={{ maxHeight: 640 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
};

export default History;