import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, InfoIcon, LogOutIcon } from "lucide-react";
import { useSpring, animated } from '@react-spring/web'; 
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import { DataGrid, GridColDef, GridRowSelectionModel, GridValueFormatter } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import "./user.css"


const columns: GridColDef[] = [
  { field: 'printer_id', headerName: 'ID', width: 120 },
  { field: 'printer_name', headerName: 'Tên Máy in', width: 250 },
  { field: 'location', headerName: 'Địa điểm', width: 200 },
  {
    field: 'supports_color',
    headerName: 'Hỗ trợ in màu',
    type: 'boolean',
    width: 150,
    renderCell: (params) => (
      <span style={{ color: params.value ? 'green' : 'red', fontSize: '16px' }}>
        {params.value ? '✓' : '✗'}
      </span>
    ),
  },
  {
    field: 'supports_duplex',
    headerName: 'Hỗ trợ in hai mặt',
    type: 'boolean',
    width: 150,
    renderCell: (params) => (
      <span style={{ color: params.value ? 'green' : 'red', fontSize: '16px' }}>
        {params.value ? '✓' : '✗'}
      </span>
    ),
  },
  { field: 'max_paper_size', headerName: 'Khổ giấy lớn nhất', width: 150 },
  { field: 'printer_status', headerName: 'Trạng thái', width: 150 },
];

const rows = [
  {
    id: 1,
    printer_id: 'PRN001',
    printer_name: 'HP LaserJet 500',
    location: '1st Floor, Room 101',
    supports_color: 1,
    supports_duplex: 1,
    max_paper_size: 'A4',
    printer_status: 'Available',
  },
  {
    id: 2,
    printer_id: 'PRN003',
    printer_name: 'Epson EcoTank L3150',
    location: 'Ground Floor, Reception',
    supports_color: 0,
    supports_duplex: 1,
    max_paper_size: 'A4',
    printer_status: 'Available',
  },
  {
    id: 3,
    printer_id: 'PRN004',
    printer_name: 'Brother HL-L2350DW',
    location: '3rd Floor, Room 308',
    supports_color: 0,
    supports_duplex: 1,
    max_paper_size: 'A0',
    printer_status: 'Available',
  },
  {
    id: 4,
    printer_id: 'PRN006',
    printer_name: 'Samsung ProXpress M4020ND',
    location: '1st Floor, Room 102',
    supports_color: 0,
    supports_duplex: 1,
    max_paper_size: 'A1',
    printer_status: 'Available',
  },
  {
    id: 5,
    printer_id: 'PRN007',
    printer_name: 'Xerox WorkCentre 6515',
    location: '5th Floor, Room 520',
    supports_color: 1,
    supports_duplex: 1,
    max_paper_size: 'A3',
    printer_status: 'Available',
  },
  {
    id: 6,
    printer_id: 'PRN009',
    printer_name: 'Lexmark MB2236adw',
    location: 'Basement, Storage',
    supports_color: 0,
    supports_duplex: 1,
    max_paper_size: 'A4',
    printer_status: 'Available',
  },
  {
    id: 7,
    printer_id: 'PRN010',
    printer_name: 'Kyocera TASKalfa 2552ci',
    location: '3rd Floor, Admin Office',
    supports_color: 1,
    supports_duplex: 1,
    max_paper_size: 'A3',
    printer_status: 'Available',
  },
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
        `${printer.printer_id} ${printer.printer_name}`).join('\n')}`);
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