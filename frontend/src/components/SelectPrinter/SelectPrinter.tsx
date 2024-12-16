import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon } from "lucide-react";
import { useSpring, animated } from '@react-spring/web'; 
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import "./user.css"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const SelectPrinter: React.FC = () => {
  const { username } = useUserContext();
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedPrinters, setSelectedPrinters] = useState<GridRowSelectionModel>([]);

  const logo_animate = useSpring({
    from: { left: 1638 },
    to: { left: isVisible ? 1736 : 1638 },
    config: { duration: 100, tension: 250, friction: 30, ease: "easeInOut" },
  });

  const navigate = useNavigate();

  const analog_animate = useSpring({
    from: { height: 0, opacity: 0, transform: 'translateY(-100%)' },
    to: {
      height: isVisible ? 245 : 0,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(100%)' : 'translateY(-100%)',
    },
    config: { tension: 150, friction: 20 },
  });

  const clickVisible = () => {
    setVisible(!isVisible);
  }

  const handlePrinterSelection = (newSelection: GridRowSelectionModel) => {
    setSelectedPrinters(newSelection);
  }

  const handleSavePrinters = () => {

    console.log('Selected Printer IDs:', selectedPrinters);

    
    // Cập nhật lựa chọn tại đây
    if (selectedPrinters.length > 0) {
      const selectedPrinterDetails = rows.filter(row => selectedPrinters.includes(row.id));
      alert(`Selected Printers:\n${selectedPrinterDetails.map(printer => 
        `${printer.firstName} ${printer.lastName}`).join('\n')}`);
    } else {
      alert('No printers selected');
    }
  }

  return (
    <div className='root'>
      <div className='BKU'/> 

      {/* Printer Selection Table */}
      <div className='choosePrinter'>Chọn Máy In</div>

      <Paper className='table' sx={{height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          onRowSelectionModelChange={handlePrinterSelection}
          rowSelectionModel={selectedPrinters}
        />
      </Paper>

      {/* Save Selected Printers Button */}
      <button 
        className='savePrinter'  
        onClick={handleSavePrinters}
        disabled={selectedPrinters.length === 0}
        style={{
          position: 'absolute', 
          width: '160px',
          height: '50px',
          left: '75%',
          bottom: '150px', 
          padding: '10px 20px',
          backgroundColor: selectedPrinters.length > 0 ? '#4CAF50' : '#cccccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: selectedPrinters.length > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        Lưu Máy In Đã Chọn
      </button>

      {/* User Logo and Template (existing code remains the same) */}
      <animated.div
        className='userLogo'
        style={logo_animate}
        onClick={clickVisible}
      />
      <div>
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
        <div style={{
          position: 'absolute',
          width: '278px',
          height: '1px',
          top: '100px',
          left: '10px',
          background: '#E5E7EB',
        }} />

        <div className='gmailTemplateTypo'>minh.nguyendangchill@hcmut.edu.vn</div>

        <button className='col' style={{top: "120px"}} onClick={() => {navigate(`/user/${username}/info`)}}>
          <InfoIcon />
          <div className='colfont'>Hồ sơ của bạn</div>
        </button>

        <button
          className='col'
          style={{top: "170px"}}
          onClick={() => {navigate("/")}}
        >
          <LogOutIcon /> 
          <div className='colfont'>Đăng xuất</div>
        </button>
      </animated.div>
    </div>
  );
};

export default SelectPrinter;